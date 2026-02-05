import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wallaby Web",
  description: "Turborepo + Next.js + Vitest scaffold",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
