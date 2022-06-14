import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (apiUrl) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [error, setError] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const response = await axios(apiUrl);
      setItems(response.data);
      setIsLoading(false);
    };

    fetchItems();
  }, []);

  return {
    items,
    isLoading,
  };
};

export default useFetch;
