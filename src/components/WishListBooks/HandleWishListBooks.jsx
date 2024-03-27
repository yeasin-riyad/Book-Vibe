import { CiLocationOn } from "react-icons/ci";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineContactPage } from "react-icons/md";


const HandleWishListBooks = ({book}) => {
    const{bookId,bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing}=book;
    const[tag1,tag2]=tags;
  return (
    <div>


    <div className="w-full" >
        <div className=" flex flex-col gap-y-3 items-start justify-center gap-x-3 lg:flex-row ">
            <div>
                <img className="h-96 w-96"  src={image} alt=""/>
            </div>
            <div>
            <div className="card-body">
<div className="flex flex-col gap-y-4">
<h1 className="text-neutral-900 text-2xl font-bold">{bookName}</h1>
<h1 className="text-[#131313CC] text-base font-medium"><span>By : </span>{author}</h1>
<div className="flex gap-x-5 items-center text-base ">
<h1 className="text-neutral-900 font-bold">Tag</h1>
<h1 className="text-green-600 bg-[#23BE0A0D] p-3 rounded-full font-medium">#{tag1}</h1>
<h1 className="text-green-600 bg-[#23BE0A0D] p-3 rounded-full font-medium">#{tag2}</h1>
 <div className="flex gap-x-1 items-center text-[#131313CC] font-normal">
 <CiLocationOn />
 <h1>{`Year of Publishing: ${yearOfPublishing}`}</h1>



 </div>

</div>

<div className="flex gap-x-5 items-center text-[#13131399]">
    <div className="flex gap-x-1 items-center">
    <IoPeopleSharp />
    <h1>Publisher:{publisher}</h1>
   
    </div>
    <div className="flex gap-x-1 items-center">
    <MdOutlineContactPage />
    <h1>Page:{totalPages}</h1>


    </div>

 </div>

 <hr className="my-2" />
</div>

<div className="flex gap-x-4">
<button className="text-blue-500 bg-[#328EFF26] p-2 rounded-full">{`Category: ${category}`}</button>
<button className="text-amber-400 bg-[#FFAC3326] p-2 rounded-full">{`Rating: ${rating}`}</button>
<button className="bg-green-600 text-white py-2 px-3 rounded-full">View Details</button>

</div>
</div>
            </div>

        </div>
    </div>
</div>
  )
}

export default HandleWishListBooks