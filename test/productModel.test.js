const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should();

const Product = require('../models/productModel')

chai.use(chaiHttp)

describe('Product Model', () => {
    beforeEach(async () => {
        // Clear the Product collection before each test
        await Product.deleteMany({})
    })

    it('should save a new product', async () => {
        const productData = {
            name: 'Test Product',
            description: 'Test Description',
            price: '100',
            variants: [
                {
                    name: 'Test Variant',
                    SKU: 'TEST123',
                    additionalcost: '10',
                    stockcount: '50'
                }
            ]
        };

        const product = new Product(productData)
        const savedProduct = await product.save()

        savedProduct.should.have.property('name').eql(productData.name)
        savedProduct.should.have.property('description').eql(productData.description)
        savedProduct.should.have.property('price').eql(productData.price)
        savedProduct.variants.should.be.an('array').with.lengthOf(1)
        savedProduct.variants[0].should.have.property('name').eql(productData.variants[0].name)
    })
})
