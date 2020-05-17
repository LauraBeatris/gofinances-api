import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddDefaultValueToTimestampColumns1589739181699
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns('transactions', [
      {
        oldColumn: new TableColumn({
          name: 'created_at',
          type: 'timestamp',
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
          type: 'timestamp',
        }),
        newColumn: new TableColumn({
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        }),
      },
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumns('transactions', [
      {
        oldColumn: new TableColumn({
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        }),
        newColumn: new TableColumn({
          name: 'created_at',
          type: 'timestamp',
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
          type: 'timestamp',
        }),
      },
    ]);
  }
}
