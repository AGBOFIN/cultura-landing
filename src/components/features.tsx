"use client";

import { motion } from "framer-motion";
import {
  Sprout,
  Calendar,
  DollarSign,
  BarChart3,
  MapPin,
  Cloud,
  Bell,
  Users,
  Package,
  TrendingUp,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Sprout,
      title: "Gestion des parcelles",
      description: "Suivez toutes vos parcelles et leurs caractéristiques",
    },
    {
      icon: Calendar,
      title: "Calendrier agricole",
      description: "Planifiez vos activités avec un calendrier intelligent",
    },
    {
      icon: DollarSign,
      title: "Suivi des dépenses",
      description: "Gérez vos finances et suivez vos revenus",
    },
    {
      icon: BarChart3,
      title: "Tableau de bord",
      description: "Visualisez vos performances en un coup d'œil",
    },
    {
      icon: MapPin,
      title: "Cartographie GPS",
      description: "Localisez vos parcelles avec précision (Bientôt)",
      comingSoon: true,
    },
    {
      icon: Cloud,
      title: "Prévisions météo",
      description: "Anticipez les conditions climatiques",
    },
    {
      icon: Bell,
      title: "Notifications intelligentes",
      description: "Recevez des alertes pour vos tâches importantes",
    },
    {
      icon: Users,
      title: "Gestion des ouvriers",
      description: "Organisez votre équipe efficacement",
    },
    {
      icon: Package,
      title: "Gestion des stocks",
      description: "Suivez vos intrants et équipements",
    },
    {
      icon: TrendingUp,
      title: "Rapports et statistiques",
      description: "Analysez vos données pour améliorer vos rendements",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Fonctionnalités <span className="text-cultiva-green">puissantes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour gérer votre exploitation
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-cultiva-green/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-cultiva-green" />
                </div>
                {feature.comingSoon && (
                  <span className="absolute -top-2 -right-2 bg-cultiva-yellow text-xs font-medium px-2 py-1 rounded-full">
                    Bientôt
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
