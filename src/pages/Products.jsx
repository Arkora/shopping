import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector} from 'react-redux';
import { addCart } from '../redux/actions/cartActions'
import { getCategory,getProducts } from '../redux/actions/productsAction';
import Navbar from '../components/Navbar'

const Products = () => {
  const [category, setCategory] = useState("")
  const [sorted,setSorted] = useState(false)
  const dispatch = useDispatch()
  const products = useSelector((state) => state.productsReducer.products)
  
  useEffect(()=>{
    if(sorted){
      products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }
    else{
      products.sort((a, b) => parseFloat(b.price) > parseFloat(a.price));
    }
    
    
  },[sorted])

  

  

  useEffect(()=>{    
    if(category){
      dispatch(getCategory(category))
    }else{
    dispatch(getProducts())
    }    
  },[category])

  useEffect(()=>{

  },[products])
  
  


  return (
    <div>
      <Navbar />
      <div className='flex flex-col-3 max-w-[1240px]   mt-2'>
        <div className='w-64 mt-8 pl-6 '>
          <ul className='list-none'>
            <div className='mb-6'>
            <li><input type='radio' value='acs'  name='order' onClick={(e) => setSorted(true)} />Price low</li>
            <li><input type='radio' value='desc' name='order' onClick={(e) => setSorted(false)}/>Price higher</li>    
            </div>                   
        <li><input type="radio" value="" name='category' onClick={(e) => setCategory(e.target.value)} />All Products</li>
        <li><input type="radio" value='electronics' name='category' onClick={(e) => setCategory(e.target.value)} /> Electronic</li>
        <li><input type="radio" value='jewelery' name='category' onClick={(e) => setCategory(e.target.value)}/>Jewelery</li>
        <li><input type="radio" value={`men's clothing`} name='category' onClick={(e) => setCategory(e.target.value)}/>Men's clothing</li>
        <li><input type="radio" value={`women's clothing`} name='category' onClick={(e) => setCategory(e.target.value)}/>Women's clothing</li>

         
         </ul>   
          
        </div>
        <div className='w-full grid lg:grid-cols-3 gap-2 mt-8 pl-6 md:grid-col-3'>        
          {products.map(item=>{
            return(<div className='w-80 h-96 pl-2 pt-2 rounded-md bg-[#ffdd59] '>
            <h1 className='text-white truncate text-xl font-bold'>{item.title}</h1>
            <img src={item.image} alt={item.image} className='w-1/2 h-1/2 mt-6' />
            <h1 className='font-bold '>{item.price}$</h1>
            <button className='w-16 h-10 mt-10 rounded-md bg-[#0be881] text-white font-bold text-2xl' onClick={(e) => dispatch(addCart(item))}>Buy</button>
          </div>)
          })}
        </div>
        
      </div>
    </div>
  )
}

export default Products