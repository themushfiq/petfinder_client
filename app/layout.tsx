import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Pet Finder",
  description: "Discover your perfect companion with Pet Finder."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-black h-screen`}>
        <div className="h-24">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
