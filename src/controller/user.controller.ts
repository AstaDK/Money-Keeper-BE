import * as express from "express";

class UserController {
  constructor() {}
  public register(req: express.Request, res: express.Response): void {
    res.status(200).json({ ping: "pong" });
  }
}
export default UserController;
