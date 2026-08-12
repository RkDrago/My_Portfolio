import "./globals.css";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Mern Stack Developer | Portfolio",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ToastContainer/>
        <Analytics />
      </body>
    </html>
  );
}
