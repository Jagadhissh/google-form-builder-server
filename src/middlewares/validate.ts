import Joi from "joi";
const httpStatus = require("http-status");
import { Request, Response, NextFunction } from "express";
import pick from "../utils/pick";
import ApiError from "../services/ApiError.service";
type ValidSchema = {
  params?: object;
  query?: object;
  body?: object;
};
const validate =
  (schema: ValidSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const validSchema = pick(schema, ["params", "query", "body"]);

    const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
      .prefs({ errors: { label: "key" }, abortEarly: false })
      .validate(object);
    if (error) {
      let errorMessage = "";
      if (typeof error === "object" && error.isJoi) {
        errorMessage = error.message;
      } else {
        errorMessage = error.details
          .map((details) => details.message)
          .join(", ");
      }
      return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
    }
    Object.assign(req, value);
    return next();
  };

export default validate;
