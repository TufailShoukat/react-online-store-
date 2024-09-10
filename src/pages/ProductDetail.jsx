import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
function ProductDetail(){
    const [clickProdcuct,setProduct]=useState([])
    const [loder,setLoder]=useState(true)
   
    const {id} = useParams()
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
          .then(res => res.json())
          .then((data) => setProduct(data));
          setLoder(false)
      }, [])
    console.log(clickProdcuct)
    const {price,description,rating,thumbnail,title} = clickProdcuct
    return(
        <div className="bg-gray-100">
              {loder ? (<h1 className="text-center text-3xl">loding...</h1>) : (
  <div className="container mx-auto py-10 px-4">
  <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
    {/* Product Image */}
    <div className="lg:w-1/2">
      <img
        src={thumbnail}
        alt="Product Image"
        className="w-full h-auto object-cover"
      />
    </div>
    {/* Product Details */}
    <div className="lg:w-1/2 p-6 flex flex-col justify-between">
      {/* Title and Reviews */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        <div className="flex items-center mb-3">
          <span className="text-yellow-400">★★★★☆</span>
          <span className="text-gray-600 ml-2">({rating})</span>
        </div>
        <p className="text-gray-700">
        {description}
        </p>
      </div>
      {/* Price */}
      <div className="mb-4">
        <span className="text-2xl font-bold text-gray-800">${price}</span>
      </div>
      {/* Add to Cart Button */}
      <div className="flex items-center">
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 mr-2">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</div>
              )}
 

</div>

    )
}
export default ProductDetail