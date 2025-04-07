import bcrypt from 'bcrypt';
import { createUser, findUserByEmail } from '../models/userModel';
import { generateToken } from '../utils/jwt';

export const register = async (email: string, password: string, role: string) => {
  const existingUser = await findUserByEmail(email);
  if (existingUser) throw new Error('User already exists');
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await createUser(email, hashedPassword);
  return generateToken(user.id, user.role);
};

export const login = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('Invalid credentials');
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');
  return generateToken(user.id, user.role);
};
