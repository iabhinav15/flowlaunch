import React, { useEffect, useState } from 'react'

const useFetchProducts = (debouncedSearch) => {

  const [products, setProducts] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(()=>{
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();

        // Filter products based on search
        const filteredProducts = data?.filter((product) => product.title.toLowerCase().includes(debouncedSearch.toLowerCase()));

        setProducts(filteredProducts); 
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(true);
        console.log(error);
      }
    }
    fetchProducts();
  }, [debouncedSearch]);

  return [products, isLoading, error];
}

export default useFetchProducts