import React, { useState, useEffect } from "react";

const AddProduct = () => {
  return (
    <div>
      <div className="bg-yellow-200 m-2">
        <label htmlFor="">product name</label>
        <input type="text" id="name" className="border-2 m-2" />
      </div>

      <div className="bg-yellow-200 m-2">
        <label htmlFor="">product desc</label>
        <input type="text" id="desc" className="border-2 m-2" />
      </div>

      <div className="bg-yellow-200 m-2">
        <label htmlFor="">product price</label>
        <input type="text" id="price" className="border-2 m-2" />
      </div>

      <div className="bg-yellow-200 m-2">
        <label htmlFor="">product discprice</label>
        <input type="text" id="discprice" className="border-2 m-2" />
      </div>

      <div className="bg-yellow-200 m-2">
        <label htmlFor="">product discprice</label>
        <input type="text" id="discprice" className="border-2 m-2" />
      </div>

      <div className="bg-yellow-200 m-2">
        <label htmlFor="">product vimg1</label>
        <input type="text" id="vm1" className="border-2 m-2" />
      </div>

      <div className="bg-yellow-200 m-2">
        <label htmlFor="">product vimg2</label>
        <input type="text" id="vm2" className="border-2 m-2" />
      </div>

      <div className="bg-yellow-200 m-2">
        <label htmlFor="">product vimg3</label>
        <input type="text" id="vm3" className="border-2 m-2" />
      </div>

      

    </div>
  );
};

export default AddProduct;
