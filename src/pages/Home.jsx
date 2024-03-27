
import { Outlet } from 'react-router-dom'
import '../../src/index.css'
const Home = () => {
  return (
    <div className='lg:w-5/6 mx-auto'>
    {/* Header Section */}
    <div className="navbar bg-base-100 .work-sans">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                {/* <NavLink to='/listedBooks' role="tab" className={({isActive})=>isActive?"tab tab-active":"tab"}>Tab 1</NavLink>
        <NavLink to='wishlistBooks' role="tab" className={({isActive})=>isActive?"tab tab-active":"tab"}>Tab 2</NavLink> */}
        <li><a>Home</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 4</a></li>
        <li><a>Item 5</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-neutral-900 font-bold text-2xl">Books Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
      <li><a>Item 4</a></li>
      <li><a>Item 5</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex gap-x-5 ">
    <a className="btn bg-green-600 text-white hover:text-black">Sign In</a>
    <a className="btn bg-teal-300 text-white hover:text-black">Sign Up</a>
    </div>
   

  </div>
</div>

        <Outlet></Outlet>


    
    
    </div>
  )
}

export default Home