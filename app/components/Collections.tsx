import Image from "next/image";
import { FacebookCta } from "@/app/components/FacebookCta";
import { OrnateDivider } from "@/app/components/OrnateDivider";
import { Reveal } from "@/app/components/Reveal";

const categories = [
  {
    title: "শাড়ি",
    blurb: "ঐতিহ্যের রঙে মোড়ানো, উৎসব থেকে নিত্যদিন",
    image: "/images/saree.png",
    alt: "শাড়ির কালেকশন",
  },
  {
    title: "ব্লাউজ",
    blurb: "নিখুঁত ফিট, সুন্দর কারুকাজ",
    image: "/images/blouse.png",
    alt: "ব্লাউজের কালেকশন",
  },
  {
    title: "গয়না",
    blurb: "ঝুমকা, চুড়ি আর ক্ষণিকের ঝলমলে ছোঁয়া",
    image: "/images/jewelry.png",
    alt: "গয়নার কালেকশন",
  },
  {
    title: "ক্লাচ",
    blurb: "হাতে তুলে নেওয়ার শেষ সাজ",
    image: "/images/clutch.png",
    alt: "ক্লাচের কালেকশন",
  },
];

export function Collections() {
  return (
    <section
      id="collections"
      className="bg-gradient-to-b from-blush-soft to-blush px-4 py-16 sm:px-6 sm:py-20"
    >
      <OrnateDivider className="mb-10" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center font-display text-4xl text-maroon sm:text-5xl">
            আমাদের কালেকশন
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-ink/80">
            শাড়ি থেকে গয়না — আপনার সাজের প্রতিটি ভাঁজ, এক জায়গায়
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {categories.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <FacebookCta
                className="group block h-full overflow-hidden rounded-2xl border border-gold/50 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_0_0_1px_#C9A876,0_18px_40px_-20px_rgba(139,30,63,0.45)]"
                ariaLabel={`${item.title} দেখতে ফেসবুকে যান`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-blush-soft">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-3 text-center sm:p-4">
                  <h3 className="font-display text-2xl text-maroon">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-ink/75">
                    {item.blurb}
                  </p>
                </div>
              </FacebookCta>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
