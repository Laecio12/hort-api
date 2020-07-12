import Product from '@modules/products/infra/typeorm/entities/Product';
import AppError from '@shared/errors/AppError';
import { injectable, inject} from 'tsyringe'
import IProductRepository from '../repositories/IProductsRepository';
import ICategoryRepository from '../repositories/ICategoryRepository';

interface IRequest {
  name: string;
  code?: number;
  price: number;
  quantity: number;
  description: string;
  categoryName: string
  category_id?: string
}
@injectable()
class CreateProductService {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductRepository,

    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository,
  ){}

  public async execute({
    name,
    price,
    description,
    code,
    quantity,
    categoryName,
    category_id
  }: IRequest): Promise<Product> {
    const checkProductExists = await this.productsRepository.findByName(name);

    if(checkProductExists ) {
      throw new AppError('Product name already used');
    };

    const findCode = await this.productsRepository.findByCode();

    if( findCode ) {
      code = findCode.code + 1;
    }else{
      code = 1;
    }

    console.log(code);

    const checkCategoryIdExixts = await this.categoryRepository.findIdByNameCategory(categoryName);

    if (checkCategoryIdExixts) {
       category_id = checkCategoryIdExixts.id;
    }else{
      throw new AppError('Category does not exists')
    }

    const product = await this.productsRepository.create({
      name,
      price,
      quantity,
      description,
      category_id,
      code,
    });

    return product;

  }
};

export default CreateProductService;
