import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class ChangeTimestampColumnTypes1590196525941
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.changeColumns('transactions', [
      {
        oldColumn: new TableColumn({
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        }),
        newColumn: new TableColumn({
          name: 'created_at',
          type: 'timestamp with timezone',
          default: 'now()',
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        }),
        newColumn: new TableColumn({
          name: 'updated_at',
          type: 'timestamp with timezone',
          default: 'now()',
        }),
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.changeColumns('transactions', [
      {
        oldColumn: new TableColumn({
          name: 'created_at',
          type: 'timestamp with timezone',
          default: 'now()',
        }),
        newColumn: new TableColumn({
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        }),
      },
      {
        oldColumn: new TableColumn({
          name: 'updated_at',
          type: 'timestamp with timezone',
          default: 'now()',
        }),
        newColumn: new TableColumn({
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        }),
      },
    ]);
  }
}
