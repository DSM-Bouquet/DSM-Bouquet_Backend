import "reflect-metadata";

import { DataSource } from "typeorm";
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '../env') });

import { Bouquet } from "../entities/bouquet.entity";
import { Flower } from "../entities/flower.entity";
import { User } from "../entities/user.entity";


export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [User, Bouquet, Flower],
  migrations: [],
  subscribers: [],
});
