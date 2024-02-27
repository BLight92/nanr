import mongoose from "mongoose";

const URLSchema = new mongoose.Schema({
    urlID: {
        type: String,
        required: true,
    },
    origURL: {
        type: String,
        required: true,
    },
    shortURL: {
        type: String,
        required: true,
    },
    clicks: {
        type: Number,
        required: true,
        default: 0,
    },
    date: {
        type: String,
        default: Date.now,
    },
});

export default mongoose.model('URL', URLSchema);