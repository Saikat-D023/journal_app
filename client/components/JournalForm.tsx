import { useState } from "react";
import { useFetchRes } from "../hooks/useFetchRes";
import axios from "axios";

export default function JournalForm() {
    const { data, error, isFetching, isLoading } = useFetchRes();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [mood, setMood] = useState("");
    const [summary, setSummary] = useState("");

    if (isLoading || isFetching) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post("http://localhost:3000/api/journal", {
            title,
            content,
            mood,
            summary
        })
        setTitle("");
        setContent("");
        setMood("");
        setSummary("");
    }
    return (
        <>
            <div>
                <div>
                    <form>
                        <input type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)} />
                        <input type="text" placeholder='content' value={content} onChange={(e) => setContent(e.target.value)} />
                        <input type="text" placeholder='mood' value={mood} onChange={(e) => setMood(e.target.value)} />
                        <input type="text" placeholder='summary' value={summary} onChange={(e) => setSummary(e.target.value)} />
                        <button type='submit'
                            onClick={handleSubmit}>Add Journal</button>
                    </form>
                </div>

                <h2>The journal datas are</h2>
                {data?.data.map((item) => {
                    return (
                        <>
                            <h3>Title: {item.title}</h3>
                            <p>Content: {item.content}</p>
                            <p>Mood: {item.mood}</p>
                            <p>Summary: {item.summary}</p>
                        </>
                    )
                })}
            </div>
        </>
    )
}