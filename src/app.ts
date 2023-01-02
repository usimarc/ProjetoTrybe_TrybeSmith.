import express from 'express';
import productControllers from './controllers/product.controllers';

const app = express();

app.use(express.json());
app.post('/products', productControllers.insertProduct);
app.get('/products', productControllers.productGetAll);

export default app;
