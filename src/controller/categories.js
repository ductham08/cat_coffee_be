import categories from "../model/categories";

// List all categories
export const list_categories = async(req, res) => {
    try {
        const data = await categories.find().exec()
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error: "Không lấy được danh sách sản phẩm"
        })
    }
}


// Add categories
export const add_categories = async(req, res) => {
    try {
        const data = await new categories(req.body).save()
        res.json(data)
    } catch (error) {
        res.status(400).json({
            error: "Thêm mới sản phẩm không thành công"
        })
    }
}