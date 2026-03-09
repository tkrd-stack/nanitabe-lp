"use client";

import { motion } from "framer-motion";

export default function VisualFeatures() {
  return (
    <section className="py-24 bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            className="flex-1 w-full"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Delicious food" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 p-8 flex flex-col justify-end">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/90 backdrop-blur-md rounded-2xl p-6 max-w-sm"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                      A
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900">ヘルシーサラダボウル</h4>
                      <p className="text-sm text-zinc-500">現在地から 300m</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
              シズル感が<br />
              あなたの「食べたい」を<br />
              引き出す
            </h2>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              マップ上に広がるのは、店名ではなく美味しそうな料理の写真。
              スワイプするだけで、まるでお店でメニューを開いているかのような体験を提供します。
              直感に逆らわず、美味しそうなものを選ぶだけ。
            </p>
            
            <ul className="space-y-6">
              {[
                "料理の写真がメインのUIで食欲を刺激",
                "現在地を中心とした直感的なマップ連動",
                "余計な情報を取り除いたシンプルな店舗詳細"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-zinc-800 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
