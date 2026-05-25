import './globals.css';
import { AuthProvider } from '@/components/providers/AuthProvider';

export const metadata = {
  title: 'Theater Arts Production Suite',
  description: 'Merged theater arts production suite with one login, one dashboard, and feature-first navigation.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
