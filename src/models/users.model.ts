import { RowDataPacket } from 'mysql2/promise';
import { TUser } from '../types';
import connection from './connection';
// ResultSetHeader

const userGetAll = async (): Promise<TUser[]> => {
  const [result] = await connection.execute<RowDataPacket[] & TUser[]>(
    'SELECT * FROM Trybesmith.users',
  );

  return result;
};

const insertUser = async ({ username, vocation, level, password }: TUser) => {
  await connection.execute(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
};

export = {
  insertUser,
  userGetAll,
};