import { Router } from 'express';

import { getCustomRepository, getRepository } from 'typeorm';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Category from '../models/Category';
// import CreateTransactionService from '../services/CreateTransactionService';
// import DeleteTransactionService from '../services/DeleteTransactionService';
// import ImportTransactionsService from '../services/ImportTransactionsService';

const transactionsRouter = Router();

transactionsRouter.get('/', async (request, response) => {
  const transactionsRepository = getCustomRepository(TransactionsRepository);

  const transactions = await transactionsRepository.find();
  return response.json(transactions);
});

transactionsRouter.post('/', async (request, response) => {
  const { title, value, type, category: categoryTitle } = request.body;

  const categoriesRepository = getRepository(Category);
  const transactionsRepository = getCustomRepository(TransactionsRepository);

  let category = await categoriesRepository.findOne({
    title: categoryTitle,
  });

  if (!category) {
    category = categoriesRepository.create({
      title: categoryTitle,
    });

    await categoriesRepository.save(category);
  }

  const transaction = transactionsRepository.create({
    title,
    value,
    type,
    category_id: category.id,
  });

  await transactionsRepository.save(transaction);

  return response.json(transaction);
});

transactionsRouter.delete('/:id', async (request, response) => {
  // TODO
});

transactionsRouter.post('/import', async (request, response) => {
  // TODO
});

export default transactionsRouter;
