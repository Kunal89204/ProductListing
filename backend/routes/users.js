const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/addtocart");


const productSchema  = mongoose.Schema({
  productImage: {
    type: String,
    required: true
  },
  addToCart: {
    type: Boolean,
    default: true
  },
  price: {
    type: Number,
    required: true
  },
  discountedPrice: {
    type: Number
  },
  productName: {
    type: String,
    required: true
  },
  productDescription: {
    type: String,
    required: true
  },
  
  variedImages: [String],
  spec: [String]
})


module.exports = mongoose.model("products", productSchema);
