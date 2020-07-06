import { Router} from 'express';
import ProductsController from '../controllers/ProductsControllers';

const productsRoutes = Router();

const productsController = new ProductsController();


productsRoutes.post('/', productsController.create);


export default ProductsController;
