import { Router } from 'express';

import productsRouter from '@modules/products/infra/http/routes/products.routes';
import categoryRouter from '@modules/products/infra/http/routes/category.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import passwordRouter from '@modules/users/infra/http/routes/password.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';


const routes = Router();

routes.use('/products', productsRouter)
routes.use('/category', categoryRouter)
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;
