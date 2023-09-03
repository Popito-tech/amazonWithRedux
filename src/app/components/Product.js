'use client'

import { StarIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../redux/BasketSlice'



function Product({id, title, price, description, category, image}) {

    const dispatch = useDispatch();

    const [rating] = useState(Math.floor(Math.random() * 5) + 1);
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true); // <-- toggle on client-side, because useEffect doesn't run on server-side/during SSG build
      }, []);
      const [hasPrime]= useState(Math.random()<0.5);

      const addItemToBasket = () =>{
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime,
        };
        dispatch(addToBasket(product))
      };


  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
        <Image alt='' src={image}  width={0} height={0} sizes="100vw"
            className="w-auto h-48 mx-auto"
        />
        <h4 className='my-3'>{title}</h4>
        {hasMounted && (
        <div className="flex">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <StarIcon 
              className="h-5 text-yellow-500"
              key={i}
              />
            ))}
        </div>
      )}
        <p className="text-xs mt-2 my-2 line-clamp-2">{description}</p>
        <p >{price}</p>
        {hasMounted && hasPrime &&(
            <div className="flex items-center space-x-2 " >
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/1200px-Amazon_Prime_Logo.svg.png"
                alt=''
                className="w-12" 
                />
                <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                
            </div>
        )}
        <button onClick={addItemToBasket} className="mt-auto button"  >Add to Basket</button>
    </div>
  )
}

export default Product