import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Result from './pages/Result';
import { Provider } from 'react-redux';
import { store } from './redux/store';

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
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
