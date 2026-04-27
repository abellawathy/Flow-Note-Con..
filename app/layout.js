import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        
        <Navbar />

        <main style={{ flex: 1 }}>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}