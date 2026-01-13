import "@/app/globals.css";
import type { AppProps } from "next/app";
import Header from '@/widgets/header/ui/header';
import Footer from '@/widgets/footer/ui/footer';
import Nav from '@/widgets/nav/ui/nav';


export default function RootLayout({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="flex-1 flex">
        <Nav />
        <div className="content w-full">
            <Component {...pageProps} />
        </div>
      </main>
      <Footer/>
    </div>
  );
}
