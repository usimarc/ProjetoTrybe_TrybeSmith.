import { Request, Response } from 'express';
import userService from '../services/user.services';

const userGetAll = async (_req: Request, res: Response) => {
  const result = await userService.userGetAll();
  return res.status(200).json(result);
};

const insertUser = async (req: Request, res: Response) => {
  const user = req.body;
  const result = await userService.insertUser(user);
  res.status(201).json(result);
};

export = {
  insertUser,
  userGetAll,
};