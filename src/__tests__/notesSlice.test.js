import { describe, expect, it } from "vitest";
import notesReducer, {
  addNote,
  editNote,
  deleteNote,
} from "../features/notesSlice";

describe("notesSlice 單元測試", () => {
  it("在陣列中應該新增1筆資料", () => {
    const initialState = { notes: [] };
    const action = addNote({ title: "test", content: "content" });
    const state = notesReducer(initialState, action);

    // *測試* 狀態陣列長度應為1且標題是"test"
    expect(state.notes).toHaveLength(1);
    expect(state.notes[0].title).toBe("test");
  });

  it("內容更改時，應該會正確更新資料內容", () => {
    const initialState = {
      notes: [{ id: 1, title: "test", content: "content" }],
    };
    const action = editNote({ id: 1, title: "A", content: "B" });
    const state = notesReducer(initialState, action);

    // *測試* 標題應為"A"且內容為"B"
    expect(state.notes[0].title).toBe("A");
    expect(state.notes[0].content).toBe("B");
  });

  it("刪除後，陣列中應查無資料", () => {
    const initialState = {
      notes: [{ id: 1, title: "test", content: "content" }],
    };
    const state = notesReducer(initialState, deleteNote(1));

    // *測試* 狀態陣列長度應為0
    expect(state.notes).toHaveLength(0);
  });
});
