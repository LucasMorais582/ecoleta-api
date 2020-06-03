import 'reflect-metadata';
import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import createConnection from './database';

createConnection();
const app = express();

app.use(express.json());

app.listen(3333);

export default app;
