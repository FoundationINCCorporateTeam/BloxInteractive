import { useSession } from 'next-auth/client';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Protected() {
  const [session, loading] = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.push('/login');
    }
  }, [loading, session]);

  if (loading || !session) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Protected Page</h1>
      <p>If you can see this, you are logged in.</p>
    </div>
  );
}
