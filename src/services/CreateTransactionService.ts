import { getCustomRepository } from 'typeorm';

import Transaction, { TransactionType } from '../models/Transaction';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateCategoryService from './CreateCategoryService';

import AppError from '../errors/AppError';

interface Request {
  title: string;
  categoryTitle: string;
  value: number;
  type: TransactionType;
}
class CreateTransactionService {
  public async execute({
    title,
    categoryTitle,
    value,
    type,
  }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const balance = await transactionsRepository.getBalance();

    if (type === 'outcome' && balance.total < value) {
      throw new AppError(
        'Your outcome is bigger than your total credits available.',
        400,
      );
    }

    const createCategoryService = new CreateCategoryService();
    const category = await createCategoryService.execute(categoryTitle);

    const transaction = transactionsRepository.create({
      title,
      category_id: category.id,
      value,
      type,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
