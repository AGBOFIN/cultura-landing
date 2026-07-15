"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

export default function WhyCultiva() {
  const problems = [
    { text: "Suivi sur papier", icon: X },
    { text: "Oubli des tâches", icon: X },
    { text: "Mauvaise organisation", icon: X },
    { text: "Difficulté à calculer les bénéfices", icon: X },
    { text: "Perte d'informations", icon: X },
  ];

  const solutions = [
    { text: "Suivi numérique intelligent", icon: Check },
    { text: "Notifications automatiques", icon: Check },
    { text: "Organisation optimisée", icon: Check },
    { text: "Calcul automatique des revenus", icon: Check },
    { text: "Données sécurisées", icon: Check },
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
            Pourquoi <span className="text-cultiva-green">CULTIVA</span> ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment nous transformons la gestion agricole
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-red-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-red-600 mb-6">
              Les défis actuels
            </h3>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-5 h-5 text-red-600" />
                  </div>
                  <span className="text-gray-700">{problem.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-green-50 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-cultiva-green mb-6">
              La solution CULTIVA
            </h3>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 bg-cultiva-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-5 h-5 text-cultiva-green" />
                  </div>
                  <span className="text-gray-700">{solution.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
