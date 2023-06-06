export const metadata = {
  title: 'Tic tac toe game',
  description: 'Tic tac toe game',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
