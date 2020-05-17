import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';
import 'express-async-errors';

import routes from './routes';
import errorHandler from './handlers/errors';

import createConnection from './database';

createConnection();
const app = express();

app.use(express.json());
app.use(routes);

app.use(errorHandler);

export default app;
