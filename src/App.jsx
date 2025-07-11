export default function App() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-6">
        📝 Redux Notes App
      </h1>

      <form className="bg-white p-4 rounded-md shadow mb-6 max-w-2xl mx-auto flex flex-col items-start">
        <input
          type="text"
          placeholder="輸入筆記標題..."
          className="w-full border p-2 mb-2 rounded"
        />
        <textarea
          placeholder="輸入筆記內容..."
          className="w-full border p-2 mb-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700  cursor-pointer"
        >
          新增筆記
        </button>
      </form>

      <div className="max-w-3xl mx-auto space-y-4 grid grid-cols-3">
        <div className="bg-white p-4 rounded-md shadow">
          <h2 className="font-bold text-lg">筆記標題</h2>
          <p className="text-gray-700">這是筆記的內容</p>
          <div className="flex gap-2 mt-2">
            <button className="text-sm text-blue-600 hover:underline cursor-pointer">
              編輯
            </button>
            <button className="text-sm text-red-600 hover:underline cursor-pointer">
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
