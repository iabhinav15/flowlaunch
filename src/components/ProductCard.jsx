"use client";
import React, { useState } from 'react'
import ProductDetail from './ProductDetail';

const ProductCard = ({ product }) => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div onClick={() => setOpenModal(true)} className='max-w-72 h-[415px] px-10 py-6 bg-white border-2 border-solid border-red-950 cursor-pointer hover:scale-[1.03] shadow-xl overflow-hidden'>
        <img src={product.image} alt='Product Image' className='w-[256px] h-[300px]' />
          <h2 className='text-base mt-3 font-medium'>Rs. {product.price}</h2>
          <h2 className='text-base '>{product.title}</h2>
      </div>
      {openModal && (
        <ProductDetail product={product} setOpenModal={setOpenModal} />
      )}
    </>
  )
}

export default ProductCard