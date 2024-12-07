import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Meyene Electrical Company ",
    template: "%s - Electrical Services Installation & Repair",
  },
  description: "One of the best Electrical Company in Nigeria, ",
  keywords: "Electrical Company, Solar Installation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${epilogue.className}  ${
          process.env.NODE_ENV == "development" ? "debug-screens" : ""
        } antialiased`}
      >
        <Navbar />
        <hr />
        {children}
        <hr />
        <Footer />
      </body>
    </html>
  );
}
