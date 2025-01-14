
const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  product_id: {
    type: String,
    unique: true,
    trim: true,
    required: true
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  content: {
    type: String,
    // required: true
  },
  images: {
    type: Object,
    default: 'https://res.cloudinary.com/levanquang/image/upload/v1646279066/MERN-Ecommerce/ftceyvewbf5d3ylkl96o.jpg'
    // required: true
  },
  category: {
    type: String,
    // required: true
  },
  checked: {
    type: Boolean,
    default: false
  },
  sold: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Products', productSchema)