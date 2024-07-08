import { signOut, useSession } from 'next-auth/client';

export default function Home() {
  const [session, loading] = useSession();

  return (
    <div>
      <h1>BloxInteractive</h1>
      {session ? (
        <>
          <a href="/protected">Dashboard</a>
          <button onClick={() => signOut()}>Sign Out</button>
        </>
      ) : (
        <>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </>
      )}
    </div>
  );
}
