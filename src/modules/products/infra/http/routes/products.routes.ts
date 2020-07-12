import { Router} from 'express';
import ProductsController from '../controllers/ProductsControllers';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const productsRouter = Router();

const productsController = new ProductsController();

productsRouter.use(ensureAuthenticated)

productsRouter.post('/', productsController.create);


export default productsRouter;
