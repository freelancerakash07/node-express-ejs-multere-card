import express from 'express';
import { showAllProduct, CreateProduct, deleteSingleProduct,  singleProductview, showHomePage, createPage, singlepage, editpage, ubdateproductdata } from '../controllers/productControllers.js';
import { productsPhotoMultere } from '../utils/multerSetup.js';



// init routere
const router = express.Router();



router.get('/', showHomePage)
router.get('/create', createPage)
router.get('/single/:slug', singlepage)
router.get('/product/edit/:slug', editpage)
router.post('/product/ubdate/:id',productsPhotoMultere, ubdateproductdata)




router.get('/product', showAllProduct );
router.get('/product-delete/:id', deleteSingleProduct );
router.get('/product/view/:slug', singleProductview );
router.post('/product', productsPhotoMultere, CreateProduct );




export default router ;