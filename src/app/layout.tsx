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
            <body className="bg-gradient-to-b min-h-[100vh] from-blue-600 to-amber-300 flex-col flex  ">
                <Header />

                {children}
            </body>
        </html>
    );
}
