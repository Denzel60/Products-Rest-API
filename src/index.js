import express from 'express'
import productsRouter from './routes/products.router.js';
const app = express();

app.use("/product", productsRouter)

app.listen(3001, () =>{
    console.log('Server is running on port 3001')
})