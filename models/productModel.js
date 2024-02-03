const { default: mongoose } = require("mongoose");


const variantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
     
    SKU: {
        type: String,
        required: true
    },

    additionalcost: {
        type: String,
        required: true
    },

    stockcount: {
        type: String,
        required: true
    }

});


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    price:{
        type: String,
        required: true
    }, 

variants: [variantSchema],
});

const Product = mongoose.model('Product', productSchema)
   
module.exports = Product
