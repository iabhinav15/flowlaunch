"use client";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import useFetchProducts from "./hooks/useFetchProducts";


export default function Home() {

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);
  const [products, isLoading, error] = useFetchProducts(debouncedSearch);

  return (
   <>
      <Header />
      <div className="w-[90vw] mx-auto">
        {/* <h1 className="text-center">Products</h1> */}
        <div className="text-center my-4">
          <div className="relative inline-block sm:w-1/2 w-full  ">
            <Image src="/search.png" width={20} height={20} alt="search" className="absolute top-1/2 left-3 transform -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search Products"
              className="w-full p-2 pl-10 border-2"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-12 justify-center px-10 my-8 ">
          { isLoading ? <p>Loading...</p> : 
            error ? <p>Something went wrong</p> : 
            products.length === 0 ? <div>No products found<Image src="/empty.png" width={200} height={200} alt="search" /></div> :
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          }
        </div>
      </div>
   </>
  );
}
