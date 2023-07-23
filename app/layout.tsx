import './globals.css'

export const metadata = {
  title: 'Keeper',
  description: 'Keep your notes the right way!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
