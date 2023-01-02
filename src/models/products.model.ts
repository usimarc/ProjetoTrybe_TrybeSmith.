import { RowDataPacket } from 'mysql2/promise';
import { TProduct } from '../types';
import connection from './connection';
// ResultSetHeader

const productGetAll = async (): Promise<TProduct[]> => {
  const [result] = await connection.execute<RowDataPacket[] & TProduct[]>(
    'SELECT * FROM Trybesmith.products',
  );

  return result;
};

const insertProduct = async ({ name, amount }: TProduct) => {
  await connection.execute(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
};

export = {
  insertProduct,
  productGetAll,
};