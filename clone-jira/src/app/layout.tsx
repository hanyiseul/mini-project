import "./globals.css";
import Header from '@/widgets/header/ui/header';
import Footer from '@/widgets/footer/ui/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
