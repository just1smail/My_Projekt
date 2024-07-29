import React, { Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Basket, Breads, Breakfast, Deserts, Drinks, Garnirs, GetById, Home, Layout, Login, Salats, Sups } from './routes/routes'
import ProtectedRout from './utils/protectedRoute/protectedRoute'
import AuthCheck from './utils/authCheck/authCheck'
import Home2 from './components/home/home2/home2'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element:
      <ProtectedRout>
      <Suspense fallback={<h1>LOADING...</h1>}>
      <Layout/>
      </Suspense>
      </ProtectedRout>,
      children: [
        {
          path: "/",
          element: 
          <Suspense fallback={<h1>LOADING...</h1>}>
            <Home/>
          </Suspense>,
          children: [
            {
              index: true,
              element: 
              <Suspense fallback={<h1>LOADING...</h1>}>
              <Home2/>
              </Suspense>
            },
            {
              path: 'home/sups',
              element: 
              <Suspense fallback={<h1>LOADING...</h1>}>
              <Sups/>
              </Suspense>
            },
            {
              path: 'home/garnirs',
              element: 
              <Suspense fallback={<h1>LOADING...</h1>}>
              <Garnirs/>
              </Suspense>
            },
            {
              path: 'home/salats',
              element:  
              <Suspense fallback={<h1>LOADING...</h1>}>
              <Salats/>
              </Suspense>
            },
            {
              path: 'home/deserts',
              element: 
              <Suspense fallback={<h1>LOADING...</h1>}>
              <Deserts/>
              </Suspense>
            },
            {
              path: 'home/breads',
              element: 
              <Suspense fallback={<h1>LOADING...</h1>}>
              <Breads/>
              </Suspense>
            },
            {
              path: 'home/drinks',
              element: 
              <Suspense fallback={<h1>LOADING...</h1>}>
              <Drinks/>
              </Suspense>
            },
            {
              path: 'home/breakfast',
              element: 
              <Suspense fallback={<h1>LOADING...</h1>}>
              <Breakfast/>
              </Suspense>
            },
          ]
        },
        {
          path: "/basket",
          element: 
          <Suspense fallback={<h1>LOADING...</h1>}>
          <Basket/>
          </Suspense>
        },
        {
          path: "/:id",
          element: 
          <Suspense fallback={<h1>LOADING...</h1>}>
          <GetById/>
          </Suspense>
        }
      ]
    },
    {
      path: "/:id",
      element: 
      <Suspense fallback={<h1>LOADING...</h1>}>
      <GetById/>
      </Suspense>
    },
    {
      path: "/login",
      element: 
      <AuthCheck>
      <Suspense fallback={<h1>LOADING...</h1>}>
      <Login/>
      </Suspense>
      </AuthCheck>
    }
  ])
  return <RouterProvider router={router}/>
}

export default App