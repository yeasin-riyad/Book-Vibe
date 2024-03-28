import  { useEffect, useState,useContext } from 'react'
import HandleReadBooks from './HandleReadBooks';
import HandleReadBooksError from './HandleReadBooksError';
import { UserContext } from '../ListedBooks/UserContext';


const ReadBooks = () => {
  const {readBookData}=useContext(UserContext)
  console.log(readBookData)
  
 
  const [books,setBooks]=useState([])
  const [displayBooks,setDisplayBooks]=useState([])

 
   

    useEffect(()=>{
        let data=localStorage.getItem('readBooks');
        setBooks(JSON.parse(data))
        if(readBookData.length){
          setDisplayBooks(readBookData)
          // console.log(displayBooks)
        }else{
          setDisplayBooks(JSON.parse(data))

        }
        
       
        
    },[readBookData])
    
   
  return (

   <div>





      <div className='flex flex-col gap-y-4 items-start my-5'>
        {
          
            Array.isArray(books)? displayBooks.map((book,index)=><HandleReadBooks key={index} book={book}></HandleReadBooks>):<HandleReadBooksError></HandleReadBooksError>
        }
    </div>




   </div>
   
  )
}

export default ReadBooks