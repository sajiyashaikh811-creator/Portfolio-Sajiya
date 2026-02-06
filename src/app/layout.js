import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Sajiya Shaikh - Web Developer & UI/UX Designer",
  description: "Passionate Web Developer and UI/UX Designer creating beautiful digital experiences. Currently pursuing AIML at Nexcore Institute of Technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-inter antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
