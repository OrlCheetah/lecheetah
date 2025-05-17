import { Link } from "react-router-dom";

const notes = [
  { id: "apprentissage-supervise", title: "Apprentissage supervisé" },
  { id: "nlp-transformers", title: "NLP avec Transformers" },
];

export default function Home() {
  return (
    <main className="p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Notes IA</h1>

      <ul className="max-w-xl mx-auto space-y-4">
        {notes.map(({ id, title }) => (
          <li key={id}>
            <Link
              to={`/note/${id}`}
              className="block p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
