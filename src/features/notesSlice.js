import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  notes: [
    {
      id: "1",
      title: "我的第一則筆記",
      content: "這是使用 Redux Toolkit 建立的筆記。",
    },
    {
      id: "2",
      title: "學習 React",
      content: "反覆練習 Hooks 和元件生命週期。",
    },
  ],
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer(state, action) {
        state.notes.push(action.payload);
      },
      prepare(payload) {
        const { title, content } = payload;
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },

    editNote: {
      reducer(state, action) {
        const { id, title, content } = action.payload;
        const note = state.notes.find((note) => note.id === id);
        if (note) {
          note.title = title;
          note.content = content;
        }
      },
    },

    deleteNote: {
      reducer(state, action) {
        state.notes = state.notes.filter((note) => note.id !== action.payload);
      },
    },
  },
});

export const { addNote, editNote, deleteNote } = notesSlice.actions;

export default notesSlice.reducer;
