import Books from "./Books/Books"
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <>

<div className="hero bg-base-200 p-4 mt-7 lg:p-20 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/0C3s5pg/The-Great-Gatsby.jpg" className="max-w-sm rounded-lg shadow-2xl h-72 w-auto" />
    <div className="text-center lg:text-left">
      <h1 className=" font-bold text-6xl">Books to freshen up your bookshelf.</h1>
      
      {
        <Link to="listedBooks"> <button className="btn btn-primary mt-8 bg-green-600 border-green-600">View The List</button></Link>
      }
    </div>
  </div>
</div>

<Books></Books>





    
    
    </>
  )


}

export default Hero