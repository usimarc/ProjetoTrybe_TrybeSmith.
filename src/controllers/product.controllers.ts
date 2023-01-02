import { Request, Response } from 'express';
import productService from '../services/product.services';

const insertProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const result = await productService.insertProduct(product);
  res.status(201).json(result);
};

export = {
  insertProduct,
};