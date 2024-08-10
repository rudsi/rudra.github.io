import { Inter } from "next/font/google";
import '../styles/Home.module.css';
import '../styles/globals.css';
import Layout from "@/components/Layout";
import { ReactNode } from "react"; // Import ReactNode for typing

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
