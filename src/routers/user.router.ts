import UserController from "../controller/user.controller";
import * as express from "express";

class AuthRoute {
  public router: express.Router;
  public userController: UserController;
  constructor() {
    this.router = express.Router();
    this.userController = new UserController();
    this.routers();
  }

  public routers(): any {
    this.router.get(
      "/login",
      (req: express.Request, res: express.Response, next) => {
        res.status(200).json({ message: "login" });
      }
    );
    this.router.post("/register", this.userController.register);
  }
}

export default new AuthRoute().router;
