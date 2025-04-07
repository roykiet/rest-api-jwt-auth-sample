import { JwtPayload } from 'jsonwebtoken';

export { } // This file is a module

declare global {
  namespace Express {
    interface Request {
      jwtPayload?: JwtPayload | string;
      invalidProperty: number; // Add this to test
    }
  }
}