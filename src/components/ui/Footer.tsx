//import React from "react";
import {
  faInstagram,
  faFacebook,
  faXTwitter,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FooterProps {
  language: "fr" | "en";
}

export function Footer({ language }: FooterProps) {
  return (
    <footer className="bg-gray-100 dark:bg-[#0b1120] text-gray-700 dark:text-gray-300 py-6 mt-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0 text-center md:text-left text-sm">
          {language === "fr"
            ? "© 2025 ducheetah. Tous droits réservés."
            : "© 2025 ducheetah. All rights reserved."}
        </p>

        <div className="flex space-x-6 text-xl">
        <a
            href="https://instagram.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-green-300 transition"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://instagram.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-500 transition"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="mailto:ton.email@example.com"
            aria-label="Email"
            className="hover:text-green-600 transition"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="https://facebook.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a
            href="https://twitter.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-sky-400 transition"
          >
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a
            href="https://linkedin.com/in/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </footer>
  );
}
