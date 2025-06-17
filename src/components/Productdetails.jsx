// JavaScript source code
import { NavLink, useParams } from "react-router-dom"
import { useEffect,useState } from "react"

function ProductDetail() {

    const params = useParams()

    const url = `https://dummyjson.com/products/${params.id}`

    

    const [data, setdata] = useState([])

    const [reviewcontrol, setreviewcontrol] = useState(false)

    const [loading, setLoading] = useState(false);
    

    useEffect(() => {
        let componentMounted = true;
        const fetchdata = async () => {


            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Network Responded with an error");
                }
                if (componentMounted) {
                    const result = await response.json();
                    setdata(result);
                }

            } catch (error) {
                console.error("Fetch error:", error);
            }
            finally {
                setLoading(false);
            }

            return () => {
                componentMounted = false;
            }
        }

        fetchdata()

    }, [url])


    console.log(data.reviews)

    //const filteredproducts = data.filter((item) => item.id === parseInt(params.id))

    //component to display product details with reviews and other information

    return (
        <>
        { loading && <h1>Loading...</h1> }
            
            <div className="productdetail" key={data.uniqueId}>
                <div className="imagediv" >
                        {data.images ? (data.images.map((src,index) => {
                            return (
                                <div key={index}>
                                    <img src={src}></img>
                                </div>                               
                            )
                        })) : 0}
                </div>
                    
                <div>
                        <p>Title:{data.title} (Hover to Enlarge Images)</p>
                        <p>Brand:{data.brand}</p>
                        <p>Category:{data.category}</p>
                        <p>Minimum Quantity:{data.minimumOrderQuantity}</p>
                        <p>Price:{data.price} $</p>
                        <p>Rating:{data.rating} / 5</p>
                        <p>Discounted Price:{(data.price - ((data.discountPercentage * data.price) / 100)).toFixed(2)} $</p>
                        <p>Return:{data.returnPolicy}</p>
                        <p>Description:{data.description}</p>
                        {data.warrantyInformation && <p>Warranty Information: {data.warrantyInformation}</p>}

                        <div className="reviewsection">
                            <p style={{ fontFamily: "Raleway", fontSize: "1.2rem", fontWeight: "600" }}>Reviews:</p>
                            <button onClick={() => setreviewcontrol(!reviewcontrol)}>{reviewcontrol ? "Hide Reviews" : "Show Reviews"}</button>
                            {data.reviews ? (data.reviews.map((review,index) => {
                                return (
                                    <ul style={reviewcontrol == true ? { display: "block", fontSize: "1.2rem", fontFamily: "Arial" } : { display: "none", fontSize: "1.2rem", fontFamily: "Arial" }} key={index}>
                                        <li>Name:{review.reviewerName}</li>
                                        <li>Email:{review.reviewerEmail}</li>
                                        <li>Comment:{review.comment}</li>
                                        <li>Rating:{review.rating}</li>
                                    </ul>
                                )
                            })) : 0}
                        </div>
                        
                        <p style={data.availabilityStatus == "In Stock" ? { color: "green" } : { color: "red" }}>Availability:{data.availabilityStatus}</p>
                        <p>Shipping Info:{data.shippingInformation}</p>
                </div>
                
                
            </div> 

        </>

    )


}

export default ProductDetail