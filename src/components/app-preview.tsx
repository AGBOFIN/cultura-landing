"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, Sprout, Cloud, Bell, BarChart3 } from "lucide-react";

export default function AppPreview() {
  const previews = [
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      description: "Vue d'ensemble de votre exploitation",
      color: "from-cultiva-green to-cultiva-darkGreen",
    },
    {
      icon: Sprout,
      title: "Gestion des cultures",
      description: "Suivi détaillé de vos cultures",
      color: "from-green-400 to-green-600",
    },
    {
      icon: Cloud,
      title: "Météo",
      description: "Prévisions pour vos parcelles",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Alertes intelligentes",
      color: "from-yellow-400 to-yellow-600",
    },
    {
      icon: BarChart3,
      title: "Rapports",
      description: "Statistiques et analyses",
      color: "from-purple-400 to-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Aperçu de l'<span className="text-cultiva-green">application</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez l'interface intuitive de CULTIVA
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previews.map((preview, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className={`h-48 bg-gradient-to-br ${preview.color} flex items-center justify-center`}>
                <preview.icon className="w-16 h-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {preview.title}
                </h3>
                <p className="text-gray-600">{preview.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
