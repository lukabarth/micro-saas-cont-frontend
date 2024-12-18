import "./globals.css";

import { NavBar } from '../components/navbar';
import { ThemeController } from '../components/theme-controller';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`antialiased`}
      >
        <NavBar />

        <ThemeController />

        {children}
      </body>
    </html>
  );
}
