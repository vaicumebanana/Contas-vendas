import './styles/globals.css'

export const metadata = {
  title: 'Digital Accounts Marketplace',
  description: 'Premium marketplace for digital gaming accounts'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-b from-white/40 to-white/20">
          <main className="max-w-7xl mx-auto px-4">{children}</main>
        </div>
      </body>
    </html>
  )
}
