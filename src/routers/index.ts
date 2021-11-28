import * as express from "express";
import AuthRoute from "./user.router";

export class CombineRoutes {
  private authRoute: express.Router;

  constructor() {
    this.authRoute = AuthRoute;
  }
  init(app: express.Application): void {
    app.use("/api/v1/user", this.authRoute);
  }
}
