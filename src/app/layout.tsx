// src/app/layout.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my personal portfolio website.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
