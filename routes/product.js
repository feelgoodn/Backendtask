const express = require('express')


const router = express.Router()

const Product = require('../models/productModel')



//end-point to get the details of product
router.get('/',async (req, res) => {
    try{
      const product = await Product.find()
      res.json(product)
    } catch(err){
           res.send('Error' + err )
    }
 
})


//Search functionality
// Search endpoint
router.get('/search', async (req, res) => {
    const searchTerm = req.query.q
    try {
        const results = await Product.find({
            $or: [
                { name: { $regex: searchTerm, $options: 'i' } }, 
                { description: { $regex: searchTerm, $options: 'i' } }, 
                { 'variants.name': { $regex: searchTerm, $options: 'i' } }, 
            ],
        })
        res.json({ results })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



//end-point to create a new product
router.post('/', async(req, res) => {
    const product = new Product({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        variants:req.body.variants,
    })
    try{
        const p = await product.save()
        res.json({ message: 'Product Added successfully', p})
    }
    catch(err){
        res.status(500).send('Error'+err)
    }
})

// end-point to  add the product
router.patch('/:id', async(req, res)=> {
    try{
        const product = await Product.findById(req.params.id)

        product.description = req.body.description
        const a1 = await product.save()
        res.json({ message: 'Product Updated successfully', a1 })

    }
        catch(err)
        {
            res.send('error')
        }
    })

  //end -point to delete product
  router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        if (!product) {
            return res.status(404).json({ error: 'Product not found'})
        }

        const removedProduct = await product.deleteOne()

        res.json({ message: 'Product deleted successfully', removedProduct })
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
})


module.exports = router