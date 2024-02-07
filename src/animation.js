import { useEffect, useRef } from 'react';

const useScrollAnimation = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    elementsRef.current.forEach((el) => observer.observe(el));

    return () => {
      elementsRef.current.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const setRef = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return [setRef];
};

export default useScrollAnimation;
