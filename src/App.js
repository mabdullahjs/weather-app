import React from 'react'

const App = () => {
  return (
    <>
      <h1 className="text-3xl text-center mt-2">
        Weather App
      </h1>
      <div className='w-[50%] mx-auto mt-[3%]'>
        <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="City Name" />
      </div>
    </>
  )
}

export default App