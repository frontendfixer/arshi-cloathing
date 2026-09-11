import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { resolveSiteUrl } from "@/app/lib/site-url";
import "./globals.css";

const galada = localFont({
  src: "../public/fonts/Galada-Regular.ttf",
  weight: "400",
  variable: "--font-galada",
  display: "swap",
});

const mina = localFont({
  src: [
    {
      path: "../public/fonts/Mina-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Mina-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-mina",
  display: "swap",
});

const title = "আরশি — আপনার সৌন্দর্যের প্রতিচ্ছবি";
const description =
  "আরশি — শ্রী-এর যত্নে সাজানো নারীর জাতীয় পোশাকের প্রতিচ্ছবি। শাড়ি, ব্লাউজ, গয়না ও ক্লাচ। সিঙ্গুর, হুগলি, পশ্চিমবঙ্গ। ফেসবুকে দেখুন আর মেসেজ করুন।";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDEEF2" },
    { media: "(prefers-color-scheme: dark)", color: "#8B1E3F" },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  const metadataBase = await resolveSiteUrl();
  const ogImage = {
    url: "/og.jpg",
    width: 1200,
    height: 630,
    alt: "আরশি — আপনার সৌন্দর্যের প্রতিচ্ছবি",
    type: "image/jpeg",
  };

  return {
    metadataBase,
    applicationName: "আরশি",
    title,
    description,
    keywords: [
      "আরশি",
      "Arshi by Shree",
      "শাড়ি",
      "বাংলা শাড়ি",
      "সিঙ্গুর",
      "হুগলি",
      "ethnic wear",
    ],
    authors: [{ name: "Arshi by Shree" }],
    creator: "Arshi by Shree",
    icons: {
      icon: [
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        {
          url: "/app-icon-1024-white.png",
          sizes: "1024x1024",
          type: "image/png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/app-icon-1024-dark.png",
          sizes: "1024x1024",
          type: "image/png",
          media: "(prefers-color-scheme: dark)",
        },
      ],
      apple: [
        {
          url: "/apple-touch-icon-180.png",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    appleWebApp: {
      capable: true,
      title: "আরশি",
      statusBarStyle: "default",
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title,
      description:
        "প্রতিটি নারী অনন্য, তার পোশাকও তেমনই হওয়া উচিত। শ্রী-এর যত্নে সাজানো ঐতিহ্যবাহী শাড়ি, গয়না ও ক্লাচ।",
      locale: "bn_IN",
      type: "website",
      siteName: "আরশি",
      url: "/",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description:
        "শ্রী-এর যত্নে সাজানো নারীর জাতীয় পোশাক। সিঙ্গুর, হুগলি, পশ্চিমবঙ্গ।",
      images: [ogImage],
    },
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      className={`${galada.variable} ${mina.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-blush font-body text-ink">{children}</body>
    </html>
  );
}
