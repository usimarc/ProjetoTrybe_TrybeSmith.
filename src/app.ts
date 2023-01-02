import express from 'express';
import productControllers from './controllers/product.controllers';
import userControllers from './controllers/user.controllers';
import validaLogin from './middlewares/jwtconfig';

const app = express();

app.use(express.json());
app.post('/products', productControllers.insertProduct);
app.get('/products', productControllers.productGetAll);

app.post('/users', userControllers.insertUser);

app.post('/login', validaLogin.validaLogin, userControllers.getLogin);

export default app;
