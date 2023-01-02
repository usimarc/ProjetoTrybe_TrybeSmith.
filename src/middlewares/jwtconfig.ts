import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { TUser } from '../types';

dotenv.config();

const secret: string = process.env.JWT_SECRET || 'senha';

const criarToken = (user: TUser) => {
  const payload = { id: user.id, name: user.username };
  const token = jwt.sign(payload, secret, {
    expiresIn: '50min',
    algorithm: 'HS256',
  });

  return token;
};

// const verificaToken = (token) => {
//   try {
//     const payload = jwt.verify(token, secret);
//     return payload;
//   } catch (error) {
//     return null;
//   }
// };

export = criarToken;