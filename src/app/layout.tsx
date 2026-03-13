import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers/providers";
import  Header  from "./components/UI/header";
import { siteConfig } from "@/config/site.config";
import { LayoutConfig } from "@/config/layout.config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>
          <Header>
            <main className={`flex flex-col w-full justify-start items-center`}
            style={{
              height: `calc(100vh - ${LayoutConfig.headerHeight} - ${LayoutConfig.footerHeight})`
            }}>
              {children}  
            </main>
            <footer className={`w-full flex justify-center items-center`}
            style={{height: LayoutConfig.footerHeight}}
            >
              <p>{siteConfig.description}</p>
            </footer>
          </Header>
      </Providers>  
      </body>
    </html>
  );
}
