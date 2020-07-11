import { Router } from 'express';

import productsRouter from '@modules/products/infra/http/routes/products.routes';
import categoryRouter from '@modules/products/infra/http/routes/category.routes';

const routes = Router();

routes.use('/products', productsRouter)
routes.use('/category', categoryRouter)

export default routes;
