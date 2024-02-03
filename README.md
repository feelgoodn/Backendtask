# Backendtask

In this project I have created a REST API e-commerce system using the node.js and Endpoints
like create, read, update and delete along with I have created a search functionality using the query and in this project I am following the MVC pattern for separating the concern that is Model-that is my schema , View- UI part and Controller-services for different endpoint. To automate the process of server I have used nodemon that is whenever I update or change something it will automatically start the server.

## Getting Started
These instructions will help to set up and run the project on your local machine.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* [VisualStudioCode](https://code.visualstudio.com/download" )  must be installed on your operating system.

* [nodejs](https://nodejs.org/en/download" )  must be installed on your operating system.

* [MongoDB](https://www.mongodb.com/try/download/community")  must be installed on your operating system.

* [Git](https://git-scm.com/downloads "Download Git") must be installed on your operating system.

* [Postman](https://www.postman.com/downloads/") must be installed on your operating system.


  ## API Endpoints
  For creating the endpoints I have used routers to control over the different operations like create, update, read and delete.

*  GET /product: Get details of all products.
* GET /product/search?q=query: Search for products based on the provided query.
* POST /product: Create a new product.
* PATCH /product/:id: Update the details of a product.
* DELETE /product/:id: Delete a product.

  ### Example:
 * GET: http://localhost:9000/product

 * GET: http://localhost:9000/product/search?q=searchTerm

 * POST: {"name":"Product Name", "description":"Product Description", "price":"10.99", "variants": ['name','sku', 'additionalcost', 'stockcount]}'http://localhost:9000/product

 * UPDATE:  http://localhost:9000/product/your-product-id

 * DELETE:  http://localhost:9000/product/your-product-id


   ## How to Run

   For runing the server you have to write the command like 

  * npm start or nodemon run start. After entering this command the server will run on 'http://localhost:9000/'


  ## Architecture

  Architecture of this project is simple. I follow the standard approach that is MVC 
 architecture for model I used the Schema for creating ProductSchema and VariantSchema in the 
 ProductSchema data like name, description, price, and can have multiple variants and in 
 VariantSchema name, SKU, additionalcost , and stockcount. main entry point of the code execution
 is app.js and in the app.js all the connection part like mongoDB, url and for listening the server I am using the port number 9000. ProductModel is my model where I keep all the Schema and after creating it should be used in the controller to perform the CRUD operation for that I used module.export. After this in the product.js whrere this is my controller or service in this I kept all the endpoint to create, update, read and delete and I used HTTP methods to get the response and request to used this request and get the response I have to export the router.
 along with for search functionality I have used the concept of query, for example if I need to search by product name: 'Hp' I simply type the url with as I mentioned in the API Endpoint.

 ## Postman collection specification

 For testing the functionality of the each endpoint for example:
* If I need to get the details of all the product I just need to select the request type as GET:
http://localhost:9000/product

* If I need to get the details of specific product by 'product name', 'description' and 'variant name', I just need to select the request type as GET:
 'http://localhost:9000/product/search?q=searchTerm'

* If I need to create the product or add the product I just need to select the request type as POST: http://localhost:9000/product

*  If I need to update something I just need to select the request type as PATCH along with the product-id: http://localhost:9000/product/product-id

*  If I need to delete something I just need to select the request type as DELETE along with the product-id: http://localhost:9000/product/product-id


## Testing

For testing I used Chai as a testing tool it is a BDD/TDD  library for NodeJS and any JavaScript testing framework. It provides many assertions that can be run against code and for testing I test the Schema , the Routers and Search.
* To test the code we have to type a command that is: npm test

## License
This project is licensed under the standard ISC License.

 
  
    



