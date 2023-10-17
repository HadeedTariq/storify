import { Providers } from "@/utils/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Box } from "@mui/material";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Storify",
  description: "Storify Store of your choice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className="bg-gradient-to-r from-purple-200 via-green-200 to-blue-200"> */}
      <body className="bg-slate-900 text-white">
        <Providers>
          <Box component={"div"}>
            <NavBar />
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
