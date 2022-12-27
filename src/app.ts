import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { createConnection } from "typeorm";
import dotenv from "dotenv";
import morgan from "morgan";
import { router } from "./routes";
// import router from "./routes/index";

const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("jwt-secret", process.env.KEY);

app.use("/", router());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello, bouquet!");
});

app.listen(PORT, () => {
  console.log(PORT, "번 포트에서 대기 중");

  createConnection()
    .then(() => {
      console.log("데이터베이스 연결 성공");
    })
    .catch((err) => console.error(err));
});

export default app;
