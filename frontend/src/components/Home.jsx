import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://127.0.0.1:3000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
    <h1 className="pl-5 text-2xl pt-10">Checkout Our Latest Product</h1>
    <div className="flex flex-wrap justify-around gap-1 py-10">
      {products.map((product) => (
        <div key={product._id} className="w-1/6 border flex flex-col justify-between">
          <div>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {product.variedImages.map((img, index) => (
                <SwiperSlide key={index}>
                  <Link to={`/product/${product._id}`}>
                    <img src={img} alt="" />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="px-2">
            <div className="text-xl">
              <Link to={`/product/${product._id}`}>
                {product.productName}
              </Link>
            </div>
            <div className="truncate py-2">
              {product.productDescription}
            </div>
            <div className="flex justify-between text-lg items-center">
              <div className="flex">
                <div className="py-1">Rs.{product.discountedPrice}</div>
                <div className="py-1 px-1 line-through text-red-700 font-semibold">
                  Rs.{product.price}
                </div>
              </div>
              <div>
                <FaShoppingCart />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  
  );
};

export default Home;

