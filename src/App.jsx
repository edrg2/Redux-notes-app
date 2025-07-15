import AddForm from "./features/AddFrom";
import NotesList from "./features/NotesList";

export default function App() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">
        📝 Redux Notes App
      </h1>

      <AddForm />
      <NotesList />
    </div>
  );
}
