import Category from '@modules/products/infra/typeorm/entities/Category';
import AppError from '@shared/errors/AppError';
import { injectable, inject} from 'tsyringe'
import ICategoryRepository from '../repositories/ICategoryRepository';

interface IRequest {
  title: string;
}
@injectable()
class CreateCategoryService {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ){}

  public async execute({title}: IRequest): Promise<Category> {
    const checkCategoryExists = await this.categoryRepository.findIdByNameCategory(title);

    if(checkCategoryExists?.title === title) {
      throw new AppError('Category name already used');
    };


    const category = await this.categoryRepository.create({title});

    return category;

  }
};

export default CreateCategoryService;
