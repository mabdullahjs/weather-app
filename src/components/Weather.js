import axios from 'axios';
import React, { useRef, useState } from 'react'
import Card from './Card';

const Weather = () => {

  //state for data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  //use ref for getting form value
  const inputRef = useRef(null);

  //show weather function
  const showWeather = (event) => {
    event.preventDefault();
    setLoading(true)
    const key = 'b4db485d7c4c485fa6d84351232508'
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${inputRef.current.value}&aqi=no`)
      .then((res) => {
        // console.log('res==>', res.data);
        setData([res.data, ...data]);
        inputRef.current.value = '';
        setLoading(false)
      })
      .catch((err) => {
        // console.log(err);
        alert('no such city');
        inputRef.current.value = '';
        setLoading(false)
      })
  }
  return (
    <div className='h-[100vh]'>
      <h1 className="text-3xl text-center mt-2  font-extrabold">
        Weather App
      </h1>
      <form onSubmit={showWeather}>
      <div className='w-[50%] mx-auto mt-[3%]'>
        <input ref={inputRef} className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="City Name" />
      </div>
      <div className='text-center'>
        <button  type='submit' className="bg-blue-500 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg mt-5">{loading ? 'loading...' : 'Show Weather'}</button>
      </div>
      </form>
      

      {data.length > 0 ? data.map((item) => {
        return <Card key={item.location.name} name={item.location.name} temperature={item.current.temp_c} src={item.current.condition.icon} date={item.location.localtime} weatherText={item.current.condition.text} country={item.location.country} />
      }) : <h1 className='text-center mt-[2rem]'>Please search weather.</h1>}
    </div>
  )
}

export default Weather