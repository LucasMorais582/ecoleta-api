import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterFieldGeometryType1591287823948
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('collect_points', 'geometry');

    await queryRunner.addColumn(
      'collect_points',
      new TableColumn({
        name: 'geometry',
        type: 'point',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('collect_points', 'geometry');

    await queryRunner.addColumn(
      'collect_points',
      new TableColumn({
        name: 'geometry',
        type: 'number',
      }),
    );
  }
}
