import { Request, Response } from 'express';
import userService from '../services/user.services';

const userGetAll = async (_req: Request, res: Response) => {
  const result = await userService.userGetAll();
  return res.status(200).json(result);
};

const insertUser = async (req: Request, res: Response) => {
  const user = req.body;
  const result = await userService.insertUser(user);
  return res.status(201).json(result);
};

const getLogin = async (req: Request, res: Response) => {
  const user = req.body;
  const { type, message } = await userService.getLogin(user);
  if (type) return res.status(type).json({ message });
  console.log('message', message);
  return res.status(200).json(message);
};

export = {
  insertUser,
  userGetAll,
  getLogin,
};