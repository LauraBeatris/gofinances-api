import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Category from './Category';

export type TransactionType = 'income' | 'outcome';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({
    type: 'enum',
    enum: ['income', 'outcome'],
  })
  type: TransactionType;

  @Column('int')
  value: number;

  @Column('uuid')
  category_id: string;

  @ManyToOne(() => Category, category => category.transactions, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
    eager: true,
  })
  @JoinColumn({
    name: 'category_id',
    referencedColumnName: 'id',
  })
  category: Category;

  @CreateDateColumn({
    type: 'timestamp',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
  })
  updated_at: Date;
}

export default Transaction;
