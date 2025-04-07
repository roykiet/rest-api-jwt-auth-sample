import { Request, Response, NextFunction } from 'express';

export const authorizeRole = (requiredRole: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const jwtPayload = (req as any).jwtPayload;
    if (!jwtPayload || jwtPayload.role !== requiredRole) {
      return res.status(403).json({ message: 'Forbidden: You do not have the required role' });
    }
    next();
  };
};