import { useState } from "react";
import { useDispatch } from "react-redux";
import { editNote, deleteNote } from "./notesSlice";

export default function NotesCard({ note }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleSave = () => {
    dispatch(
      editNote({
        id: note.id,
        title: editedTitle,
        content: editedContent,
      })
    );
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow">
      {isEditing ? (
        <>
          <input
            className="w-full border p-2 mb-2"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            className="w-full border p-2 mb-2"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <div className="flex gap-2 mt-2">
            <button
              onClick={handleSave}
              className="text-sm text-blue-600 hover:underline cursor-pointer"
            >
              儲存
            </button>
            <button
              onClick={() => setIsEditing(false)}
              className="text-sm text-red-600 hover:underline cursor-pointer"
            >
              取消
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="font-bold text-lg">{note.title}</h2>
          <p className="text-gray-700">{note.content}</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => setIsEditing(true)}
              className="text-sm text-blue-600 hover:underline cursor-pointer"
            >
              編輯
            </button>
            <button
              onClick={() => dispatch(deleteNote(note.id))}
              className="text-sm text-red-600 hover:underline cursor-pointer"
            >
              刪除
            </button>
          </div>
        </>
      )}
    </div>
  );
}
