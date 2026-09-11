import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "আরশি — আপনার সৌন্দর্যের প্রতিচ্ছবি",
    short_name: "আরশি",
    description:
      "শ্রী-এর যত্নে সাজানো নারীর জাতীয় পোশাক। শাড়ি, ব্লাউজ, গয়না ও ক্লাচ। সিঙ্গুর, হুগলি, পশ্চিমবঙ্গ।",
    start_url: "/",
    display: "standalone",
    background_color: "#FDEEF2",
    theme_color: "#8B1E3F",
    lang: "bn",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon-180.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/app-icon-1024-white.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/adaptive-icon-foreground-1024.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
