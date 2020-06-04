import { Router } from 'express';
import itemsRouter from './items.routes';
import collectPointsRouter from './collectPoints.routes';

const routes = Router();

routes.use('/items', itemsRouter);
routes.use('/points', collectPointsRouter);

export default routes;
