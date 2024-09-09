import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider  from "./components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heritage Day Quest",
  description: "Heritage Day Quest - Quiz App",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </AuthProvider>
  );
}
