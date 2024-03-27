

import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home";
import Hero from "../components/Hero";
import BookDetails from "../components/BookDetails/BookDetails";
import ListedBooks from "../components/ListedBooks/ListedBooks";
import ReadBooks from "../components/ReadBooks/ReadBooks";
import WishListBooks from "../components/WishListBooks/WishListBooks";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
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
        }

      ]
    },
  ]);


  export default router;