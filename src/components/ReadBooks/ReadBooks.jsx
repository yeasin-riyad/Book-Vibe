import  { useEffect, useState } from 'react'
import HandleReadBooks from './HandleReadBooks';
import HandleReadBooksError from './HandleReadBooksError';

const ReadBooks = () => {
   
    const [books,setBooks]=useState([])
    useEffect(()=>{
        let data=localStorage.getItem('readBooks');
        setBooks(JSON.parse(data))
       
        
    },[books])
    
   
  return (
    <div className='flex flex-col gap-y-4 items-start my-5'>
        {
          
            Array.isArray(books)? books.map((book,index)=><HandleReadBooks key={index} book={book}></HandleReadBooks>):<HandleReadBooksError></HandleReadBooksError>
        }
    </div>
  )
}

export default ReadBooks