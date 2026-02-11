import { JournalModel } from "../../db/schema.js";

export const createEntry = async (req, res) => {
    try {
        const { title, content, mood, summary } = req.body;
        const newEntry = new JournalModel({
            title,
            content,
            mood,
            summary
        });
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (error) {
        res.status(500).json({ message: "Error creating entry", error });
    }
};

export const getEntries = async (req, res) => {
    try {
        const entries = await JournalModel.find();
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ message: "Error fetching entries", error });
    }
};