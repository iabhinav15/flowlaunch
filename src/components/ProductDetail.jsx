import React from 'react'
import Rating from 'react-rating'

const ProductDetail = ({product, setOpenModal}) => {
  
  return (
    <>
      <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50' onClick={() => setOpenModal(false)}>
          <div onClick={(e) => e.stopPropagation()} className='absolute top-1/2 left-1/2 md:w-[40%] w-[80%] min-h-[60%] transform -translate-x-1/2 -translate-y-1/2 bg-white md:p-10 p-6 rounded-lg'>
            <button onClick={() => setOpenModal(false)} className='absolute top-3 right-3 w-12 bg-blue-300 rounded-full hover:scale-[1.04] ' ><img src='/cross.png' className='' /></button>
            <img src={product.image} width={200} height={200} alt='Product Image' className='mx-auto' />
            <h2 className='text-xl font-medium mt-4'>{product.title}</h2>
            <h2 className='text-lg my-1 font-semibold'>Rs. {product.price}</h2>
            <p>{product.description}</p>
            <p className='text-lg mt-1 font-medium flex gap-1 '>Rating: <span className='hidden sm:flex'> <Rating  initialRating={product.rating.rate} readonly={true} /></span> {product.rating.rate} </p>
            <p>Total Ratings: {product.rating.count}  </p>
          </div>
        </div>
    </>
  )
}

export default ProductDetail