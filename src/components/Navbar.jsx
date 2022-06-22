import React,{useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaShoppingBasket } from "react-icons/fa"
import { Link } from 'react-router-dom'


const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center  max-w-[1240px] p-6 px-4 background-color: transparent'>
      <Link to='/'> <h1 className='text-xl ml-6 font-bold '>Shopping</h1></Link>
        <ul className='hidden md:flex '>
        <Link to='/products'><li className='ml-8 '>Products</li></Link>            
        <Link to='/contact'>    <li className='ml-8'>Contact</li></Link>
        <Link to='/cart'>   <FaShoppingBasket size={30} className="ml-8" /></Link>
                       
        </ul>
        

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] bg-black text-white h-50% border-r border-r-gray-900  ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
      <Link to='/products'><li className='p-4'>Products</li></Link>             
      <Link to='/contact'><li className='p-4'>Contact</li></Link>
      <Link to='/cart'><FaShoppingBasket size={30} className="ml-4" /></Link>     
      </ul>

    </div>
  )
}

export default Navbar