import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateCategoryService from '@modules/products/services/CreateCategorySevice';

export default class CategoryController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {title} = request.body;

    const createCategory = container.resolve(CreateCategoryService);

    const category = await createCategory.execute({title});

    return response.json(category);
  }
}
