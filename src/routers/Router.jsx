

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
import Academy from "../components/Academy/Academy";
import Form from "../components/Form/Form";
import HandleError from "../components/PagesToRead/HandleError";



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
          element:<PagesToRead></PagesToRead>,
          errorElement:<HandleError></HandleError>
        },
        {
          path:'Academy',
          element:<Academy></Academy>
        },
        {
          path:'form',
          element:<Form></Form>
        }

      ]


    },
  ]);


  export default router;