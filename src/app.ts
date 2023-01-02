import express from 'express';
import productControllers from './controllers/product.controllers';
import userControllers from './controllers/user.controllers';

const app = express();

app.use(express.json());
app.post('/products', productControllers.insertProduct);
app.get('/products', productControllers.productGetAll);

app.post('/users', userControllers.insertUser);

export default app;
