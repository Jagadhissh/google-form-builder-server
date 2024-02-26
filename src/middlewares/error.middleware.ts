import { NextFunction, Response, Request } from "express";
import ApiError from "../services/ApiError.service";
const errorMiddlware = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("error middlware calling:", err.message);
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";

  res.status(statusCode).json({
    message,
    success: false,
  });
};
export default errorMiddlware;
