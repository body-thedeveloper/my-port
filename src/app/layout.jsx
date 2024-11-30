// src/app/layout.jsx
import './globals.css'

export const metadata = {
  title: 'João Veríssimo. A motion & interaction designer.',
  description: 'João Veríssimo is a motion & interaction designer with focus on animation and Webflow development. Disclaimer: fluid animations and neat websites inside.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
