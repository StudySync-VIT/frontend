import React from 'react'
import Button from '@mui/material/Button';

function Main() {
  return (
    <div className='flex justify-center items-center w-full h-screen mx-auto my-5'>
        <div className='w-1/2 m-6 flex flex-col'>
        <h1 className=" text-8xl font-bold text-blue-500 font-poppins">StyleSync</h1>
        </div>
        <div className='w-1/3 m-6 p-2 flex flex-col'>
        <Button color="secondary" variant="contained" size="large" sx={{ m: 3 }}>Sign Up</Button>
        <Button color="secondary" variant="contained" size="large" sx={{ m: 3 }}>Sign In</Button>
         </div>
    </div>
  )
}

export default Main