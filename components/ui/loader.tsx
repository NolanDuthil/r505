'use client';

import { useEffect, useState } from 'react';
import classNames from 'classnames';

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
    <div className={classNames("fixed top-0 left-0 w-full h-full flex items-center justify-center bg-background-alternative z-50", {
      "animate-slide-up": animate
    })}>
      <div className="text-foreground-alternative text-2xl">{progress}%</div>
    </div>
  );
}