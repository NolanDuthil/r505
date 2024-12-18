'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setAnimate(true);
          }, 500);
          return 100;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-background-alternative z-50 ${animate ? 'animate-slide-up' : ''}`}>
      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="text-foreground-alternative font-bold text-[73px]">{progress}%</div>
      </div>
      <h2 className="text-foreground-alternative text-xl mb-4 text-center">
        2020 déplacé maison <br /> All rights reserved
      </h2>
    </div>
  );
}