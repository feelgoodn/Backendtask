const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()

const app = require('./app')
const Product = require('../models/productModel')

chai.use(chaiHttp)

describe('Search Functionality', () => {
    beforeEach(async () => {
        // Clear the Product collection before each test
        await Product.deleteMany({})
    });

    it('should search products by name, description, and variant name', async () => {
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

        await Product.create(productData);

        const searchTerm = 'Test';
        const res = await chai.request(app).get(`/product/search?q=${searchTerm}`)
        res.should.have.status(200)
        res.body.should.have.property('results').with.lengthOf(1)
    })

    
})
