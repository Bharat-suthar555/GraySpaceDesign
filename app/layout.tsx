import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gray Space Design | Blueprint To Built Reality",
  description:
    "Industrial luxury interiors, exterior concepts, 2D/3D visualization, and turnkey construction led by Lalit Suthar.",
  openGraph: {
    title: "Gray Space Design",
    description:
      "Architecture from blueprint to built reality by Lalit Suthar."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
