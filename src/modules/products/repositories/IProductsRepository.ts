import Product from '../infra/typeorm/entities/Product';
import ICreateProductDTO from '../dtos/ICreateProductDTO';

export default interface IProductRepository {
  findByName(name: string): Promise<Product | undefined>;
  create(productData: ICreateProductDTO): Promise<Product>;
  save(product: Product): Promise<Product>;
  findAllProducts(): Promise<Product[] | undefined>;
}
