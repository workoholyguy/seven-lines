import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { site, siteDescription } from "@/global";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s | ${site.shortName}`,
  },
  description: siteDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
        {/* <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      </head>
      <body
        className="antialiased bg-slate-900/95 min-h-screen flex flex-col"
      >
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
        <ScrollToTop />
      </body>
    </html>
  );
}
