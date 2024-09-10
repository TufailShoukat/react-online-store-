
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../components/Card';
import Chip from '../components/chip';

function Product() {
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [chosenCategory, setChosenCategory] = useState("All");
    const [priceFilter, setPriceFilter] = useState("All");
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setLoading(true);
        const url = chosenCategory === "All" 
            ? "https://dummyjson.com/products" 
            : `https://dummyjson.com/products/category/${chosenCategory}`;
        
        axios.get(url)
            .then(res => {
                console.log(res.data.products); 
                setItems(res.data.products);
                setLoading(false);
            })
            .catch(error => alert(error));
    }, [chosenCategory]);

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then(res => setCategories(res.data))
            .catch(error => alert(error));
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handlePriceFilterChange = (e) => {
        setPriceFilter(e.target.value);
    };

    const filteredItems = items
        .filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter(item => {
            if (priceFilter === "All") return true;
            if (priceFilter === "Low" && item.price < 20) return true;
            if (priceFilter === "Medium" && item.price >= 20 && item.price <= 100) return true;
            if (priceFilter === "High" && item.price > 100) return true;
            return false;
        });

    return (
        <div className="container mx-auto p-4">
            {loading ? (
                <h1 className="text-center text-3xl">Loading...</h1>
            ) : (
                <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        <Chip onclick={() => setChosenCategory("All")} isChosen={chosenCategory === "All"} showCategory={{ name: "All", slug: "All" }} />
                        {categories.map((category, index) => (
                            <Chip key={index} onclick={() => setChosenCategory(category.slug)} isChosen={chosenCategory === category.slug} showCategory={category} />
                        ))}
                    </div>

                    <div className="flex gap-4 mb-4 items-center">
                        <input 
                            type="text" 
                            placeholder="Search Product..." 
                            value={searchTerm} 
                            onChange={handleSearchChange}
                            className="p-2 border rounded-md"
                        />
                        <select 
                            value={priceFilter} 
                            onChange={handlePriceFilterChange} 
                            className="p-2 border rounded-md"
                        >
                            <option value="All">All Prices</option>
                            <option value="Low">Low Price</option>
                            <option value="Medium">Medium Price</option>
                            <option value="High">High Price</option>
                        </select>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {filteredItems.map((item, index) => (
                            <Card key={index} item={item} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Product;
