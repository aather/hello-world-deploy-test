'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [msg, setMsg] = useState('…loading');
  useEffect(() => {
    fetch('/api/hello')
      .then(r => r.json())
      .then(d => setMsg(d.message))
      .catch(() => setMsg('API call failed'));
  }, []);
  return (
    <main style={{padding: 24, fontFamily: 'ui-sans-serif'}}>
      <h1>Hello from Frontend</h1>
      <p>API says: <b>{msg}</b></p>
    </main>
  );
}
