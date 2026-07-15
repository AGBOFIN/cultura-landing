"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Clock, WifiOff, Shield } from "lucide-react";

export default function Statistics() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counters, setCounters] = useState({ simplicity: 0, available: 0, secure: 0 });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          simplicity: Math.min(99, Math.floor(99 * progress)),
          available: Math.min(24, Math.floor(24 * progress)),
          secure: Math.min(100, Math.floor(100 * progress)),
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  const stats = [
    {
      value: counters.simplicity,
      suffix: "%",
      label: "de simplicité",
      icon: Clock,
      color: "bg-cultiva-green",
    },
    {
      value: counters.available,
      suffix: "h/24",
      label: "Disponible",
      icon: WifiOff,
      color: "bg-cultiva-yellow",
    },
    {
      value: counters.secure,
      suffix: "%",
      label: "Sécurisé",
      icon: Shield,
      color: "bg-cultiva-darkGreen",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cultiva-green to-cultiva-darkGreen text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pourquoi choisir <span className="text-cultiva-yellow">CULTIVA</span> ?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Des chiffres qui parlent d'eux-mêmes
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-5xl font-bold mb-2">
                {stat.value}
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center bg-white/10 backdrop-blur px-6 py-3 rounded-full">
            <span className="text-cultiva-yellow mr-2">⚡</span>
            <span className="font-medium">Fonctionne hors ligne</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
