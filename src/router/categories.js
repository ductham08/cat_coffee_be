import express from "express"
import { add_categories, list_categories } from "../controller/categories"

const router = express.Router()

// router
router.post("/categories", add_categories)
router.get("/categories", list_categories)


export default router