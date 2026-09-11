import Image from "next/image";
import { FacebookCta } from "@/app/components/FacebookCta";
import { FacebookIcon } from "@/app/components/Icons";
import { OrnateDivider } from "@/app/components/OrnateDivider";
import { BYLINE, SITE_NAME, TAGLINE } from "@/app/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-gold/40 bg-gradient-to-b from-blush-soft to-blush px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl text-center">
        <Image
          src="/images/logo.png"
          alt="আরশি"
          width={64}
          height={64}
          className="mx-auto h-16 w-16 rounded-full ring-1 ring-gold/80"
        />
        <p className="mt-3 font-display text-3xl text-maroon">{SITE_NAME}</p>
        <p className="mt-1 text-sm tracking-[0.3em] text-gold">· {BYLINE} ·</p>
        <p className="mt-2 text-ink/75">{TAGLINE}</p>
        <div className="mt-5 flex justify-center">
          <FacebookCta
            ariaLabel="ফেসবুকে আরশি"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold bg-white text-maroon transition hover:bg-maroon hover:text-white"
          >
            <FacebookIcon className="h-5 w-5" />
          </FacebookCta>
        </div>
        <OrnateDivider className="mt-8" />
        <p className="mt-4 text-sm text-ink/70">
          © ২০২৬ {SITE_NAME} · {BYLINE}
        </p>
        <p className="mt-1 text-sm text-maroon">ভালোবাসা দিয়ে তৈরি 💕</p>
      </div>
    </footer>
  );
}
