import { getRepository, Repository} from 'typeorm';
import ICreateCategoryDTO from '@modules/products/dtos/ICreateCategoryDTO';
import ICategoryRepository from '@modules/products/repositories/ICategoryRepository';
import Category from '../entities/Category';

class CategoryRepository implements ICategoryRepository {
  private ormRepository: Repository<Category>

  constructor() {
    this.ormRepository = getRepository(Category);
  }

  public async findIdByNameCategory(title: string): Promise<Category | undefined> {
    const category = await this.ormRepository.findOne({
      where: {
        title,
      },
    });

    const category_id = await this.ormRepository.findOne(category?.id)
    return category_id;
  };

  public async findAllCategorys(): Promise<Category[] | undefined> {
    let categorys: Category[];

    categorys = await this.ormRepository.find();

    return categorys;
  };

  public async create(categoryData: ICreateCategoryDTO): Promise<Category> {
    const category = this.ormRepository.create(categoryData);
    await this.ormRepository.save(category)
    return category;
  };

  public async save(category: Category): Promise<Category> {
   return this.ormRepository.save(category)
  }
}

export default CategoryRepository;
