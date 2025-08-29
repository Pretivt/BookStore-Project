import React from "react";
import Cards from "./Cards";
import { useState ,useEffect} from "react";


//  import list from "../../public/list.json";
import axios from"axios";

 import { Link} from "react-router-dom";
function Course() {
  const[book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
try{
 const res= await axios.get("http://localhost:4001/book");

 console.log(res.data)
 setBook(res.data)
}catch(error){
  console.log(error)

}
    }
    getBook();
  },[])
  return (
    <>
    
      <div className="max-w-screen-2x1 container mx-auto px-4">
        <div className="mt-0  items-center justify-center text-center">
          <h1 className="text-2xl pt-32 md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
          "In a world brimming with wonder and uncertainty, [Book Title] takes readers on an unforgettable journey through [main setting or theme]. This captivating tale weaves together the lives of [main character(s)] as they face [central conflict or challenge], uncover hidden truths, and navigate a path of self-discovery. With its rich narrative, vivid imagery, and compelling characters, the book offers a blend of [genre elements, e.g., suspense, romance, or humor] that will resonate with readers of all ages. [Book Title] is more than just a story; it’s a heartfelt exploration of [key message or theme], inviting readers to reflect, dream, and imagine {" "}
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-pink-700 duration-300">
              Back
            </button>
            </Link>
          
        </div>

        <div className=" mt-12grid grid -cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
      
    </>
  );
}

export default Course;