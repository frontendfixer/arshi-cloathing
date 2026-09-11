import {
  FacebookCta,
  ctaPrimaryClass,
} from "@/app/components/FacebookCta";
import { FacebookIcon, PinIcon } from "@/app/components/Icons";
import {
  FloralCorner,
  GoldCornerFrame,
  OrnateDivider,
} from "@/app/components/OrnateDivider";
import { Reveal } from "@/app/components/Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20"
    >
      <FloralCorner className="absolute -left-6 bottom-0 h-36 w-36" />
      <FloralCorner className="absolute -right-8 top-8 h-36 w-36 rotate-90" />
      <OrnateDivider className="mb-10" />

      <div className="relative mx-auto max-w-3xl">
        <Reveal>
          <h2 className="text-center font-display text-4xl text-maroon sm:text-5xl">
            আমাদের সঙ্গে থাকুন
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-ink/80">
            আপনার পছন্দের শাড়ি, গয়না বা ক্লাচ দেখতে ফেসবুকে মেসেজ করুন। আমরা
            আছি, আপনার সাজের পাশে।
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <GoldCornerFrame className="px-6 py-10 text-center sm:px-12">
            <div className="flex flex-col items-center">
              <FacebookCta
                className={`${ctaPrimaryClass} w-full max-w-md px-8 py-4 text-lg`}
              >
                <FacebookIcon className="h-5 w-5" />
                ফেসবুকে যোগাযোগ করুন
              </FacebookCta>
              <p className="mt-6 flex items-center justify-center gap-2 text-ink/80">
                <PinIcon className="h-5 w-5 shrink-0 text-gold" />
                সিঙ্গুর, হুগলি, ভদ্রেশ্বর, পশ্চিমবঙ্গ
              </p>
              <p className="mt-2 flex items-center justify-center gap-2 text-sm text-rose">
                <FacebookIcon className="h-4 w-4" />
                Arshi by Shree
              </p>
            </div>
          </GoldCornerFrame>
        </Reveal>
      </div>
    </section>
  );
}
