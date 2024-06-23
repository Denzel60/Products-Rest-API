<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

**Table of Contents**

- [How to run the Application](#how-to-run-the-application)
  - [Prerequisites](#prerequisites)
  - [1. Get All Products](#1-get-all-products)
  - [2. Get a Single Product](#2-get-a-single-product)
  - [3. Create a Product](#3-create-a-product)
  - [4. Update a Product](#4-update-a-product)
  - [5. Delete a Product](#5-delete-a-product)
- [Using the API](#using-the-api)
  - [Testing with Postman](#testing-with-postman)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# How to run the Application

This API is designed to manage products in a Product REST API shop. It allows you to create, read,update and delete products in your database.

## Prerequisites

- Node.js installed on your machine
- API Base URL: The base URL for the API (replace with your actual API URL).
- API Client: A tool like Postman or Insomnia to test API endpoints.
- Database: PostgreSQL setup if you're hosting the API yourself.

  ## Available Endpoints

  The following endpoints are available for managing products:

1. Get All Products
2. Get a Single Product
3. Create a Product
4. Update a Product
5. Delete a Product

## 1. Get All Products

**Description:** Retrieve a list of all products.

**Method:** GET

**Response:** A JSON array of product objects, each containing details such as ID, thumbnail URL, title, description, cost, and offer status.

## 2. Get a Single Product

**Method:** GET
Endpoint: `/products/:id`

**Description:** Retrieve a single product by its ID.

**Response:** A JSON object containing the details of the requested product.

## 3. Create a Product

**Method:** POST
**Description:** Create a new product.

**Request Body:** A JSON object containing the product details (title, description, cost, thumbnail URL)

**Response:** A JSON object containing the newly created product's details.

## 4. Update a Product

**Method:** PATCH
Endpoint: `/products/:id`
**Description:** Update an existing product.

**Request Body:** A JSON object containing the updated product details (title, description, cost, thumbnail)

**Response:** A JSON object containing the updated product's details.

## 5. Delete a Product

**Method:** DELETE

Endpoint: `/products/:id`

**Description:** Delete a product by its ID.

**Response:** A message indicating whether the deletion was successful.

# Using the API

## Testing with Postman/Insomnia

1. Open Postman/Insomnia and create a new request.
2. Select the HTTP method (GET, POST, PUT, DELETE) and enter the endpoint URL.
3. For POST and PUT requests, go to the Body tab, select raw, and choose JSON format.
4. Enter the request body as shown in the examples.
5. Send the request and review the response.
