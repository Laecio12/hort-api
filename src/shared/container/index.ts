import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';


import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ProductRepository from '@modules/products/infra/typeorm/repositories/ProductsRepository';

import ICategoryRepository from '@modules/products/repositories/ICategoryRepository';
import CategoryRepository from '@modules/products/infra/typeorm/repositories/CategoryRepository ';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';


container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductRepository,
);

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
