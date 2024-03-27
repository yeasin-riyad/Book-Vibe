import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";


const ListedBooks = () => {

  const [tabIndex,setTabIndex]=useState(0);
  return (
    <div>
      <h1 className=" text-center text-5xl font-bold my-7 text-neutral-900 bg-[#1313130D] p-6 rounded-lg lg:p-10">
        Books
      </h1>
      <div className="flex justify-center">
        <select className="select select-bordered max-w-xs">
          <option disabled selected>
            Sort By
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
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

      <Outlet></Outlet>

    </div>
  );
};

export default ListedBooks;
