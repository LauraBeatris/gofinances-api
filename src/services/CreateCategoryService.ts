import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';
import Category from '../models/Category';

class CreateCategoryService {
  public async execute(title: string): Promise<Category> {
    if (!title) {
      throw new AppError('Provide a valid category title');
    }

    const categoriesRepository = getRepository(Category);

    let category = await categoriesRepository.findOne({
      title,
    });

    if (!category) {
      category = categoriesRepository.create({
        title,
      });

      await categoriesRepository.save(category);
    }

    return category;
  }
}

export default CreateCategoryService;
