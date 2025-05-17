// src/pages/About.tsx
import React from "react";

interface AboutProps {
language: "fr" | "en";
}

const About: React.FC<AboutProps> = ({ language }) => {
    return (
        <section className="max-w-3xl mx-auto mt-10 p-6 rounded-xl bg-white dark:bg-[#1c2333] shadow">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {language === "fr" ? "À propos" : "About"}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                {language === "fr"
                ? "Ce site a été créé pour partager des notes claires et synthétiques sur les concepts clés de l’intelligence artificielle, comme l’apprentissage supervisé, les réseaux de neurones, ou encore le traitement du langage naturel (NLP). Il s’adresse à toute personne curieuse d’apprendre, que vous soyez débutant ou déjà familier avec le domaine. Les notes sont régulièrement enrichies et mises à jour, avec une interface simple, multilingue et accessible."
                : "This site was created to share concise and accessible notes on key artificial intelligence topics such as supervised learning, neural networks, and natural language processing (NLP). It is intended for anyone curious about AI, from beginners to more experienced learners. The notes are continuously updated and organized in a clean, multilingual interface."}
            </p>
        </section>
    );
};

export default About;
