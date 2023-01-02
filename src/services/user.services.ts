import criarToken from '../middlewares/jwtconfig';
import userModel from '../models/users.model';
import { TUser } from '../types';

const userGetAll = async (): Promise<TUser[]> => {
  const allUsers = await userModel.userGetAll();

  return allUsers;
};

const insertUser = async (user: TUser) => {
  await userModel.insertUser(user);
  const allUsers = await userModel.userGetAll();
  const userInsered = allUsers.length - 1;
  const newUser = allUsers[userInsered];
  const token = await criarToken(newUser);
  return { token };
};

export = {
  userGetAll,
  insertUser,
};