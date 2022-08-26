import mongoose from "mongoose";

const products_schema = mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: mongoose.ObjectId,
        ref: 'Category'
    }
}, {
    timestamps: true
})

export default mongoose.model("products", products_schema)