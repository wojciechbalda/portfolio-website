import Footer from "@/components/Footer";
import Header from "@/components/Header";

type RootLayout = {
  children: React.ReactNode;
};

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: RootLayout) {
  return <>
    <Header />
    <main className={`${inter.className}`}>{children}</main>
    <Footer />
  </>;
}
