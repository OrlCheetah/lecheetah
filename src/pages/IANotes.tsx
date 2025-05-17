//import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const notesFR = [
  {
    title: "Apprentissage supervisé",
    description:
      "Introduction à la régression, classification, et les métriques clés comme l'accuracy ou le F1-score.",
  },
  {
    title: "Réseaux de neurones",
    description:
      "Architecture de base, fonction d'activation, rétropropagation et frameworks populaires.",
  },
  {
    title: "NLP avec Transformers",
    description:
      "Comprendre les embeddings, l'attention, BERT et les modèles Seq2Seq modernes.",
  },
];

const notesEN = [
  {
    title: "Supervised Learning",
    description:
      "Introduction to regression, classification, and key metrics like accuracy and F1-score.",
  },
  {
    title: "Neural Networks",
    description:
      "Basic architecture, activation functions, backpropagation, and popular frameworks.",
  },
  {
    title: "NLP with Transformers",
    description:
      "Understanding embeddings, attention, BERT, and modern Seq2Seq models.",
  },
];

interface IANotesProps{
  darkMode: boolean;
  setDarkMode: (value: any | ((prevState: any) => any)) => void;
  language: "fr" | "en";
  setLanguage: (value: any | ((prevState: any) => any)) => void;
  searchTerm: string;
  setSearchTerm: (value: any | ((prevState: any) => any)) => void;
}
export default function IANotes(NotesProps: IANotesProps) {

  const notes = NotesProps.language === "fr" ? notesFR : notesEN;

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(NotesProps.searchTerm.toLowerCase()) ||
      note.description.toLowerCase().includes(NotesProps.searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#1c2846] text-gray-900 dark:text-gray-100 p-6 transition-colors">
      <div className="flex justify-center mb-8">
        <motion.h1
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {NotesProps.language === "fr"
            ? "Notes sur l'Intelligence Artificielle"
            : "Notes on Artificial Intelligence"}
        </motion.h1>
      </div>

      <div className="flex justify-center mb-6">
        <Input
          placeholder={
            NotesProps.language === "fr"
              ? "Rechercher une note..."
              : "Search a note..."
          }
          className="w-full max-w-md dark:bg-[#1c2333] dark:text-white"
          value={NotesProps.searchTerm}
          onChange={(e) => NotesProps.setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="rounded-2xl shadow-md hover:shadow-lg transition dark:bg-[#1c2333] dark:shadow-slate-400 dark:hover:shadow-slate-400">
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{note.title}</h2>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {note.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 dark:text-gray-400">
            {NotesProps.language === "fr" ? "Aucune note trouvée." : "No notes found."}
          </p>
        )}
      </div>

      <div className="mt-10 flex justify-center">
        <Button className="text-white bg-black hover:bg-gray-800 dark:bg-white dark:text-black">
          {NotesProps.language === "fr" ? "Ajouter une nouvelle note" : "Add a new note"}
        </Button>
      </div>
    </main>
  );
}
