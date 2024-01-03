import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ContainerProviders from "@fb-containers/ContainerProviders";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Facebook",
  description: "Generated by create next app to clone the Facebook UI",
  icons: {
    icon: "facebook-logo.png"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ContainerProviders>{children}</ContainerProviders>
      </body>
    </html>
  );
}
