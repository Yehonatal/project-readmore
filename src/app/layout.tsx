import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Readmore",
  description: "Personal book recommendation system",
  icons: [{ rel: "icon", url: "/favicon.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <div className="">
          <div className="absolute bottom-0 left-0 right-0 top-0 z-[-1] bg-[radial-gradient(circle_500px_at_50%_200px,#B8D7FFE5,transparent)]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#85ACDF6C,transparent_1px),linear-gradient(to_bottom,#93B9EB62,transparent_1px)] bg-[size:80px_60px] [mask-image:radial-gradient(ellipse_80%_90%_at_30%_0%,#000_50%,transparent_110%)]">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
