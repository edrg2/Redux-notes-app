import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddNoteForm from "../components/AddNoteForm";
import NotesList from "../components/NotesList";
import notesReducer from "../features/notesSlice";

test("AddNoteForm 元件測試", async () => {
  const store = configureStore({
    reducer: { notes: notesReducer },
  });
  render(
    <Provider store={store}>
      <>
        <AddNoteForm />
        <NotesList />
      </>
    </Provider>
  );

  await userEvent.type(
    screen.getByPlaceholderText("輸入筆記標題..."),
    "Test Note"
  );
  await userEvent.type(
    screen.getByPlaceholderText("輸入筆記內容..."),
    "Note Content"
  );
  await userEvent.click(screen.getByRole("button", { name: /新增筆記/i }));

  // *測試* 表單會正確送出並在畫面上顯示標題"Test Note"
  expect(screen.getByText("Test Note")).toBeInTheDocument();
});
