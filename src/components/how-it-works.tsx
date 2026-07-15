"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Créer son compte",
      description: "Inscription simple et rapide en quelques minutes",
    },
    {
      number: 2,
      title: "Ajouter son exploitation",
      description: "Configurez votre profil et vos informations",
    },
    {
      number: 3,
      title: "Créer ses parcelles",
      description: "Ajoutez vos parcelles avec leurs caractéristiques",
    },
    {
      number: 4,
      title: "Suivre ses cultures",
      description: "Gérez vos cultures et vos activités agricoles",
    },
    {
      number: 5,
      title: "Recevoir les notifications",
      description: "Soyez alerté des tâches importantes",
    },
    {
      number: 6,
      title: "Analyser les performances",
      description: "Consultez vos rapports et améliorez vos rendements",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comment ça <span className="text-cultiva-green">marche</span> ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            6 étapes simples pour démarrer avec CULTIVA
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-cultiva-green/20 hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex gap-6"
                >
                  {/* Step Number */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-cultiva-green rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 bg-gray-50 rounded-2xl p-6 hover:bg-green-50 transition-colors">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
