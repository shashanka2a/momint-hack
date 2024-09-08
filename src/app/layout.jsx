import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import Header from "./header";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "MoMint",
  description: "MoMint is a NFT marketplace for digital creators.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
