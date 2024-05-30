import React, { useEffect, useState } from 'react'

const useDebounce = (searchQuery, delay = 500) => {

  const [debouncedValue, setDebouncedValue] = useState("");

  useEffect(()=>{ 
    const handler = setTimeout(() => {
      setDebouncedValue(searchQuery)
    }, delay)

    return () => clearTimeout(handler)

  }, [searchQuery, delay]);

  return debouncedValue;
}

export {useDebounce}