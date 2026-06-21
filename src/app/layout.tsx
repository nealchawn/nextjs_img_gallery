import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Next.js Image Gallery",
  description: "Chawn Neal's Image Gallery tutorial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <main className="w-full max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
