import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./theme-config.css";
import "./globals.css";
import Navbar from "./Navbar";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel, Container } from "@radix-ui/themes";
import AuthProvider from "./auth/Provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "Issue tracker web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="shortcut icon" href="./bug.svg" type="image/x-icon" />
      </head>
      <body>
        <AuthProvider>
          <Theme appearance="light" accentColor="purple">
            <Navbar />
            <main className="p-5">
              <Container>{children}</Container>
            </main>
            {/* <ThemePanel /> */}
          </Theme>
        </AuthProvider>
      </body>
    </html>
  );
}
