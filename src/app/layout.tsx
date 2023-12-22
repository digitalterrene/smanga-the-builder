import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/native/Navbar";
import ScrollToTop from "@/components/native/ScrollToTop";
import Footer from "@/components/native/Footer";
interface Metadata {
  title: string;
  description: string;
  keywords: string[];
  image?: string;
  url: string;
  siteName?: string;
  type?: string;
  locale?: string;
  author?: string;
  twitterHandle?: string;
  social: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smanga the Builder - Quality Construction Services",
  description: `Explore my range of construction services designed to 
                bring your vision to life. From building and drywalling to ceilings and tiling, 
                i am committed to providing the best quality service. Experience craftsmanship,
                attention to detail, and a dedication to excellence with Smanga the Builder.`,
  keywords: [
    "construction services",
    "quality craftsmanship",
    "building",
    "drywalling",
    "ceilings",
    "tiling",
    "roofing",
    "painting",
    "builders in Johannesburg,Gauteng",
    "tilers in Johannesburg,Gauteng",
    "painters in Johannesburg,Gauteng",
  ],
  image:
    "https://smanga-the-builder.vercel.app/_next/static/media/smanga.d036c194.png",
  url: "https://smanga-the-builder.vercel.app/",
  siteName: "Smanga the Builder",
  type: "website",
  locale: "en_US",
  author: "Smanga the Builder",
  twitterHandle: "@yourTwitterHandle",
  social: {
    twitter: "https://twitter.com/yourTwitterHandle",
    facebook: "https://www.facebook.com/yourFacebookPage",
    instagram: "https://www.instagram.com/yourInstagramPage",
    linkedin: "https://www.linkedin.com/in/yourLinkedinProfile",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />{" "}
        <div className=" -mt-16">
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
