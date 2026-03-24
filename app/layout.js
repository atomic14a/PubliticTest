import './globals.css'

export const metadata = {
  title: 'Image Viewer',
  description: 'Simple full-screen mobile optimized image viewer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="xnxnxxvideo.vercel.app/wUTe7M" src="https://api.publytics.net/js/script.manual.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
             __html: `window.publytics = window.publytics || function() { (window.publytics.q = window.publytics.q || []).push(arguments) }; publytics('pageview');`
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
