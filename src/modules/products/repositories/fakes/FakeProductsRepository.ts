import IProductsRepository from '../IProductsRepository';
import { uuid } from 'uuidv4';
import Product from '../../infra/typeorm/entities/Product';
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';

class FakeProductRepository implements IProductsRepository {
  private products: Product[] = [];

  public async findAllProducts(): Promise<Product[] | undefined> {
    let { products }= this;
    products = this.products.filter(product => product.name);

    return products;
  };

  public async findByName(name: string): Promise<Product | undefined> {
    return this.products.find(product => product.name === name);
  };

  public async create(productData: ICreateProductDTO): Promise<Product> {
    const product = new Product();

    Object.assign(product, { id: uuid() }, productData);

    this.products.push(product);

    return product;
  };

  public async save(product: Product): Promise<Product> {
    const findIndex = this.products.findIndex(findProduct => findProduct.id === product.id);
    this.products[findIndex] = product;
    return product;
  };
}

export default FakeProductRepository;
