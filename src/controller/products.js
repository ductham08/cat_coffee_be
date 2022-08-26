import express from "express"
import products from "../model/products"


const router = express.Router()

// List products
export const list_producst = async(req, res) => {
    try {
        const data = await products.find().exec()
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error: "Lấy danh sách sản phẩm không thành công!"
        })
    }
}

// Add products
export const add_producst = async(req, res) => {
    try {
        const data = await new products(req.body).save()
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error: "Thêm mới sản phẩm không thành công!"
        })
    }
}