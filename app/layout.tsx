import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ELECTRO LYOUSSR | Apple & Samsung au Maroc",
  description: "Découvrez les smartphones Apple et Samsung chez ELECTRO LYOUSSR. Commande simple par WhatsApp au Maroc.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}