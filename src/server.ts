import * as express from "express";

const app = express();

function loggerMiddleware(req: express.Request, res: express.Request, next) {
  console.log(
    `${req.method} ${req.path} - Body: ${
      JSON.stringify(req.body || {})
    } - Params: ${JSON.stringify(req.params || {})}`
  );
  next();
}

app.use(loggerMiddleware);

app.get("/", (req: express.Request, res: express.Request) => {
  res.status(200).json({
    message: "Server starting...",
  });
});

app.listen(3300, () => console.log("Server running..."));
