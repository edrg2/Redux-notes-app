import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import NotesList from "../components/NotesList";
import notesReducer from "../features/notesSlice";
import userEvent from "@testing-library/user-event";

describe("NotesList 整合測試", async () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: { notes: notesReducer },
      preloadedState: {
        notes: {
          notes: [{ id: "1", title: "test", content: "content" }],
        },
      },
    });

    render(
      <Provider store={store}>
        <NotesList />
      </Provider>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it("應該要正確渲染初始筆記", () => {
    // *測試* 筆記標題"test"應該出現在畫面上
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("點擊編輯後，應該會顯示輸入框並能成功儲存", async () => {
    await userEvent.click(screen.getByRole("button", { name: /編輯/i }));
    const inputTitle = screen.getByDisplayValue("test");

    // *測試* 值為"test"的輸入框應該出現在畫面上
    expect(inputTitle).toBeInTheDocument();

    await userEvent.clear(inputTitle);
    await userEvent.type(inputTitle, "success");
    await userEvent.click(screen.getByRole("button", { name: /儲存/i }));

    // *測試* 更改後的筆記標題"success"應該出現在畫面上
    expect(screen.getByText("success")).toBeInTheDocument();
  });

  it("編輯時點擊取消，應該會恢復到原始狀態", async () => {
    await userEvent.click(screen.getByRole("button", { name: /編輯/i }));
    const inputTitle = screen.getByDisplayValue("test");
    await userEvent.clear(inputTitle);
    await userEvent.type(inputTitle, "new test");
    await userEvent.click(screen.getByRole("button", { name: /取消/i }));

    // *測試* 原值的筆記標題"test"應該出現在畫面上
    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("點擊刪除後，筆記應該會從畫面上消失", async () => {
    await userEvent.click(screen.getByRole("button", { name: /刪除/i }));

    // *測試* 畫面上不會該元件
    expect(screen.queryByText("test")).not.toBeInTheDocument();
  });
});
