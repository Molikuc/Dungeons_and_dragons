import "./globals.css";

export const metadata = {
  title: "Dungeons & Dragons",
  description: "A D&D skill tree for Maillard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
