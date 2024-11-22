'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setLoading(false);
          window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
          return 100;
        }
      });
    }, 10); // Adjust the interval speed as needed

    return () => clearInterval(interval);
  }, []);

  if (!loading) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-background-alternative z-50">
      <div className="text-foreground-alternative text-2xl">{progress}%</div>
    </div>
  );
}