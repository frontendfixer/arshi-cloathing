import Image from "next/image";
import { FacebookCta } from "@/app/components/FacebookCta";
import { OrnateDivider } from "@/app/components/OrnateDivider";
import { Reveal } from "@/app/components/Reveal";

const photos = [
  { src: "/images/hero-banner.png", alt: "আরশির ব্যানার চিত্র — শাড়ি ও আয়না" },
  { src: "/images/logo.png", alt: "আরশির লোগো চিত্র" },
  { src: "/images/saree.png", alt: "শাড়ির এক ঝলক" },
  { src: "/images/blouse.png", alt: "কাপড়ের বুনন ও রং" },
  { src: "/images/jewelry.png", alt: "গয়নার সাজ" },
  { src: "/images/clutch.png", alt: "ক্লাচের সাজ" },
];

export function Gallery() {
  return (
    <section className="bg-gradient-to-b from-blush to-blush-soft px-4 py-16 sm:px-6 sm:py-20">
      <OrnateDivider className="mb-10" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center font-display text-4xl text-maroon sm:text-5xl">
            এক ঝলক আরশি
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-ink/80">
            আমাদের সাম্প্রতিক সাজ — ফেসবুকে আরও দেখুন
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {photos.map((photo, index) => (
            <Reveal key={photo.src} delay={index * 0.05}>
              <FacebookCta
                className="group relative block aspect-square overflow-hidden rounded-xl border border-gold/40 bg-white"
                ariaLabel="ফেসবুকে গ্যালারি দেখুন"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              </FacebookCta>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
