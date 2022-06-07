import React from 'react';

// Styles
import './index.css';
import {Link} from "react-router-dom";
// Pages


const GetStarted = () => {
  return (
    <>
    <div className='text-center text-2xl py-40'>
    <p className='landing-text text-6xl text-cream-200'>Login or Create An Account to Get Planning</p>
    <div className='pt-3'>
      
      <Link to="/login">
      <button className="bg-gradient-to-t from-bubblegum-500 hover:bg-bubblegum-400 pt-3 mx-2 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all ease-in-out duration-500 rounded-lg lg:ml-5  focus:outline-none lg:font-medium">
        Login
        </button>
        </Link>

        <Link to="/signup">
      <button 
      className="bg-gradient-to-t from-bubblegum-500 hover:bg-bubblegum-400 pt-3 mx-2 pb-3 pl-12 pr-12 text-2xl font-semibold text-center text-white transition-all ease-in-out duration-500 rounded-lg lg:ml-5  focus:outline-none lg:font-medium">
        Sign Up
        </button>
        </Link>
    </div>
    </div>
    </>
  )
}

export default GetStarted

