import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const{bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book;
    const[tag1,tag2]=tags;
  return (

    <Link to={`book/${bookId}`}>
        <div>

<div className="card bg-base-100 shadow-xl px-10 py-7">
  <figure className=" pt-10">
    <img src={image} alt="Shoes" className="rounded-xl h-96" />
  </figure>
  <div className="flex flex-col gap-y-3">
  <div className="flex justify-start gap-x-7 text-green-400 mt-2 text-base font-medium">
    <h1 className="bg-[#23BE0A0D] p-2 rounded-full">{tag1}</h1>
    <h1 className="bg-[#23BE0A0D] p-2 rounded-full">{tag2}</h1>
  </div>
  
    <div className="flex flex-col gap-y-3">
        <h1 className="text-2xl font-bold text-neutral-900">{bookName}</h1>
        <h1 className="text-[#131313CC] text-xl font-medium">By:{author}</h1>
    </div>
    <hr />
    <div className="flex justify-between items-center text-lg font-medium text-[#131313CC]">
        <h1>{category}</h1>
        <div className="flex items-center gap-x-3">
        <h1>{rating}</h1>
        <CiStar />
        </div>
    </div>

  </div>

  
 
</div>
    </div>
    </Link>
    
  )
}

export default Book;