import { useEffect, useState } from "react"
import Book from "../Book/Book";


const Books = () => {
    const[books,setBooks]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    })
  return (
    <>

            <h1 className=" text-center text-5xl font-bold my-7 text-neutral-900 ">Books</h1>
        <div className="grid items-center justify-center gap-5 lg:grid-cols-3">
        
        {
            books.map((book,index)=><Book key={index} book={book}></Book>)
        }
    </div>
    

    </>

  )
}

export default Books