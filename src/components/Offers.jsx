import React from 'react'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/actions/cartActions'

const Offers = () => {
  const products = useSelector((state) => state.productsReducer.products)
  const offers = products.slice(2,10)
  const dispatch = useDispatch()
  return (
    <div className='lg:w-full lg:h-screen md:p-20  '>     
     <h1 className='text-xl font-bold'>Hot Offers</h1>
     {products.length ? (
     <div className='mt-8 md:grid md:grid-cols-3  md:gap-4 text-white text-2xl '>
      <div className='lg:w-80 lg:h-96  lg:pl-6 lg:pt-4 rounded-md bg-[#ffdd59]'>
        <h1 className='text-white truncate font-bold'>{offers[0].title}</h1>
        <img src={offers[0].image} alt={offers[0].image} className='w-1/2 h-1/2 mt-6' />
        <h1 className='text-black'>{offers[0].price}$</h1>
        <button className='w-16 h-10 mt-10 rounded-md bg-[#0be881] font-bold text-2xl' onClick={(e) => dispatch(addCart(offers[0]))}>Buy</button>
      </div>
      <div className='lg:w-80 lg:h-96  lg:pl-6 lg:pt-4 rounded-md bg-[#ffdd59]'>
        <h1 className='text-white truncate font-bold'>{offers[0].title}</h1>
        <img src={offers[1].image} alt={offers[1].image} className='w-1/2 h-1/2 mt-6' />
        <h1 className='text-black'>{offers[1].price}$</h1>
        <button className='w-16 h-10 mt-10 rounded-md bg-[#0be881] font-bold text-2xl' onClick={(e) => dispatch(addCart(offers[1]))}>Buy</button>
      </div>
      <div className='lg:w-80 lg:h-96  lg:pl-6 lg:pt-4 rounded-md bg-[#ffdd59]'>
        <h1 className='text-white truncate font-bold'>{offers[0].title}</h1>
        <img src={offers[4].image} alt={offers[4].image} className='w-1/2 h-1/2 mt-6' />
        <h1 className='text-black'>{offers[4].price}$</h1>
        <button className='w-16 h-10 mt-10 rounded-md bg-[#0be881] font-bold text-2xl' onClick={(e) => dispatch(addCart(offers[4]))}>Buy</button>
      </div> 
      <Link to='products'><button className='w-52 h-10 mt-10 rounded-md bg-[#0be881] font-bold  text-2xl'> All Products</button></Link>
     
     </div>
      ) :(<div></div>)}
    </div>
  )
}

export default Offers