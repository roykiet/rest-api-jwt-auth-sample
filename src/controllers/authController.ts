import { Request, Response } from 'express';
import * as authService from '../services/authService';

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { email, password, role } = req.body;
    const token = await authService.register(email, password, role);
    res.status(201).json({ token });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
