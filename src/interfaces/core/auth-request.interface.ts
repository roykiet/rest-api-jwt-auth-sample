import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface CustomRequest extends Request {
  jwtPayload: string | JwtPayload
}