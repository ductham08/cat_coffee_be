import express from "express"
import { add_products, list_products } from "../controller/products"

const router = express.Router()

router.get("/products", list_products)
router.post("/products", add_products)