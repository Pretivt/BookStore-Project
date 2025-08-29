import React from 'react'
import {Link} from "react-router-dom";


function About() {
    
  return (
   <>
   <div className="hero bg-base-200 min-h-screen dark:bg-slate-900 dark:text-white">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img 
      src="https://img.freepik.com/premium-vector/book-delivery-store-goods-reception-illustration_109722-1213.jpg?uid=R157339592&ga=GA1.1.1592936231.1733374318&semt=ais_hybrid"
      className="max-w-sm rounded-lg shadow-2xl  h-64 md: mb-32 sm:mt-24"  />
    <div>
      <h1 className="text-5xl font-bold">Bookland is Best choice for <span className='text-pink-500'>Learners...</span> </h1>
      <p className="py-6 mb-3 ">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro incidunt expedita dolores. Culpa, sequi? Officia quis voluptatibus sit sed modi adipisci ullam repudiandae aperiam? Labore odit vel ut praesentium asperiores ducimus? Repudiandae sed, provident obcaecati quasi hic nulla dolor exercitationem.
      </p>
      <Link to="/"className="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
   </>
  );
}

export default About
