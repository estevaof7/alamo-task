import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from './components/app-sidebar';
import NavBar from './components/nav-bar';
import Providers from '@/providers/query';
// import { BreakPointView } from './components/breakpoint-view';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Alamo task',
  description: 'Generated by create next app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex text-primary`}
      >
        <Providers>
          <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger />
            <main className="mx-auto md:w-3/5 md:px-0 px-3">
              <NavBar />
              {children}
            </main>
            {/* <BreakPointView /> */}
          </SidebarProvider>
        </Providers>
      </body>
    </html>
  );
}
