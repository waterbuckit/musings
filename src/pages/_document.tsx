import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html className="h-full antialiased" lang="en">
      <Head />
      <body className="flex min-h-full flex-col bg-gray-950">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document;