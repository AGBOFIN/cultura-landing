"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Le site fonctionne-t-il hors connexion ?",
      answer: "Oui, CULTIVA est conçu pour fonctionner en mode hors-ligne. Toutes vos données sont stockées localement sur votre appareil et se synchronisent automatiquement lorsque vous retrouvez une connexion internet.",
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer: "Absolument. Vos données sont cryptées et stockées de manière sécurisée. Nous utilisons les meilleures pratiques de sécurité pour protéger vos informations agricoles et financières.",
    },
    {
      question: "Puis-je gérer plusieurs parcelles ?",
      answer: "Oui, vous pouvez gérer un nombre illimité de parcelles. Chaque parcelle peut avoir ses propres cultures, tâches et suivi financier.",
    },
    {
      question: "Comment recevoir les notifications ?",
      answer: "CULTIVA envoie des notifications intelligentes pour vous rappeler les tâches importantes, les alertes météo et les échéances. Vous pouvez personnaliser vos préférences de notification.",
    },
    {
      question: "Le service sera-t-il gratuit ?",
      answer: "CULTIVA propose un plan gratuit avec des fonctionnalités essentielles. Des plans premium seront disponibles pour les agriculteurs et coopératives nécessitant des fonctionnalités avancées.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Questions <span className="text-cultiva-green">fréquentes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur CULTIVA
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-gray-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
