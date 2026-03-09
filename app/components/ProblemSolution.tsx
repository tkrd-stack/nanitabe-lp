"use client";

import { motion } from "framer-motion";
import { SearchX, MapPin, Eye } from "lucide-react";

export default function ProblemSolution() {
  const steps = [
    {
      icon: <SearchX className="w-6 h-6 text-zinc-400" />,
      title: "テキスト検索の限界",
      description: "「何が食べたいかわからない」時、テキストで検索するのは難しいもの。星の数やレビューを読むだけで疲れてしまいます。",
      fade: true
    },
    {
      icon: <Eye className="w-6 h-6 text-orange-500" />,
      title: "直感で選ぶ",
      description: "nanitabeは、美味しそうな料理の「写真」から直感的に選ぶ新しいアプローチ。食欲を刺激する写真が、あなたの食べたいを引き出します。",
      fade: false
    },
    {
      icon: <MapPin className="w-6 h-6 text-orange-500" />,
      title: "すぐに行ける場所",
      description: "写真で選んだら、それが現在地からどれくらい近いのか地図ですぐにわかります。迷わず、今すぐ美味しい体験へ。",
      fade: false
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-6">
            「今日何食べよう？」<br className="md:hidden" />から<br className="hidden md:block" />
            解放される体験
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            レビューサイトで迷う時間はもう終わり。視覚と直感に頼ることで、お店選びはもっと楽しく、シンプルになります。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-3xl border ${step.fade ? 'border-zinc-100 bg-zinc-50/50' : 'border-zinc-200 bg-white shadow-sm'} flex flex-col items-center text-center`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: step.fade ? 0.6 : 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${step.fade ? 'bg-zinc-100' : 'bg-orange-50'}`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">{step.title}</h3>
              <p className="text-zinc-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
