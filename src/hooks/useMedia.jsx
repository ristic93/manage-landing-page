import { useEffect, useState } from 'react';

const useMedia = (query) => {

  const [matches, setMatches] = useState(false);
  const [isLoading, setLoading] = useState(true);
  
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => {
      setMatches(media.matches)
      setLoading(false)
    };
    listener();
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return {isDesktop: matches, isLoading};
};

export default useMedia;