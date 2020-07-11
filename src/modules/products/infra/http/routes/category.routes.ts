import { Router} from 'express';
import CategoryController from '../controllers/CategoryControllers';

const categoryRouter = Router();

const categoryController = new CategoryController();


categoryRouter.post('/', categoryController.create);


export default categoryRouter;
