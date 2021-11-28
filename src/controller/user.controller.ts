import * as express from "express";
import { UserI } from "interfaces/user.interface";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import RegisterUserDTO from "../validator/RegisterUserDTO";
import HttpException from "../exceptions/HttpException";

class UserController {
  constructor() {}
  public async register(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ): Promise<void> {
    const userRequest: UserI = req.body;
    const validation = await validate(
      plainToClass(RegisterUserDTO, userRequest)
    );
    if (validation.length > 0) {
      const message = validation
        .map((error: ValidationError) => Object.values(error.constraints))
        .join(", ");
      next(new HttpException(400, message));
    }
  }
}
export default UserController;
