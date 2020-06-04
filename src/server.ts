import 'reflect-metadata';
import 'dotenv/config';
import path from 'path';
import cors from 'cors';
import express from 'express';
import 'express-async-errors';
import routes from './routes';
import createConnection from './database';

createConnection();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'tmp')));

app.listen(3333);

export default app;
