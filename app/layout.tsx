import type { Metadata } from "next";
import { Anuphan } from "next/font/google";
import "./globals.scss";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const anuphan = Anuphan({
  subsets: ["thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "xmmeenn portfolio",
  description: "Generated by xmmeenn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const customMenuItems = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Skill", href: "skill" },
    { label: "Portfolio", href: "portfolios" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <html lang="en">
      <body className={`${anuphan.className}`}>
        <div className="min-h-screen" id="home">
          <Header logoText="XMMEENN" menuItems={customMenuItems} />

          <main className="container mx-auto pt-[64px]">
            <div className="py-6">{children}</div>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
