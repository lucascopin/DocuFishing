import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
    title: "DocuFishing",
    description: "Documentation for Fishing planet",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
        <body className={"flex items-center justify-center h-screen"}>
        {children}
        </body>
        </html>
    );
}