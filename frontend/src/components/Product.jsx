import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const [productInfo, setProductInfo] = useState(null);
  const { productid } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3000/product/${productid}`);
        if (!response.ok) {
          throw new Error('Failed to fetch product information');
        }
        const data = await response.json();
        setProductInfo(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();

    // Clean-up function
    return () => {
      // Cleanup tasks (if any)
    };
  }, [productid]);

  return (
    <div>
    <div>
      <div className="h-40 overflow-hidden">
        <img
          src="http://demo.snstheme.com/wp/anton/wp-content/uploads/2016/09/bg_bread.jpg"
          alt=""
        />
      </div>

      <div className="p-10 flex items-center">
        <div className="w-1/2 border flex items-center">
          <div className="thumbnail w-20">
           {productInfo && productInfo.variedImages.map((img) => {
            return <img src={img} alt="" className='border'  />
           })}
          </div>
          <div className="w-2/3 flex justify-center">
            <img
              src={productInfo && productInfo.productImage}
              alt=""
            />
          </div>
        </div>
        <div className="px-10 w-1/2">
          <div className="text-3xl pt-4">{ productInfo && productInfo.productName}</div>

          <div className="py-10">
          { productInfo && productInfo.productDescription}
          </div>

          <div className="flex gap-4 ">
            <div>Rs.{ productInfo && productInfo.discountedPrice}</div>
            <div className='line-through text-red-600'>Rs.{ productInfo && productInfo.price}</div>
          </div>

          <div className="flex items-center">
            <div className="flex">
              <p>Quantity</p>
              <input
                type="number"
                className="border mx-4 pl-2"
                placeholder="0"
              />
            </div>
            <button className=" py-2 px-4 m-4 bg-yellow-200 hover:bg-yellow-300">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>

      <div className="p-10">
        <h1 className="text-4xl">Information</h1>

        <div>
          <h2 className="text-2xl py-2">Description</h2>
          <p className="py-2 text-gray-600">
            {productInfo && productInfo.productDescription}
          </p>
          <div className="text-gray-600">
            <ul >
              {productInfo && productInfo.spec.map((specs) => {
               return  <li className='text-gray-600'>-{specs}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Product;

