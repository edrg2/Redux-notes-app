import { useSelector } from "react-redux";

import NotesCard from "./NotesCard";

export default function NotesList() {
  const notes = useSelector((state) => state.notes.notes);

  return (
    <div className="max-w-3xl mx-auto grid grid-cols-3 gap-4 auto-rows-min">
      {notes.map((note) => (
        <NotesCard key={note.id} note={note} />
      ))}
    </div>
  );
}
