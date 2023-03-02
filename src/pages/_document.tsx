import { Head, Html, Main, NextScript } from 'next/document';

const CustomDocument = () => {
  return (
    <Html>
      <Head />
      <body className="bg-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default CustomDocument;
