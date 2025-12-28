import { useState } from "react";
import TelegramIcon from "../../iocons/Telegram";
import CodeEditor from "../editor/CodeEditor";
import FileDownloadIcon from "../../iocons/FileDownloadIcon";

const ChatInterface = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendMessage = () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse(""); // Clear previous response

    // Create EventSource with query parameters
    const eventSource = new EventSource(
      `http://localhost:3000/generate-stream?prompt=${encodeURIComponent(
        prompt
      )}`
    );

    eventSource.onmessage = (event) => {
      const data = event.data;
      console.log("Received data:", data);

      // Append streaming data to response
      setResponse((prev) => prev + data);
    };

    eventSource.onerror = (error) => {
      console.error("EventSource error:", error);
      eventSource.close();
      setLoading(false);
    };

    eventSource.addEventListener("end", () => {
      console.log("EventSource ended");
      eventSource.close();
      setLoading(false);
    });
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-5 text-gray-800 text-lg m-4">
        This is a simple UI generator that generates the 3 variants of UI in
        plain HTML for your requirements. This uses tailwindcss for styling.
      </div>
      {/* Main Content Area */}
      <div className="flex-1 p-8">
        {loading && (
          <p className="text-gray-800 text-lg">Generating the HTML...</p>
        )}
        {response && (
          <div className="w-[80%] mx-auto border border-gray-300 rounded-lg overflow-hidden">
            <CodeEditor value={response} />
          </div>
        )}

        {!loading && response && (
          <div className="flex items-center py-1 font-medium mt-4">
            <div className="flex items-center">
              <FileDownloadIcon />
            </div>
            <div className="flex-1 items-center ml-1">
              <a
                href={`data:text/html;charset=utf-8,${encodeURIComponent(
                  response
                )}`}
                download="generated.html"
                className="text-indigo-600 visited:text-purple-600 target:shadow-lg"
              >
                Download HTML
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Search Bar at Bottom */}
      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative flex items-center">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              cols={2}
              placeholder="Describe your requirements in short here..."
              className="flex-1 px-6 py-4 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            <button
              className="absolute right-2 bottom-1 cursor-pointer"
              onClick={handleSendMessage}
            >
              <TelegramIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
