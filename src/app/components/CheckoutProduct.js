import Image from 'next/image'
import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../redux/BasketSlice';


function CheckoutProduct({
    id,
    tittle,
    price,
    rating,
    description,
    category,
    image,
    hasPrime,
    
}) {
    const dispatch= useDispatch();
    const addItemToBasket =()=>{
        const product ={
            id, 
            tittle, 
            price,
            rating, 
            description, 
            category, 
            image,
            hasPrime,
        };
        dispatch(addToBasket(product));
     }

     const removeItemFromBasket = () =>{
        dispatch(removeFromBasket({id}));
     };
     
  return (
    <div className='grid grid-cols-5'>

    <div><Image alt='' src={image}  width={0} height={0} sizes="100vw"
            className="w-auto h-24 md:h-36 lg:h-48"/></div>

    <div className='col-span-3'>
    <p>{tittle}</p>
    <div className='flex'>
                {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <StarIcon 
              className="h-5 text-yellow-500"
              key={i}
              />
            ))}
            </div>
    <p className='text-xs my-2 line-clamp-3'>{description}</p>
    <div>{price}</div>
    {hasPrime && (
                <div className='flex items-center space-x-2'>
                <img 
                loading='lazy'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/1200px-Amazon_Prime_Logo.svg.png"
                alt=''
                className="w-12" 
                />
                <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}
    </div>

    <div className='flex flex-col space-y-2'>
    <button onClick={addItemToBasket} className='button mt-auto'>add to basket</button>
    <button onClick={removeItemFromBasket} className='button mt-auto'>remove from basket</button>
    </div>




    </div>
  )
}

export default CheckoutProduct