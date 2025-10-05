import { useEffect, useState } from 'react';

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500">
      <div className="text-center">
        <div className="relative w-32 h-32 mx-auto mb-8">
          <svg className="w-full h-full animate-spin" viewBox="0 0 100 100">
            <circle
              className="stroke-gray-200 dark:stroke-gray-700"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              strokeWidth="8"
            />
            <circle
              className="stroke-emerald-500 transition-all duration-300"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              strokeWidth="8"
              strokeDasharray={`${progress * 2.827}, 282.7`}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {progress}%
            </span>
          </div>
        </div>
        <p className="text-lg text-gray-600 dark:text-gray-400 animate-pulse">
          Loading Experience...
        </p>
      </div>
    </div>
  );
};
