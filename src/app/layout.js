
import './globals.css'



export const metadata = {
  title: 'Joseph Gateru Kimani',
  description: 'Welcome to my World',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
