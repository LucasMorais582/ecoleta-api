import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export default class CreateCollectionPointsItemsModel1591227307671
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'collect_points_items',
        columns: [
          {
            name: 'collect_point_id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'item_id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'collect_points_items',
      new TableForeignKey({
        name: 'CollectPointsKey',
        columnNames: ['collect_point_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'collect_points',
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'collect_points_items',
      new TableForeignKey({
        name: 'ItemsKey',
        columnNames: ['item_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'items',
        onDelete: 'NO ACTION',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('collect_points_items', 'ItemsKey');

    await queryRunner.dropForeignKey(
      'collect_points_items',
      'CollectPointsKey',
    );

    await queryRunner.dropTable('collect_points_items');
  }
}
