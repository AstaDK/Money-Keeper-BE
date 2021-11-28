import * as express from "express";

class AuthRoute {
  public router: express.Router;
  constructor() {
    this.router = express.Router();
    this.routers();
  }

  public routers(): any {
    this.router.get(
      "/login",
      (req: express.Request, res: express.Response, next) => {
        res.status(200).json({ message: "login" });
      }
    );
    this.router.get(
      "/register",
      (req: express.Request, res: express.Response, next) => {
        res.status(200).json({ message: "register" });
      }
    );
  }
}

export default new AuthRoute().router;
