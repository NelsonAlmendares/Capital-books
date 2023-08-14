import { Router } from "express";
import { getProducts, getProduc, createProduct } from "../controller/products.controller.js";

const router = Router();

router.get('/products', getProducts);

router.get('/product/:id', getProduc);

router.get('/createProduct', createProduct)

export default router
