import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class TransactionsCategory1589736053993
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const categoryForeignKey = new TableForeignKey({
      name: 'fk_transactions_categories',
      columnNames: ['category_id'],
      referencedColumnNames: ['id'],
      referencedTableName: 'categories',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    });

    await queryRunner.createForeignKey('transactions', categoryForeignKey);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'transactions',
      'fk_transactions_categories',
    );
  }
}
