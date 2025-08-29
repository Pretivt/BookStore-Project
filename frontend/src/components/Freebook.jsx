import React, { useEffect, useState } from "react";
import Cards from "./Cards";
// import list from "../../public/list.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from'axios';
import { Form } from "react-router-dom";

function FreeBook() {
    const[book,setBook]=useState([]);
    useEffect(()=>{
      const getBook=async()=>{
  try{
   const res= await axios.get("http://localhost:4001/book");

   const data=(res.data.filter((data)=> data.category=="free"))
   console.log(data);
   setBook(data)
  }catch(error){
    console.log(error)
  
  }
      }
      getBook();
    },[]);


 // Filter books with category "free"
//  const filterData = list.filter((book) => book.category === "free");

 const settings = {
     dots: true,
     infinite: false,
     speed: 500,
     slidesToShow: 3,
     slidesToScroll: 3,
     responsive: [
         {
             breakpoint: 1024,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: true,
             },
         },
         {
             breakpoint: 600,
             settings: {
                 slidesToShow: 2,
                 slidesToScroll: 2,
             },
         },
     ],
 };

 return (
  <div className="max-w-screen-2x1 mx-auto container  px-4  ">
    
    <div>
      <h1 className="font-semibold text-xl pb-2 ">Free Offered Courses</h1>
      <p>Offers hundreds of free books in a variety of topics, including food and health,cooking,sports </p>
    </div>
    <div>
    <Slider {...settings}>
    {book.map((item) => (
      <Cards item={item} key={item.id}/>
    ))}
      </Slider>
    </div>

    </div>
  
    
  );
  }
 

export default FreeBook;  




