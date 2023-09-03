'use client'
import React from 'react'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux';
import CheckoutProduct from '../components/CheckoutProduct';
import { SelecItems, selectTotal } from '../redux/BasketSlice';
import { useSession } from 'next-auth/react';

function Page() {
    const items = useSelector(SelecItems);
    const total = useSelector(selectTotal);
    const { data: session, status } = useSession();
    return (
        <div className='bg-gray-100'>
        
        
        <main className='lg:flex max-w-screen-2xl mx-auto'>
            
            <div className='flex-grow m-5 shadow-sm'>
            <Image
                src='https://www.intelligencenode.com/blog/wp-content/uploads/2019/06/Prime-day.jpg'
                width={1020}
                height={250}
                objectFit='contain'
            />
            <div className='flex flex-col p-5 space-y-10 bg-white'>
                <h1 className='text-3xl border-b pb-4'>
                {items.length===0 ? 'Your Amazon Basket is empty.' : 'Shopping Basket'}
                </h1>
                {items.map((item,i)=>(
                    <CheckoutProduct
                        key={i}
                        id={item.id}
                        tittle={item.title}
                        rating={item.rating}
                        price={item.price}
                        description={item.description}
                        category={item.category}
                        image={item.image}
                        hasPrime={item.hasPrime}
                    />
                ))}
            </div>
            </div>
    

    {/* Right side */}
            <div className='flex flex-col bg-white p-10 shadow-md'>
                {items.length > 0 &&(
                    <>
                        <h2 className='whithespace-nowrap'>
                        Subtotal({items.length} items):
                        <span className='font-bold'>
                            {total}
                        </span></h2>
                        
                        <button 
                        disabled={!session}
                        className={`button mt-2 ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not'}`}>
                            {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
                        </button>
                    </>
                )}
            </div>
        </main>
        </div>
      )
}

export default Page