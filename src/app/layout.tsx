import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevToolsHub",
  description:
    "Salve ferramentas úteis como, extensões, APIs, bibliotecas, geradores, etc.",
  keywords: "DevToolsHub, Salvamento de ferramentas, API, extensões",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
