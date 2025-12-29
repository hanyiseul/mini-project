import { routes } from '@/shared/config/routes';
import { useRouter } from 'next/router'; // pages 디렉토리 기준
import "@/app/globals.css";
import Header from '@/widgets/header/ui/header';
import Footer from '@/widgets/footer/ui/footer';
import Nav from '@/widgets/nav/ui/nav';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="min-h-screen flex flex-col justify-between">
          <Header />
          {/* 핵심 */}
          <main className="flex-1 flex">
            <Nav />
            <div className="content">
              {children}  
            </div>
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
