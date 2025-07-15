import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "./notesSlice";

export default function AddForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("標題和內容不能為空！");
      return;
    }

    dispatch(addNote({ title, content }));

    setTitle("");
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-md shadow mb-6 max-w-2xl mx-auto flex flex-col items-start"
    >
      <input
        type="text"
        placeholder="輸入筆記標題..."
        className="w-full border p-2 mb-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="輸入筆記內容..."
        className="w-full border p-2 mb-2 rounded"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700  cursor-pointer"
      >
        新增筆記
      </button>
    </form>
  );
}
