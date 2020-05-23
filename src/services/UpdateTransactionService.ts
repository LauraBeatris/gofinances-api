import { getCustomRepository } from 'typeorm';
import { isUuid } from 'uuidv4';

import Transaction, { TransactionType } from '../models/Transaction';

import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';
import CreateCategoryService from './CreateCategoryService';

interface Request {
  id: string;
  title: string;
  value: number;
  type: TransactionType;
  categoryTitle: string;
}

class UpdateTransactionService {
  public async execute({
    id,
    title,
    type,
    value,
    categoryTitle,
  }: Request): Promise<Transaction> {
    if (!id || !isUuid(id)) {
      throw new AppError('Provide a valid transaction id');
    }

    const transactionsRepository = getCustomRepository(TransactionsRepository);

    const balance = await transactionsRepository.getBalance();

    if (value && type === 'outcome' && balance.total < value) {
      throw new AppError(
        'Your outcome is bigger than your total credits available.',
        400,
      );
    }

    const transaction = await transactionsRepository.findOneOrFail(id);

    if (!transaction) {
      throw new AppError('Transaction not found', 404);
    }

    const createCategoryService = new CreateCategoryService();
    const category = await createCategoryService.execute(categoryTitle);

    const updatedTransaction = {
      ...transaction,
      ...(title ? { title } : {}),
      ...(type ? { type } : {}),
      ...(value ? { value } : {}),
      category_id: category.id,
    };

    await transactionsRepository.save(updatedTransaction);
    return { ...updatedTransaction, category };
  }
}

export default UpdateTransactionService;
