import { getRepository, Repository} from 'typeorm';
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IProductRepository from '@modules/products/repositories/IProductsRepository';
import Product from '../entities/Product';

class ProductRepository implements IProductRepository {
  private ormRepository: Repository<Product>

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async findByName(name: string): Promise<Product | undefined> {
    const product = await this.ormRepository.findOne({
      where: {
        name,
      },
    });
    return product;
  };

  public async findByCode(): Promise<Product> {
     const findProduct = await this.ormRepository.find({

      order:{ code: "DESC"},
      take: 1
    });
    return findProduct[0]
  }

  public async findAllProducts(): Promise<Product[] | undefined> {
    let products: Product[];

    products = await this.ormRepository.find();

    return products;
  };

  public async create(productData: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create(productData);
    await this.ormRepository.save(product)
    return product;
  };

  public async save(product: Product): Promise<Product> {
   return this.ormRepository.save(product)
  }
}

export default ProductRepository;
