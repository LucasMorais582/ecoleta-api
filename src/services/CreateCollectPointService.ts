import { getRepository } from 'typeorm';
import CollectPoint from '../models/CollectPoint';
// import AppError from '../errors/AppError';

interface Request {
  image: string;
  name: string;
  email: string;
  whatsapp: string;
  geometry: number;
  uf: string;
  city: string;
}

class CreateCollectPointService {
  public async execute({
    image,
    name,
    email,
    whatsapp,
    geometry,
    uf,
    city,
  }: Request): Promise<CollectPoint> {
    const collectPointRepository = getRepository(CollectPoint);

    // const categoryVerify = await collectPointRepository.findOne({
    //   where: { title },
    // });

    // if (categoryVerify) throw new AppError('This category already exists.');
    const collectPoint = await collectPointRepository.create({
      image,
      name,
      email,
      whatsapp,
      geometry,
      uf,
      city,
    });

    await collectPointRepository.save(collectPoint);
    return collectPoint;
  }
}

export default CreateCollectPointService;
