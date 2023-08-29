import React from 'react'

const Card = ({ name, date, src, temperature, weatherText, country }) => {
    return (
        <div className=' bg-white border-gray-800 shadow-lg ring-gray-700 ring-opacity-50 w-[50%] mx-auto mt-5 rounded-lg p-[1rem] mb-5'>
            <h1 className='text-2xl'>{name}</h1>
            <p className='text-gray-500'>{date} , {country}</p>
            <div className='mt-5 flex justify-between items-center mx-5 pb-[1rem]'>
                <h2 className='text-4xl md:text-7xl lg:text-8xl '>{temperature}°C</h2>
                <img className='w-[10rem]' src={src} alt='weatherImg' />
            </div>
            <p className='text-1xl'>{weatherText}</p>
        </div>
    )
}

export default Card