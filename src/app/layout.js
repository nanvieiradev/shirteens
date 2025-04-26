import "./globals.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata = {
  title: "Shirteens",
  description:
    "Uma loja virtual de camisetas e acessórios criada para oferecer uma experiência de compra moderna, rápida e intuitiva.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <Header />
        <main className="flex-1 gradient-primary">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
