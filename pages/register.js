export default function Register() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    const res = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (res.status === 201) {
      window.location.href = '/login';
    } else {
      const data = await res.json();
      alert(data.message);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input name="username" type="text" required />
        </label>
        <label>
          Password
          <input name="password" type="password" required />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
