import { Router } from 'express';
import { getRepository } from 'typeorm';
import Item from '../models/Item';

const itemsRouter = Router();

itemsRouter.get('/', async (request, response) => {
  const itemsRepository = getRepository(Item);
  const items = await itemsRepository.find();
  return response.json(items);
});

// itemsRouter.post('/', async (request, response) => {
//   const { title, image, filepath } = request.body;
//   const createItem = new ItemService();

//   const item = await createItem.execute({
//     title,
//     image,
//     filepath
//   });

//   return response.json(item);
// });

export default itemsRouter;
