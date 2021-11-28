import * as express from "express";
import { UserI } from "interfaces/user.interface";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import RegisterUserDTO from "../validator/register-user.dto";
import HttpException from "../exceptions/http.exception";
import UserModel from "../models/user.model";

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
    const user = new UserModel();
    user.email = userRequest.email;
    user.password = userRequest.password;
    user.firstName = userRequest.firstName;
    user.lastName = userRequest.lastName;
    user.phone = userRequest?.phone || null;
    await user.save();
  }
}
export default UserController;
