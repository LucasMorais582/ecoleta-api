import { MigrationInterface, getConnection } from 'typeorm';

export default class InsertItemsDefault1591232485018
  implements MigrationInterface {
  public async up(): Promise<void> {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into('items')
      .values([
        {
          id: 'e32649b1-80ba-439f-87de-fef0f99cc0c8',
          title: 'baterias',
          image: 'baterias.svg',
          filepath: 'http://localhost:3333/uploads/baterias.svg',
        },
        {
          id: '94a51b75-a797-4238-8d7e-1012e7b18d92',
          title: 'eletronicos',
          image: 'eletronicos.svg',
          filepath: 'http://localhost:3333/uploads/eletronicos.svg',
        },
        {
          id: '7a14e138-77f2-46eb-8a41-a69d5008064a',
          title: 'lampadas',
          image: 'lampadas.svg',
          filepath: 'http://localhost:3333/uploads/lampadas.svg',
        },
        {
          id: 'd607db7d-6280-44d0-bbe2-bd1bc350e31f',
          title: 'oleo',
          image: 'oleo.svg',
          filepath: 'http://localhost:3333/uploads/oleo.svg',
        },
        {
          id: '55ca375e-59d4-4429-b302-82da0258ad6c',
          title: 'organicos',
          image: 'organicos.svg',
          filepath: 'http://localhost:3333/uploads/organicos.svg',
        },
        {
          id: '365a2f02-91ae-41ba-a13c-f62b742489bb',
          title: 'papeis-papelao',
          image: 'papeis-papelao.svg',
          filepath: 'http://localhost:3333/uploads/papeis-papelao.svg',
        },
      ])
      .execute();
  }

  public async down(): Promise<void> {
    await getConnection().createQueryBuilder().delete().from('items').execute();
  }
}
