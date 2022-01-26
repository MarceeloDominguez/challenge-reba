import React, {useEffect, useState} from 'react';
import {Products} from '../interfaces/productsInterfaces';

export default function useProducts() {
  const [listProducts, setListProducts] = useState<Products[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getProducts = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      setListProducts(data);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {listProducts, loading, error};
}
