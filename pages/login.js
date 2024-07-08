import { signIn } from 'next-auth/client';

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const result = await signIn('credentials', {
      redirect: false,
      username,
      password
    });

    if (!result.error) {
      window.location.href = '/';
    } else {
      alert('Login failed');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input name="username" type="text" required />
        </label>
        <label>
          Password
          <input name="password" type="password" required />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
