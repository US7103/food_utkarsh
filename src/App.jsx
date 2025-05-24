import React, { useEffect, useState } from 'react'
import Header from './component/Header'

const App = () => {
  
  const [count, setCount] = useState(0);
  const [cartCount, setCartCount] = useState(false);

  const addToCart=()=>{
    setCount(prev=>prev+1);
  }

  const remoToCart=()=>{
    if(count===0){
      setCount(prev=>prev)
    }else{
      setCount(prev=>prev-1)
    }
  }
   
  

  const [user, setUser] = useState([]);

  useEffect(() => {
    
    fetch("https://dummyjson.com/recipes")
    .then(res=>res.json())
    .then((data)=>setUser(data.recipes))
    .catch((err)=>{console.error(err);
    })
  }, []);

 
  return (
    <>
    <Header onCartClick={()=>setCartCount(prev=>!prev)} count={count} />
    <img className=' w-full h-[35rem]' src='UtkarshKitchen.png'/>
    <div className='flex-wrap flex'>
      {
      user.map((item)=>(
        
      <div className=' rounded-2xl bg-gray-400 items-center text-center flex flex-col justify-center w-80 my-8 mx-16' key={item.id}>
        <img className=' rounded-t-xl h-80 w-80' src={item.image} alt="" />
        <p>Item:{item.name}</p>
        <p>Rating: {item.rating}</p>
        {item.cuisine==="Pakistani"?(<p>Indian</p>):(<p>{item.cuisine}</p>)}
        <div>
        <button onClick={addToCart} className='  mx-3 rounded-lg px-3 py-2 bg-emerald-700 text-white text-lg '>Add</button>
        <button onClick={remoToCart} className=' mx-3 rounded-md px-3 py-2 bg-red-700 text-white text-lg '>Remove</button>
        </div>
      </div>
      ))
      }
    </div>
     
    
    </>
   );

}
export default App

