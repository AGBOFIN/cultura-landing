"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle, Rocket, CloudSun, CreditCard, Store, Brain } from "lucide-react";

export default function Roadmap() {
  const versions = [
    {
      version: "Version 1",
      title: "Gestion des exploitations",
      icon: Rocket,
      completed: true,
      features: ["Gestion des parcelles", "Suivi des cultures", "Calendrier agricole"],
    },
    {
      version: "Version 2",
      title: "Météo intelligente",
      icon: CloudSun,
      completed: true,
      features: ["Prévisions météo", "Alertes climatiques", "Historique des données"],
    },
    {
      version: "Version 3",
      title: "Paiement Mobile Money",
      icon: CreditCard,
      completed: false,
      features: ["Intégration Mobile Money", "Facturation", "Suivi des paiements"],
    },
    {
      version: "Version 4",
      title: "Marketplace agricole",
      icon: Store,
      completed: false,
      features: ["Achat d'intrants", "Vente de récoltes", "Connexion fournisseurs"],
    },
    {
      version: "Version 5",
      title: "Intelligence artificielle",
      icon: Brain,
      completed: false,
      features: ["Conseils personnalisés", "Prédictions de rendement", "Analyse avancée"],
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
            Nos futurs <span className="text-cultiva-green">modules</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La roadmap de CULTIVA pour l'avenir
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {versions.map((version, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex gap-6 p-6 rounded-2xl ${
                  version.completed ? "bg-green-50 border-2 border-cultiva-green" : "bg-gray-50 border-2 border-gray-200"
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                    version.completed ? "bg-cultiva-green" : "bg-gray-300"
                  }`}>
                    {version.completed ? (
                      <CheckCircle2 className="w-7 h-7 text-white" />
                    ) : (
                      <Circle className="w-7 h-7 text-white" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <version.icon className={`w-5 h-5 ${version.completed ? "text-cultiva-green" : "text-gray-400"}`} />
                    <span className="text-sm font-medium text-gray-500">{version.version}</span>
                    {version.completed && (
                      <span className="bg-cultiva-green text-white text-xs px-2 py-1 rounded-full">
                        Disponible
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {version.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {version.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="text-sm bg-white px-3 py-1 rounded-full text-gray-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
