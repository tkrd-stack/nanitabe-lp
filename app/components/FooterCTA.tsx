"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function FooterCTA() {
  return (
    <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            さあ、<br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200">直感</span>で選ぼう。
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            毎日の食事選びを、もっと楽しく、もっとシンプルに。
            nanitabeはGoogle Playで配信中です。
          </p>
          
          <a 
            href="https://play.google.com/store/apps/details?id=com.tkrd.nanitabe&hl=ja" 
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-zinc-900 rounded-full font-bold text-lg hover:bg-zinc-100 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-white/10"
          >
            <span>Google Playで手に入れる</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
      
      <div className="mt-24 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-sm">
        <p>&copy; {new Date().getFullYear()} nanitabe. All rights reserved.</p>
      </div>
    </section>
  );
}
