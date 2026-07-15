"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Koffi Mensah",
      role: "Agriculteur, Togo",
      content: "CULTIVA a transformé ma façon de gérer mon exploitation. Je peux maintenant suivre mes cultures et mes finances facilement.",
      rating: 5,
      avatar: "KM",
    },
    {
      name: "Awa Diallo",
      role: "Coopérative agricole, Sénégal",
      content: "Grâce à CULTIVA, notre coopérative a amélioré sa productivité de 30%. L'application est simple et adaptée à nos besoins.",
      rating: 5,
      avatar: "AD",
    },
    {
      name: "Emmanuel Kouassi",
      role: "Exploitant, Côte d'Ivoire",
      content: "Les notifications intelligentes m'aident à ne jamais oublier une tâche importante. CULTIVA est un véritable assistant agricole.",
      rating: 5,
      avatar: "EK",
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
            Ce que disent nos <span className="text-cultiva-green">utilisateurs</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            *Témoignages fictifs pour démonstration*
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-cultiva-yellow text-cultiva-yellow" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cultiva-green rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
