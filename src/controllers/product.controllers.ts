import { Request, Response } from 'express';
import productService from '../services/product.services';

const productGetAll = async (_req: Request, res: Response) => {
  const result = await productService.productGetAll();
  return res.status(200).json(result);
};

const insertProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const result = await productService.insertProduct(product);
  res.status(201).json(result);
};

export = {
  insertProduct,
  productGetAll,
};