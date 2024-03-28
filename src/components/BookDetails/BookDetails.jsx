import { useLoaderData, useParams } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  getSaveBooksId, getWhiteListId, saveBooksId,  whiteListsId } from "../../utility/LocalStorage";


const BookDetails = () => {
    const books=useLoaderData();
    const bookId=useParams();

    const book=books.find(book=>book.bookId=== parseInt(bookId.id))
    const{bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book;
    const[tag1,tag2]=tags;

    const handleRead=()=>{
      
      if(getSaveBooksId().includes(bookId.id)){
        toast.error("You have already Read This Book..")
      }else{
        saveBooksId(bookId.id,book)
        toast("Books Added Successfully the Read List...")
      }
    
      
      

    }

    const handleWhitelist=()=>{
      if(getSaveBooksId().includes(bookId.id)){
        toast.error("You Already Read This book.......You cant add this book to the wishList Cart....")
      }else{

        if(!getWhiteListId().includes(bookId.id)){
          whiteListsId(bookId.id,book)
          toast("Successfully added to the WishList Cart..")
          
        }else{
          toast.error("You already added this item...To the WishList Cart..")
  
        }


      }
     
  
     
      
        
    }
 
  return (
    <div>
        {/* BookDetails */}
        <div className="hero min-h-screen bg-base-200 rounded-md">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
    <div className="bg-white p-8 flex flex-col gap-y-5 rounded-lg">
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="text-xl font-medium text-[#131313CC]">By : {author}</p>
      <hr />
      <p className="font-medium text-xl text-[#131313CC]">{category}</p>
      <hr />
      <p><span className="text-lg font-bold text-black">  Review :</span> {review} </p>
      <div className="flex gap-x-5 items-center">
        <h1 className="mt-1">Tag</h1>
        <h1 className=" text-green-400 mt-2 text-base font-medium bg-[#23BE0A0D] p-2 rounded-full">#{tag1}</h1>
        <h1 className=" text-green-400 mt-2 text-base font-medium bg-[#23BE0A0D] p-2 rounded-full">#{tag2}</h1>
      </div>
      <hr />
      <div className="flex gap-x-9">
        <h1>Number of Pages : </h1>
        <h1 className="text-lg font-bold text-black">{totalPages}</h1>
      </div>
      <div className="flex gap-x-9">
        <h1>Publisher :</h1>
        <h1 className="text-lg font-bold text-black">{publisher}</h1>
      </div>

      <div className="flex gap-x-9">
        <h1>Year Of Publishing :</h1>
        <h1 className="text-lg font-bold text-black">{yearOfPublishing}</h1>
      </div>
      <div className="flex gap-x-9">
        <h1>Rating :</h1>
        <h1 className="text-lg font-bold text-black">{rating}</h1>
      </div>

      <div className="flex gap-x-4">
      <button className="btn btn-primary text-black bg-white hover:text-white text-xl " onClick={handleRead}>Read</button>
      <button className="btn btn-primary bg-teal-400 border-teal-400 text-xl" onClick={handleWhitelist}>Wishlist</button>
      <ToastContainer></ToastContainer>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default BookDetails