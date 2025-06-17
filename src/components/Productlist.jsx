// JavaScript source code
import Product from "./Productitem.jsx"
import { useFetch } from "./useFetch.jsx" 
import { useState } from "react" 
import searchicon from "../assets/searchicon.png";
import apiloading from "../assets/apiloading.png"

// Productlist component to display products with search and filter functionality
function Productlist() {

    const url = "https://dummyjson.com/products"
    const [search, setSearch] = useState("")
    const { data, loading } = useFetch(url)

    const [newdata, setnewdata] = useState([])

    console.log(data)

    // Function to filter products based on the selected category
    const filtercat = (category) => {
        if (category === "all") {
            setnewdata(data)
            return
        }

        setnewdata(data.filter((item) => item.category === category))


    }
    // Function to handle search input and filter products based on the search term
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
        <div className="productlist">
            <header className="producthome">
                <div className="productsearch">
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
                            <input type="text" id="search" name="search" placeholder="Enter Search here" onChange={(e) => setSearch(e.target.value)} value={search}></input>
                        </div>
                        <div>
                            <img src={searchicon} onClick={() => handlesearch(search)} style={{ cursor:"pointer",width:"50px",height:"50px" }}></img>
                        </div>
                </div>
            </header>
            <br></br>
            <div className="categoriesproduct">
                <button onClick={() => filtercat("all")}>All</button>
                <button onClick={() => filtercat("beauty")}>Beauty</button>
                <button onClick={() => filtercat("fragrances")}>Fragrances</button>
                <button onClick={() => filtercat("groceries")}>Groceries</button>
                <button onClick={() => filtercat("furniture")}>Furniture</button>

            </div>
            {loading && <div><img src={apiloading}></img></div>}
            {newdata.length > 0 ? newdata.map((item) => {
                return (
                    <div key={item.uniqueId}>
                        <Product data={item} />
                    </div>
                )

            }) : data.map((item) => {
                return (
                    <div key={item.uniqueId}>
                        <Product data={item} />
                    </div>

                )
            })}
        </div>
    )
}
export default Productlist