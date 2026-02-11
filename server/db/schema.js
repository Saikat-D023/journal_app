import mongoose from 'mongoose'
const { Schema } = mongoose

const JournalSchema = new Schema({
    title : {
        type: String,
        required: true,
    },
    content : {
        type: String,
        required: true,
    },
    mood : {
        type: String,
    },
    summary: {
        type: String,
    },
    timestamp : {
        type: Date,
        default: Date.now,
    },
})

export const JournalModel = mongoose.model('Journal', JournalSchema);