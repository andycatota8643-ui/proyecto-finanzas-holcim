import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Holcim Ecuador - Proyecto financiero', description: 'Dashboard de inversión solar y almacenamiento' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="es"><body>{children}</body></html>;
}
