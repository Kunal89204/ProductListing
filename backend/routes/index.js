var express = require("express");
var router = express.Router();
const productSchema = require("./users");

router.get("/products", async (req, res) => {
  try {
    const data = await productSchema.find();
    console.log(data);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});



router.get('/product/:productId', async (req, res) => {
  try {
    const ProductId = req.params.productId
    
    const data = await productSchema.findById(ProductId)

    res.json(data)

  } catch (error) {
    console.log(error)
    
  }
})


router.post("/add", async (req, res) => {
  try {
    // Check if all required fields are provided
    if (
      !req.body.productName ||
      !req.body.productDescription ||
      !req.body.price ||
      !req.body.discountedPrice ||
      !req.body.productImage ||
      !req.body.variedImages ||
      !req.body.addToCart ||
      !req.body.spec 
    ) {
      return res.status(400).send("All fields are required");
    }

    // Create a new product object
    const newProduct = {
      productName: req.body.productName,
      productDescription: req.body.productDescription,
      price: req.body.price,
      discountedPrice: req.body.discountedPrice,
      productImage: req.body.productImage,
      variedImages: req.body.variedImages,
      addToCart: req.body.addToCart,
      spec: req.body.spec
    };

    // Create the product in the database
    const product = await productSchema.create(newProduct);

    return res.status(201).send(product);
  } catch (error) {
    console.error("Error creating product:", error);
    return res.status(500).send("Internal Server Error");
  }
});






router.delete("/delete/:productid", async (req, res) => {
  try {
    const productid = req.params.productid;

    const deletedProduct = await productSchema.findByIdAndDelete(productid);

    if (!deletedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res
      .status(200)
      .json({ message: "Product deleted successfully", deletedProduct });
  } catch (error) {
    console.log(error);
  }
});



// Update a product by ID
router.put("/update/:productid", async (req, res) => {
  try {
    const productId = req.params.productid;
    const updatedProductData = req.body;

    // Check if product ID is provided
    if (!productId) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    // Check if the product with the given ID exists
    const existingProduct = await productSchema.findById(productId);
    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Update the product with the new data
    existingProduct.productName =
      updatedProductData.productName || existingProduct.productName;
    existingProduct.productDescription =
      updatedProductData.productDescription ||
      existingProduct.productDescription;
    existingProduct.price = updatedProductData.price || existingProduct.price;
    existingProduct.discountedPrice =
      updatedProductData.discountedPrice || existingProduct.discountedPrice;
    existingProduct.productImage =
      updatedProductData.productImage || existingProduct.productImage;
    existingProduct.variedImages =
      updatedProductData.variedImages || existingProduct.variedImages;
    existingProduct.addToCart =
      updatedProductData.addToCart || existingProduct.addToCart;

    // Save the updated product
    const updatedProduct = await existingProduct.save();

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
