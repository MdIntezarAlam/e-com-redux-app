import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Products, ProductDetails, PageNotFound, AddtoCart } from './pages'
import { Header } from './components'
import './App.css'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className='app_container'>
                <Routes>
                    <Route exact path="/" element={<Navigate to="/products" />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:productId" element={<ProductDetails />} />
                    <Route path="/addtocart/:productId" element={<AddtoCart />} />
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default App
