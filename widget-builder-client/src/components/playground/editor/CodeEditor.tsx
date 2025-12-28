import Editor from "@monaco-editor/react";
import { useEffect, useRef } from "react";
import type { OnMount } from "@monaco-editor/react";
import type { editor } from "monaco-editor";

const CodeEditor = ({ value }: { value: string }) => {
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor;
  };

  useEffect(() => {
    if (editorRef.current && value) {
      // Format the document
      editorRef.current.getAction("editor.action.formatDocument")?.run();

      // Scroll to the end of the document
      const model = editorRef.current.getModel();
      if (model) {
        const lineCount = model.getLineCount();
        const lastLineLength = model.getLineMaxColumn(lineCount);

        editorRef.current.setPosition({
          lineNumber: lineCount,
          column: lastLineLength,
        });

        editorRef.current.revealLine(lineCount, 1); // 1 = Smooth scroll
      }
    }
  }, [value]);

  return (
    // <div className="mx-auto border border-gray-300 rounded-lg overflow-hidden">
    <Editor
      height="400px"
      defaultLanguage="html"
      value={value}
      theme="vs-light"
      onMount={handleEditorDidMount}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        lineHeight: 24,
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: 2,
        wordWrap: "on",
        readOnly: false,
        lineNumbers: "on",
        glyphMargin: false,
        folding: false,
        lineDecorationsWidth: 5,
        lineNumbersMinChars: 3,
        autoIndent: "full",
        formatOnPaste: true,
        formatOnType: true,
        padding: {
          top: 12,
          bottom: 12,
        },
      }}
    />
    // </div>
  );
};

export default CodeEditor;
