import './App.css'
//import { useState, useEffect } from "react"
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useFetch } from "./components/useFetch.jsx"
import { Suspense, lazy } from "react";
import loadingicon from "./assets/loading-bar.png"


const Home = lazy(() => import("./components/Home.jsx"))
const Productlist = lazy(() => import("./components/Productlist.jsx"))
const Header = lazy(() => import("./components/Header.jsx"))
const ProductDetail = lazy(() => import("./components/Productdetails.jsx"))
const Cart = lazy(() => import("./components/Cart.jsx"))
const Errorpage = lazy(() => import("./components/ErrorPage.jsx"))
const Checkout = lazy(() => import("./components/Checkout.jsx"))

function App() {
    const url = "https://dummyjson.com/products"

    const { data, _ } = useFetch(url) 

    const Usercontext = createContext(data)


    return (
        //routing components
        //lazy loading components 

        <Usercontext.Provider value={data}>
            <BrowserRouter>
                        <Routes>
                        <Route path="/" element={
                            <Suspense fallback={<div><img src={loadingicon}></img></div>}>
                                <Header />
                            </Suspense>
                            }>
                            <Route index element={
                                <Suspense fallback={<div><img src={loadingicon}></img></div>}>
                                    <Home />
			                    </Suspense>
                                } />
                            <Route path="products" element={
                                <Suspense fallback={<div><img src={loadingicon}></img></div>}>
                                    <Productlist />
			                    </Suspense>
                                
                                } />
                            <Route path="productsdetails/:id" element={
                                <Suspense fallback={<div><img src={loadingicon}></img></div>}>
                                    <ProductDetail />
			                    </Suspense>
                                
                                } />
                            <Route path="cart" element={
                                <Suspense fallback={<div><img src={loadingicon}></img></div>}>
                                    <Cart />
			                    </Suspense>
                                
                                } />
                            <Route path="checkout" element={
                                <Suspense fallback={<div><img src={loadingicon}></img></div>}>
                                    <Checkout />
			                    </Suspense>
                                
                                } />
                            <Route path="*" element={
                                <Suspense fallback={<div><img src={loadingicon}></img></div>}>
                                    <Errorpage />
			                    </Suspense>
                                } />
                        </Route>
                        </Routes>
            </BrowserRouter>
                
        </ Usercontext.Provider>
    )
} 

export default App
