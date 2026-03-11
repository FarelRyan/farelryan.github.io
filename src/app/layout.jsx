import './globals.css';

export const metadata = {
  title: 'Farel Ryan Laksmana - Data Analyst',
  description: 'Portfolio website of Farel Ryan Laksmana, a Data Analyst specializing in full stack data analytics.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="font-body leading-relaxed overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
