import React,{useEffect} from 'react'
import { useDispatch} from 'react-redux';
import { getProducts } from '../redux/actions/productsAction';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Offers from '../components/Offers';
import Footer from '../components/Footer';

const Home = () => {

  const dispatch = useDispatch(); 

useEffect(() =>{
  dispatch(getProducts())  
},[])

  return (
    <div>
      <Navbar />
      <Hero  />  
      <Offers />
      <div className='mt-16'>
        <Footer />  
      </div> 
    </div>
  )
}

export default Home