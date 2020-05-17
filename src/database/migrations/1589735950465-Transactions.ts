import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export default class Transaction1589734372409 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'uuid',
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
            isPrimary: true,
          }),
          new TableColumn({
            name: 'title',
            type: 'varchar',
          }),
          new TableColumn({
            name: 'value',
            type: 'int',
          }),
          new TableColumn({
            name: 'type',
            type: 'enum',
            enum: ['income', 'outcome'],
          }),
          new TableColumn({
            name: 'category_id',
            type: 'uuid',
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
    await queryRunner.dropTable('transactions');
  }
}
