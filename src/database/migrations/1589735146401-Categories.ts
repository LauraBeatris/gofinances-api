import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export default class Categories1589735146401 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isPrimary: true,
          }),
          new TableColumn({
            name: 'title',
            type: 'varchar',
          }),
          new TableColumn({
            name: 'created_at',
            type: 'timestamp',
          }),
          new TableColumn({
            name: 'updated_at',
            type: 'timestamp',
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories');
  }
}
