import "./globals.css";

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Mainland Motor",
  description: "Purchase Your Car",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
