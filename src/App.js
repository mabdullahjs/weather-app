import axios from 'axios';
import React, { useRef, useState } from 'react'

const App = () => {

  //state for data
  const [data , setData] = useState(null);

  //use ref for getting form value
  const inputRef = useRef(null);

  //show weather function
  const showWeather = ()=>{
    const key = 'b4db485d7c4c485fa6d84351232508'
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${inputRef.current.value}&aqi=no`)
    .then((res)=>{
      console.log('res==>',res.data);
      setData(res.data);
      inputRef.current.value = '';
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
      <h1 className="text-3xl text-center mt-2">
        Weather App
      </h1>
      <div className='w-[50%] mx-auto mt-[3%]'>
        <input ref={inputRef} className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="City Name" />
      </div>
      <div className='text-center'>
        <button onClick={showWeather} type="button" className="bg-blue-500 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg mt-5">Show Weather</button>
      </div>
    </>
  )
}

export default App