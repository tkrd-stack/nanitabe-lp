import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "nanitabe | 迷わず、選べる。",
  description: "テキストでの検索ではなく、料理写真と地図を組み合わせて「今、何を食べたいか」を直感的に決められるグルメアプリ。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased text-zinc-900 bg-zinc-50`}>
        {children}
      </body>
    </html>
  );
}
