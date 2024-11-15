import React from 'react';
import '../styles/nav.css'; // Make sure to create this CSS file

const Productitem = () => {
    return (
        <div className="product-card">
            <div className="image-gallery">
                {/* Add thumbnails or images here */}
                <img src="https://wallpapers.com/images/hd/4k-ultra-hd-mustang-blue-car-8t1qwil5xrimb3pl.jpg" alt="Product Thumbnail" />
                <img src="image2.png" alt="Product Thumbnail" />
                <img src="image3.png" alt="Product Thumbnail" />
            </div>
            <img
                className="main-image"
                src="tri-cycle.png" // Replace with your main product image
                alt="Black Grey Tri Cycle"
            />
            <div className="product-details">
                <h2>Black Grey Tri Cycle</h2>
                <p>₹ 1590</p>
                <p>Brand: Mac Toy</p>
                <p>Type: Tri Cycle</p>
                <p>Color: 4 different Colors</p>
                <button className="btn add-to-cart">Add To Cart</button>
                <button className="btn buy-now">Buy Now</button>
            </div>
        </div>
    );
};

export default Productitem;
