import mongoose from "mongoose";

const keySchema = new mongoose.Schema({
    apikey: {
        type: String,
        required: [true, "Please provide the api key"],
        unique: true,
    },
    hit: {
        type: Number,
        default: 0,
    }
})

const Key = mongoose.models.keys || mongoose.model("keys", keySchema);

export default Key;