import type { Metadata } from "next";

import "./globals.css";
import Header from "./ui/Header";

export const metadata: Metadata = {
    title: "Українські гільдії  вов класік",
    description: "Українські гільдії  вов класік",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ua">
            <body className="bg-slate-500 flex-col">
                <Header />

                {children}
            </body>
        </html>
    );
}
