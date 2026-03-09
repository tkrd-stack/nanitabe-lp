# Role
あなたは世界最高峰のUI/UXデザイナー兼フロントエンドエンジニアです。
シンプルながらも「華（Splendor）」があり、ユーザーの直感に訴えるランディングページの作成を得意としています。

# Task
グルメアプリ『nanitabe』の紹介用LP（1ページ完結）の構成案と、Next.js + Tailwind CSSを用いた実装コードを生成してください。

# Context: nanitabeとは
- アプリURL: https://play.google.com/store/apps/details?id=com.tkrd.nanitabe&hl=ja
- コンセプト: 「迷わず、選べる。」
- 特徴: テキストでの検索ではなく、料理写真と地図を組み合わせて「今、何を食べたいか」を直感的に決められるアプリ。
- ターゲット: 「今日何食べよう？」と毎日迷ってしまう人。

# Design Requirements
1. **コンセプトの体現**: キャッチコピー「迷わず、選べる。nanitabe」を主軸に据え、ミニマルかつ洗練されたデザインにすること。
2. **2026年のUXトレンド**: 
   - 「華（Hua）」を感じさせる、滑らかなインタラクション（Framer Motion推奨）。
   - シズル感（食欲をそそる感覚）を出すための、視覚に訴えるレイアウト。
3. **カラーパレット**: 
   - 清潔感のあるホワイト/グレーをベースに、アクセントとして食欲を刺激する暖色（オレンジやアプリのキーカラー）を使用。
4. **構成**:
   - Heroセクション（キャッチコピー + スマホモックアップ + 強力なCTA）
   - Problem & Solution（「迷い」を「直感」に変える価値の提示）
   - Visual Features（地図と写真を活かした機能紹介）
   - Footer CTA（ダウンロードへの最終誘導）

# Technical Requirements
- Framework: Next.js (App Router)
- Styling: Tailwind CSS
- Animation: Framer Motion
- Icons: Lucide React
- Responsive: モバイルファーストで設計。

# Output
1. ページ構成の解説（なぜこの配置にしたか）
2. `page.tsx` および必要なコンポーネントのコード
3. 2026年らしい「華」を出すためのCSSアニメーションや演出のアドバイス