import { Router } from 'express';
import { getRepository } from 'typeorm';
import CollectPoint from '../models/CollectPoint';
import CollectPointService from '../services/CreateCollectPointService';

const collectPointsRouter = Router();

// Criar get/:id e filtros de estado, cidade e itens
collectPointsRouter.get('/', async (request, response) => {
  const collectPointsRepository = getRepository(CollectPoint);
  // const { city, uf, items } = request.query;
  const collectPoints = await collectPointsRepository.find();
  return response.json(collectPoints);
});

collectPointsRouter.post('/', async (request, response) => {
  const {
    /* image, */ name,
    email,
    whatsapp,
    geometry,
    uf,
    city,
  } = request.body;
  const createItem = new CollectPointService();

  const collectPoint = await createItem.execute({
    image:
      'https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2003&q=80',
    name,
    email,
    whatsapp,
    geometry,
    uf,
    city,
  });

  return response.json(collectPoint);
});

export default collectPointsRouter;
