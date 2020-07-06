import Category from '../infra/typeorm/entities/Category';
import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';

export default interface ICategoryRepository {
  findIdByNameCategory(name: string): Promise<Category | undefined>;
  create(categoryData: ICreateCategoryDTO): Promise<Category>;
  save(category: Category): Promise<Category>;
  findAllCategorys(): Promise<Category[] | undefined>;
}
