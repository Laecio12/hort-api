import { Router} from 'express';
import CategoryController from '../controllers/CategoryControllers';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const categoryRouter = Router();

const categoryController = new CategoryController();

categoryRouter.use(ensureAuthenticated)

categoryRouter.post('/', categoryController.create);


export default categoryRouter;
