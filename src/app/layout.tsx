import { Inter } from "next/font/google";
import '../styles/Home.module.css';
import '../styles/globals.css'

const inter = Inter({ subsets: ["latin"] });
import Layout from "@/components/Layout";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
