import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import { COLORS_ROOT_STYLE } from "@/shared/config/colors";
import { Jost } from 'next/font/google'

const jost = Jost({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: "КСК-СИСТЕМС",
  description: "КСК-СИСТЕМС",
  openGraph: {
    title: "КСК-СИСТЕМС",
    description: "КСК-СИСТЕМС",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <style dangerouslySetInnerHTML={{ __html: COLORS_ROOT_STYLE }} />
      </head>
      <body
        className={jost.className}
        style={{
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <div className="mainWrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}