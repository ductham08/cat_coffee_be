import express from "express"
import { add_products, list_products } from "../controller/categories"

const router = express.Router()

// router
router.post("/categories", add_products)
router.get("/categories", list_products)


export default router