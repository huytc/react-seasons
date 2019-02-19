import { useState, useEffect } from 'react';

export default () => {
  const [lat, setLat] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude);
      },
      err => {
        setError(err.message);
      }
    );
  }, []);

  return [lat, error];
}