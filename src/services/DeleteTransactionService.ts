import { getCustomRepository } from 'typeorm';
import { isUuid } from 'uuidv4';

import AppError from '../errors/AppError';
import TransactionsRepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    if (!id || !isUuid(id)) {
      throw new AppError('Provide a valid transaction id');
    }

    const transactionsRepository = getCustomRepository(TransactionsRepository);

    await transactionsRepository.delete(id);
  }
}

export default DeleteTransactionService;
