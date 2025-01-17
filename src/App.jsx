import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Users from './components/users/Users';
import Footer from './components/footer/Footer';
import Create from './components/users/Create';
import Delete from './components/users/Delete';
import Details from './components/users/Details';
export default function App() {
  return (
<>
<div className="container">
<Navbar />
<Routes>
<Route path='/' element={<Home />} />
<Route path='/users' element={<Users />} />
<Route path='/create' element={<Create />} />
<Route path='/delete' element={<Delete />} />
<Route path='/users/:id' element={<Details />} />


<Route path='*' element={<h2>This page not found </h2> } />

</Routes>
<Footer />
</div>

</>
  )
}
