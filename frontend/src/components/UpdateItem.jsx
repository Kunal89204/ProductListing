import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateItem = () => {
    const [productInfo, setProductInfo] = useState({});
    const { productid } = useParams();

    useEffect(() => {
        fetchInfo();
    }, [productid]);

    const fetchInfo = async () => {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductInfo({ ...productInfo, [name]: value });
    };

    const handleAddInput = (fieldName) => {
        setProductInfo({
            ...productInfo,
            [fieldName]: [...productInfo[fieldName], ''] // Add a new empty string to the array
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/product/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productInfo)
            });
            if (!response.ok) {
                throw new Error('Failed to add product');
            }
            // Handle successful response (e.g., show a success message)
        } catch (error) {
            console.error('Error adding product:', error);
            // Handle error (e.g., show an error message)
        }
    };

    return (
        <div className='px-10'>
               <div className="form-group p-2 flex items-center gap-4">
                <p className='text-lg'>Product Name:</p>
                <input type="text" name="productName" className='border px-4 py-2 w-full' value={productInfo.productName || ''} onChange={handleChange} />
            </div>
            <div className="form-group p-2 flex items-center gap-4">
                <p className='text-lg'>Product Description:</p>
                <textarea type="text" name="productDescription" className='border px-4 py-2 w-full' value={productInfo.productDescription || ''} onChange={handleChange} />
            </div>
            <div className="form-group p-2 flex items-center gap-4">
                <p className='text-lg'>Product Main Image:</p>
                <input type="text" name="productImage" className='border px-4 py-2 w-full' value={productInfo.productImage || ''} onChange={handleChange} />
            </div>
            <div className="form-group p-2 flex items-center gap-4">
                <p className='text-lg'>Product Price:</p>
                <input type="text" name="price" className='border px-4 py-2 w-full' value={productInfo.price || ''} onChange={handleChange} />
            </div>
            <div className="form-group p-2 flex items-center gap-4">
                <p className='text-lg'>Product Discounted Price:</p>
                <input type="text" name="discountedPrice" className='border px-4 py-2 w-full' value={productInfo.discountedPrice || ''} onChange={handleChange} />
            </div>
            <div className="form-group p-2 flex items-center gap-4">
                <p className='text-lg'>Product Varied Images:</p>
                <div className='w-2/3'>
                    {productInfo.variedImages && productInfo.variedImages.map((img, index) => (
                        <input
                            key={index}
                            type="text"
                            name={`variedImages[${index}]`}
                            className='border px-4 py-2 my-2 w-full block'
                            value={img || ''}
                            onChange={handleChange}
                        />
                    ))}
                    <button className="border px-4 py-2 my-2" onClick={() => handleAddInput('variedImages')}>
                        Add Image
                    </button>
                </div>
            </div>
            <div className="form-group p-2 flex items-center gap-4">
                <p className='text-lg'>Product Specs:</p>
               <div className='w-2/3'>
               {productInfo.spec && productInfo.spec.map((specs, index) => (
                    <input
                        key={index}
                        type="text"
                        name={`specs[${index}]`}
                        className='border px-4 py-2 w-full block'
                        value={specs || ''}
                        onChange={(e) => handleChange(e, index)}
                    />
                ))}
               </div>
                <button className="border px-4 py-2 block" onClick={() => handleAddInput('spec')}>
                    Add Spec
                </button>
            </div>
            
            <button className="border px-4 py-2" onClick={handleSubmit}>
                Add Product
            </button>
        </div>
    );
};

export default UpdateItem;
