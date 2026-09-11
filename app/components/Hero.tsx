import Image from "next/image";
import { FacebookCta, ctaPrimaryClass } from "@/app/components/FacebookCta";
import { FacebookIcon } from "@/app/components/Icons";
import { FloralCorner } from "@/app/components/OrnateDivider";
import { Reveal } from "@/app/components/Reveal";
import { BYLINE, SITE_NAME, TAGLINE } from "@/app/lib/constants";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-blush via-blush-soft to-white"
    >
      <FloralCorner className="absolute -left-4 top-8 h-36 w-36" />
      <FloralCorner className="absolute -right-6 bottom-4 h-40 w-40 rotate-180" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-20">
        <Reveal className="order-1 mx-auto w-full max-w-md lg:order-none lg:max-w-none">
          <div className="relative mx-auto aspect-square max-w-[28rem]">
            <div className="absolute inset-[6%] rounded-full border border-gold/80" />
            <div className="absolute inset-[3%] rounded-full border border-maroon/20" />
            <Image
              src="/images/logo.png"
              alt="আয়নার সামনে শাড়ি পরা নারী — আরশির ব্র্যান্ড চিত্র"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 420px"
              className="rounded-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.12} className="text-center lg:text-left">
          <p className="mb-2 text-sm tracking-[0.35em] text-gold">
            · {BYLINE} ·
          </p>
          <h1 className="font-display text-6xl leading-none text-maroon sm:text-7xl lg:text-8xl">
            {SITE_NAME}
          </h1>
          <p className="mt-4 font-display text-xl text-rose sm:text-2xl">
            {TAGLINE}
          </p>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink/85 lg:mx-0">
            প্রতিটি নারী অনন্য, তার পোশাকও তেমনই হওয়া উচিত
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <FacebookCta className={`${ctaPrimaryClass} w-full sm:w-auto`}>
              <FacebookIcon className="h-4 w-4" />
              ফেসবুকে দেখুন
            </FacebookCta>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
