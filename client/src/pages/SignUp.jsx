import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-6xl flex-col mx-auto md:flex-row md:items-center'>

        {/* left side */}

        <div className="flex-1">
        <Link to='/' className='font-bold dark:text-white text-4xl'> 
      <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Siddharth's</span>
       Blog
      </Link>
      <p className='text-sm mt-5 mb-4'>
         Hello and Welcome to My Blog Webiste. Please Sign Up here with a cool Username and a Password you can remember!
        <br/><br/>Pfttt... or just Sign Up using Google!
      </p>
        </div>

        {/* right side */}

        <div className="flex-1">
          <form className='flex flex-col gap-4'>
            <div className="md:px-7">
              <Label value='Your Username'/>
              <TextInput type='text' placeholder='Username' id='username'/>  
            </div>
            <div className="md:px-7">
              <Label value='Your Email'/>
              <TextInput type='text' placeholder='something@example.com' id='email'/>  
            </div>
            <div className="md:px-7">
              <Label value='Your Password'/>
              <TextInput type='text' placeholder='Password' id='password'/>  
            </div>
            <Button gradientDuoTone={'purpleToPink'} type='submit'>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to={'/sign-in'} className='text-blue-500'>
            Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
