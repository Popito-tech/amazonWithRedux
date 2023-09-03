import Image from 'next/image'
import Banner from './components/Banner'
import ProductFeed from './components/ProductFeed'

export default function Home({products}) {
  return (<div className='bg-gray-100'>
  <main className='max-w-screen-2xl mx-auto'>
  <Banner/>
  <ProductFeed products={products}/>
  <p></p>
  </main>
  </div>
  )
}
