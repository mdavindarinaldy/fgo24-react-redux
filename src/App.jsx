import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Result from './pages/Result';

const router = createBrowserRouter ([
  {
    path: '/',
    element: (
      <>
        <Navbar/>
        <HomePage/>
      </>
    ),
  }, {
    path: '/result',
    element: (
      <>
        <Navbar/>
        <Result/>
      </>
    )
  }
])

function App() {

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
