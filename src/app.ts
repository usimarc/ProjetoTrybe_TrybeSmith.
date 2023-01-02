import express from 'express';
import productControllers from './controllers/product.controllers';

const app = express();

app.use(express.json());
app.post('/products', productControllers.insertProduct);

export default app;
