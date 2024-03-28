import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import ReadBooks from "../ReadBooks/ReadBooks";
import { UserContext } from "./UserContext";



const ListedBooks = () => {
  const [readBookData,setReadBookData]=useState([])
  const [wishListData,setWishListData]=useState([])
  // const [optionValue,setOptionValue]=useState(null);

  let readBooksData=JSON.parse(localStorage.getItem('readBooks'));
  let wishListsData=JSON.parse(localStorage.getItem('whiteList'));
 
  const optionChange=(e)=>{
   
    if(e.target.value==="Rating"){

      readBooksData.sort((a,b)=>b.rating-a.rating)
      setReadBookData(readBooksData)
    
  
       wishListsData.sort((a,b)=>b.rating-a.rating)
      setWishListData(wishListsData)
      // localStorage.setItem("whiteList",JSON.stringify(wishListData))
    }else if(e.target.value==="Number Of Pages"){
      readBooksData.sort((a,b)=>b.totalPages-a.totalPages)
      // setReadBookData(readBooksData)

      setReadBookData(readBooksData)
     
      wishListsData.sort((a,b)=>b.totalPages-a.totalPages)
      setWishListData(wishListsData)
      // localStorage.setItem("whiteList",JSON.stringify(wishListData))


    }else if(e.target.value==="Publisher Year"){
      
      readBooksData.sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing)
      setReadBookData(readBooksData)
      // localStorage.setItem('readBooks',JSON.stringify(readBooksData))
      wishListsData.sort((a,b)=>b.yearOfPublishing-a.yearOfPublishing)
      setWishListData(wishListsData)
    }
    
  }
  // console.log(optionValue)


  // console.log(readBookData)
  // console.log(wishListData)

  const [tabIndex,setTabIndex]=useState(0);
  return (
    <div>
      <h1 className=" text-center text-5xl font-bold my-7 text-neutral-900 bg-[#1313130D] p-6 rounded-lg lg:p-10">
        Books
      </h1>
      <div className="flex justify-center">
        <select className="select select-bordered max-w-xs" onChange={optionChange}>
         <option disabled selected>Sort By</option>
          <option>Rating</option>
          <option>Number Of Pages</option>
          <option>Publisher Year</option>
        </select>
      </div>

      <div role="tablist" className="tabs tabs-lifted my-16 w-11/12 md:w-2/5">
        {/* <NavLink to='/listedBooks' role="tab" className={({isActive})=>isActive?"tab tab-active":"tab"}>Tab 1</NavLink>
        <NavLink to='wishlistBooks' role="tab" className={({isActive})=>isActive?"tab tab-active":"tab"}>Tab 2</NavLink> */}

        <Link to='/listedBooks' onClick={()=>setTabIndex(0)} role="tab" className={`tab ${tabIndex===0?'tab-active':''}`}>Read Books</Link>
        <Link to='wishlistBooks' onClick={()=>setTabIndex(1)} role="tab" className={`tab ${tabIndex===1?'tab-active':''}`}>WishList Books</Link>
      





        {/* <a role="tab" className="tab tab-active">
          Tab 1
        </a>
        <a role="tab" className="tab ">
          Tab 2
        </a> */}
      </div>
      <UserContext.Provider value={{readBookData,wishListData}}>
      <Outlet></Outlet>
      </UserContext.Provider>

      

    </div>
  );
};

export default ListedBooks;
