import criarToken from '../middlewares/jwtconfig';
import userModel from '../models/users.model';
import { TUser } from '../types';

const userGetAll = async (): Promise<TUser[]> => {
  const allUsers = await userModel.userGetAll();
  return allUsers;
};

const getLogin = async (user: TUser) => {
  const allUsers = await userModel.getLogin(user);
  if (!allUsers.length) return { type: 401, message: 'Username or password invalid' };
  const token = await criarToken.criarToken(allUsers[0]);
  return { type: null, message: { token } };
};

const insertUser = async (user: TUser) => {
  await userModel.insertUser(user);
  const allUsers = await userModel.userGetAll();
  const userInsered = allUsers.length - 1;
  const newUser = allUsers[userInsered];
  const token = await criarToken.criarToken(newUser);
  return { token };
};

export = {
  userGetAll,
  insertUser,
  getLogin,
};