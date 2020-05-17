import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class Categories1589738901387 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'categories',
      'id',
      new TableColumn({
        name: 'id',
        type: 'uuid',
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
        isPrimary: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'categories',
      'id',
      new TableColumn({
        name: 'id',
        type: 'uuid',
        generationStrategy: 'uuid',
        isPrimary: true,
      }),
    );
  }
}
