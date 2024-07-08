import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { findUser, verifyPassword } from '../../../lib/auth';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        const user = await findUser(credentials.username);

        if (!user) {
          throw new Error('No user found');
        }

        const isValid = await verifyPassword(credentials.password, user.password);

        if (!isValid) {
          throw new Error('Could not log you in!');
        }

        return { id: user.id, name: user.username, email: user.email };
      }
    })
  ],
  pages: {
    signIn: '/login'
  },
  callbacks: {
    async session(session, user) {
      session.user = user;
      return session;
    },
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  }
});
