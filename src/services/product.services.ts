import productModel from '../models/products.model';
import { TProduct } from '../types';

const productGetAll = async (): Promise<TProduct[]> => {
  const allProducts = await productModel.productGetAll();

  return allProducts;
};

const insertProduct = async (products: TProduct) => {
  await productModel.insertProduct(products);
  const allProducts = await productModel.productGetAll();
  const productInsered = allProducts.length - 1;
  return allProducts[productInsered];
};

export = {
  insertProduct,
  productGetAll,
};