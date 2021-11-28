import * as express from "express";
import * as bodyParser from "express";
import * as dayjs from "dayjs";
import { CombineRoutes } from "./routers";

class App {
  public app: express.Application;
  public combineRoute: CombineRoutes = new CombineRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.combineRoute.init(this.app);
  }

  private loggerMiddleware(req: express.Request, res: express.Request, next) {
    console.log(
      `Time: ${dayjs().format("DD/MM/YYYY HH:ss")} - ${req.method} ${
        req.path
      } - Body: ${JSON.stringify(req.body || {})} - Params: ${JSON.stringify(
        req.params || {}
      )}`
    );
    next();
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(this.loggerMiddleware);
    this.app.get("/", (req: express.Request, res: express.Response) => {
      res.status(200).json({
        message: "Server starting...",
      });
    });
  }
}
export default new App().app;
