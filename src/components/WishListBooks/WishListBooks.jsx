
import  { useEffect, useState,useContext } from 'react'
import HandleWishListBooks from './HandleWishListBooks';
import HandleWishListBooksError from './HandleWishListBooksError';
import { UserContext } from '../ListedBooks/UserContext';


const WishListBooks = () => {
  const {wishListData}=useContext(UserContext)

  const [books,setBooks]=useState([])
  const [displayBook,setDisplayBook]=useState([])


    useEffect(()=>{
        let data=localStorage.getItem('whiteList');
        setBooks(JSON.parse(data))
        if(wishListData.length){
          setDisplayBook(wishListData)
        }else{
          setDisplayBook(JSON.parse(data))
        }
       
        
    },[wishListData])
  return (
    <div className='flex flex-col gap-y-4 items-start my-5'>
      {
        Array.isArray(books)? displayBook.map((book,index)=><HandleWishListBooks key={index} book={book}></HandleWishListBooks>):<HandleWishListBooksError></HandleWishListBooksError>
      }

    </div>
  )
}

export default WishListBooks;