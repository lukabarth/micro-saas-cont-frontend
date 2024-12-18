import "./globals.css";

import { NavBar } from '../components/navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <NavBar />

        {children}
      </body>
    </html>
  );
}
