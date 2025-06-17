// JavaScript source code
import Wallpaper from "../assets/wallpaper.jpg";
import background from "../assets/background2.jpg";
import { useState } from "react"
import Product from "./Productitem.jsx"
import { useFetch } from "./useFetch.jsx" 
import free from "../assets/free-shipping(1).png"
import payment from "../assets/credit-card(1).png"
import returns from "../assets/commercial(1).png"
import helpdesk from "../assets/help-desk(1).png"
import github from "../assets/githubicon.png"
import apiloading from "../assets/apiloading.png"

// home component to display the homepage with a search bar, product categories, and product listings
function Home() {
    const [search, setSearch] = useState("")

    const url = "https://dummyjson.com/products"

    const { data, loading } = useFetch(url) 

    const [newdata, setnewdata] = useState([])

    "beauty", "fragrances", "groceries", "furniture"
    console.log(data)
    console.log(newdata)
    console.log(search)

    //filtering products based on the selected category
    const filtercat = (category)=>{
        if (category === "all") {
            setnewdata(data)
            return
        }

        setnewdata(data.filter((item) => item.category === category))

        
    }

    //handling search input and filtering products based on the search term

    const handlesearch = (input) => {

        const result = data.filter((item) => item.title.toLowerCase().includes(input.toLowerCase()))

        if (result.length > 0) {
            setnewdata(result);
        }
        else {
            alert("No products found for the search term: " + input);
        }

        setSearch("")

    }

   


    return (
        //home page
        <div className="fullhome">
            <header className="home">
                <div className="wallpaper" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", width: "auto", height: "600px" }}>
                    <div style={{ marginBottom: "50px" }}>
                        <p style={{ fontFamily: "Raleway",fontSize:"1.8rem"}}>E-commerce Products <a href="https://github.com/sreenivas2589/ecommercestore" target="_blank"><img src={github} style={{ height: "50px", width:"50px",marginLeft:"15px"}}></img></a></p>
                        {/*<label htmlFor="search" style={{ fontSize: "2rem" }}>Search</label>*/}
                        <input type="text" id="search" name="search" placeholder="Enter Search here" onChange={(e) => setSearch(e.target.value)} value={search}></input>
                        <button onClick={()=>handlesearch(search)}>Submit</button>
                    </div>
                    <div>
                        <img src={Wallpaper}></img>
                    </div>
                </div>

            </header>
        <div className="ecommerceicons">
            <div>
                <img src={free}></img>
                <p>Free Shipping</p>
            </div>
            <div>
                <img src={payment}></img>
                <p>Secure Payments</p>
            </div>
            <div>
                <img src={returns}></img>
                <p>Easy Returns</p>
            </div>
            <div>
                <img src={helpdesk}></img>
                <p>24/7 Help Desk</p>
            </div>

        </div>
        <h1 style={{fontFamily:"Raleway",color:"white"}}>Our Famous Products</h1>
        <div className="categories">
            <button onClick={()=>filtercat("all")}>All</button>
            <button onClick={()=>filtercat("beauty")}>Beauty</button>
            <button onClick={()=>filtercat("fragrances")}>Fragrances</button>
            <button onClick={()=>filtercat("groceries")}>Groceries</button>
            <button onClick={()=>filtercat("furniture")}>Furniture</button>
            
        </div>
        <div className="homeproducts">
                {loading && <img src={apiloading}></img>}
                {newdata.length>0 ? newdata.map((item) => {
                        return (
                            <div key={item.uniqueId} className="homelist">
                                <img src={item.thumbnail}></img>
                                <h1>{item.title}<sub style={{ fontSize: "0.7rem", color: "red" }}>{item.availabilityStatus == "Low Stock" ? "low Stock" : ""}</sub></h1>
                                <h3><span style={{ fontSize: "1.2rem", color: "#9F9FA0;", fontWeight: "800", }}>Category:</span>{item.category}</h3>
                                <p>MRP:<span style={{ textDecoration: "line-through" }}>${item.price}</span></p>
                                <p>{(item.price - ((item.price * item.discountPercentage) / 100)).toFixed(2)}$</p>
                            </div>
                        )
                    
                }) : data.map((item) => {
                    if (item.rating > 4.50) {
                        return (
                            <div key={item.uniqueId} className="homelist">
                                <img src={item.thumbnail}></img>
                                <h1>{item.title}<sub style={{ fontSize: "0.7rem", color:"red" }}>{item.availabilityStatus == "Low Stock" ? "low Stock" : ""}</sub></h1>
                                {/*<p>{item.description.length > 50 ? `${item.description.slice(0, 50)} ...` : item.desription}</p>*/}
                                <h3><span style={{ fontSize: "1.2rem", color: "#9F9FA0", fontWeight: "800" }}>Category:</span>{item.category}</h3>
                                <p>MRP:<span style={{ textDecoration: "line-through" }}>${item.price}</span></p>
                                <p>${(item.price - ((item.price * item.discountPercentage) / 100)).toFixed(2)}</p>
                                
                            </div>

                        )
                    }
                }) }
            
        </div>
        </div>
    )

}

export default Home