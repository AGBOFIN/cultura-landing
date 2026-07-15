"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-green-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-cultiva-green/10 text-cultiva-green px-4 py-2 rounded-full text-sm font-medium"
            >
              🌱 La solution agricole moderne
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Gérez votre exploitation agricole en toute{" "}
              <span className="text-cultiva-green">simplicité</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              CULTIVA vous accompagne dans la gestion de vos parcelles, cultures, dépenses, récoltes et activités quotidiennes grâce à une solution simple, moderne et adaptée aux réalités africaines.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cultiva-green text-white px-8 py-4 rounded-full font-medium hover:bg-cultiva-darkGreen transition-colors flex items-center justify-center gap-2"
              >
                Découvrir
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-cultiva-green text-cultiva-green px-8 py-4 rounded-full font-medium hover:bg-cultiva-green hover:text-white transition-colors"
              >
                Demander une démonstration
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-8 pt-4"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-cultiva-green">500+</div>
                <div className="text-sm text-gray-600">Agriculteurs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cultiva-green">1000+</div>
                <div className="text-sm text-gray-600">Parcelles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cultiva-green">99%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-72 h-[580px] bg-gray-900 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="bg-gradient-to-b from-cultiva-green to-cultiva-darkGreen h-full p-6">
                    <div className="text-white mb-6">
                      <div className="text-sm opacity-80">Bonjour, Koffi</div>
                      <div className="text-2xl font-bold">Votre exploitation</div>
                    </div>
                    
                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-white">
                        <div className="text-3xl mb-2">🌱</div>
                        <div className="text-sm font-medium">Parcelles</div>
                        <div className="text-xs opacity-80">5 actives</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-white">
                        <div className="text-3xl mb-2">📅</div>
                        <div className="text-sm font-medium">Tâches</div>
                        <div className="text-xs opacity-80">3 en cours</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-white">
                        <div className="text-3xl mb-2">💰</div>
                        <div className="text-sm font-medium">Finances</div>
                        <div className="text-xs opacity-80">+125,000 FCFA</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-white">
                        <div className="text-3xl mb-2">📊</div>
                        <div className="text-sm font-medium">Rapports</div>
                        <div className="text-xs opacity-80">Voir tout</div>
                      </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-2xl p-4">
                      <div className="text-sm font-semibold text-gray-800 mb-3">Activité récente</div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-sm">✓</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-gray-800">Récolte terminée</div>
                            <div className="text-xs text-gray-500">Parcelle A - Maïs</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                            <span className="text-sm">⚠</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-xs text-gray-800">Tâche en retard</div>
                            <div className="text-xs text-gray-500">Irrigation Parcelle B</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-cultiva-yellow/30 rounded-full blur-xl"
              />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-cultiva-green/20 rounded-full blur-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
