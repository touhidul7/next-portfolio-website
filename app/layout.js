import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Next Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex gap-10 p-10 min-h-screen lg:w-[85%] m-auto">
        <Sidebar />
          <div className="w-[75%] bg-[#1E1E1F] rounded-xl border-[1px] border-[#282829] relative">
            <div className=" w-full ">
              <Navbar /> 
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};
