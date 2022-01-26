import {useEffect, useState} from 'react';
import {Products} from '../interfaces/productsInterfaces';

export default function useDetails(id: number) {
  const [detailsProduct, setDetailsProduct] = useState<Products>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getDetails = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      setDetailsProduct(data);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return {...detailsProduct, loading, error};
}
