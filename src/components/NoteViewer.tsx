// components/NoteViewer.tsx
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

type Props = {
  fileName: string;
};

export default function NoteViewer({ fileName }: Props) {
  const [content, setContent] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    fetch(`/notes/${fileName}.md`)
      .then((res) => res.text())
      .then((text) => {
        const { content, data } = matter(text);
        setTitle(data.title);
        setContent(content);
      });
  }, [fileName]);

  return (
    <div className="prose max-w-3xl mx-auto p-4">
      <h1>{title}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
