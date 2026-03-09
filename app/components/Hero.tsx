"use client";

import { motion } from "framer-motion";
import { ArrowRight, Utensils } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-16 lg:pt-24 lg:pb-24 bg-zinc-50 flex flex-col items-center">
      {/* Background blur elements for "Splendor" */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-zinc-100 text-sm font-medium text-orange-600 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Utensils className="w-4 h-4" />
            <span>直感で決める、新しいグルメ体験</span>
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-6 leading-tight">
            迷わず、<br className="visible lg:hidden" />
            選べる。<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              nanitabe
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-zinc-500 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            文字のレビューじゃなく、料理の写真と地図から「今、食べたいもの」を直感的に見つける。<br />
            あなたの毎日の「今日何食べよう？」を解決します。
          </p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a 
              href="https://play.google.com/store/apps/details?id=com.tkrd.nanitabe&hl=ja" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all duration-300 w-full sm:w-auto overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span>アプリをダウンロード</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex-1 relative w-full max-w-md lg:max-w-none mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          {/* Decorative elements behind phone */}
          <div className="absolute inset-0 bg-gradient-to-tr from-orange-100 to-white rounded-[3rem] rotate-3 scale-105 shadow-xl -z-10"></div>
          
          {/* Abstract Phone Mockup */}
          <div className="relative mx-auto border-zinc-800 dark:border-zinc-800 bg-zinc-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-2xl overflow-hidden">
            <div className="w-[148px] h-[18px] bg-zinc-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
            <div className="h-full w-full bg-white relative overflow-hidden flex flex-col">
              {/* Fake App UI - Map and Images */}
              <div className="h-1/2 bg-zinc-100 relative">
                {/* Map abstract */}
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #a1a1aa 1px, transparent 0)', backgroundSize: '20px 20px' }}></div>
                <motion.div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <Utensils className="w-5 h-5" />
                </motion.div>
              </div>
              <div className="h-1/2 bg-white p-4 flex flex-col gap-3 relative z-10 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] rounded-t-3xl -mt-4">
                <div className="w-12 h-1.5 bg-zinc-200 rounded-full mx-auto mb-2"></div>
                <div className="flex gap-3 overflow-hidden">
                  <div className="w-32 h-32 bg-zinc-100 rounded-2xl flex-shrink-0 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Food 1" className="object-cover w-full h-full" />
                  </div>
                  <div className="w-32 h-32 bg-zinc-100 rounded-2xl flex-shrink-0 relative overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Food 2" className="object-cover w-full h-full" />
                  </div>
                </div>
                <div className="h-4 bg-zinc-100 rounded w-2/3 mt-2"></div>
                <div className="h-3 bg-zinc-50 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
