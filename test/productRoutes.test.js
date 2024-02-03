const mongoose = require('mongoose')
const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()

const app = require('./app')
const Product = require('../models/productModel')

chai.use(chaiHttp)

describe('Product Routes', () => {
    beforeEach(async () => {
        // Clear the Product collection before each test
        await Product.deleteMany({})
    })

    it('should get all products', async () => {
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
        }

        await Product.create(productData)

        const res = await chai.request(app).get('/product')
        res.should.have.status(200);
        res.body.should.be.an('array').with.lengthOf(1)
    })


    it('should create a new product', async () => {
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
        }

        const res = await chai.request(app).post('/product').send(productData)
        res.should.have.status(200)
        res.body.should.have.property('message').eql('Product Added successfully')
    })



    it('should update all product', async () => {
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
        }

        const res = await chai.request(app).patch('/product').send(productData)
        res.should.have.status(200)
        res.body.should.have.property('message').eql('Product updated successfully')
    })



    it('should delete a product', async () => {
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
        }

        const res = await chai.request(app).deleteOne('/product').send(productData)
        res.should.have.status(200)
        res.body.should.have.property('message').eql('Product deleted successfully')
    })



   
})

