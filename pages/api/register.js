import { hashPassword } from '../../lib/auth';
import { addUser, findUser } from '../../lib/db';

export default async (req, res) => {
  if (req.method !== 'POST') {
    return;
  }

  const { username, password } = req.body;

  if (!username || !password) {
    res.status(422).json({ message: 'Invalid input.' });
    return;
  }

  const existingUser = await findUser(username);

  if (existingUser) {
    res.status(422).json({ message: 'User exists already!' });
    return;
  }

  const hashedPassword = await hashPassword(password);

  const result = await addUser({
    username,
    password: hashedPassword
  });

  res.status(201).json({ message: 'Created user!' });
};
