import mongoose from "mongoose";


const category_schema = mongoose.Schema({
    name: {
        type: String
    },
    image: {
        type: String
    }
})

export default mongoose.model("categories", category_schema)