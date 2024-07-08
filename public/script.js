async function signOut() {
  await fetch('/api/auth/signout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });
  window.location.href = '/login';
}
