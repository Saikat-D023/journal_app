import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB_URL;

export const connectDB = async () => {
    try {
        mongoose.connect(MONGO_URI)
        .then(() => console.log('Connected to MongoDB'))
    }catch (error) {
        console.log("Error while connecting to DB", error);
    }   
};