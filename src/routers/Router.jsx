

import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import Hero from "../components/Hero";
import BookDetails from "../components/BookDetails/BookDetails";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import ReadBooks from "../components/ReadBooks/ReadBooks";
import WishListBooks from "../components/WishListBooks/WishListBooks";
import PagesToRead from "../components/PagesToRead/PagesToRead";
import Error from "../components/Error/Error";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement:<Error></Error>,
      children:[
        {
            path:"/",
            element:<Hero></Hero>,
            
        },
        {
          path:'book/:id',
          element:<BookDetails></BookDetails>,
          loader:({params})=>fetch('../data.json')
        },
        {
          path:'listedBooks',
          element:<ListedBooks></ListedBooks>,
          children:[
            {
              index:true,
              element:<ReadBooks></ReadBooks>
            },
            {
              path:'wishlistBooks',
              element:<WishListBooks></WishListBooks>
            }
          ]
        },
        {
          path:'pagesToRead',
          element:<PagesToRead></PagesToRead>
        }

      ]
    },
  ]);


  export default router;