import {
  HeartIcon,
  MirrorIcon,
  SareeIcon,
  SparkleIcon,
} from "@/app/components/Icons";
import { OrnateDivider } from "@/app/components/OrnateDivider";
import { Reveal } from "@/app/components/Reveal";

const features = [
  {
    title: "কিউরেটেড কালেকশন",
    body: "প্রতিটি পোশাক হাতে বেছে নেওয়া — যাতে আপনি পান শুধু সেরাটা।",
    icon: SparkleIcon,
  },
  {
    title: "খাঁটি ঐতিহ্যবাহী পোশাক",
    body: "বাংলার ঐতিহ্য আর ভারতীয় শিল্পের শিকড় থেকে গড়া সাজ।",
    icon: SareeIcon,
  },
  {
    title: "ব্যক্তিগত স্টাইলিং পরামর্শ",
    body: "আপনার অনুষ্ঠান, রং আর রুচি বুঝে পরামর্শ দিই আমরা।",
    icon: MirrorIcon,
  },
  {
    title: "ভালোবাসা দিয়ে তৈরি",
    body: "শ্রী-এর যত্ন আর ভালোবাসা প্রতিটি ভাঁজে, প্রতিটি গয়নায়।",
    icon: HeartIcon,
  },
];

export function WhyUs() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <OrnateDivider className="mb-10" />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-center font-display text-4xl text-maroon sm:text-5xl">
            কেন আরশি
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-ink/80">
            শুধু পোশাক নয় — আপনার সৌন্দর্যকে নতুন করে দেখার একটি আয়না
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-gold/50 bg-blush/60 p-6 text-center shadow-sm">
                <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold bg-white text-maroon">
                  <feature.icon className="h-7 w-7" />
                </span>
                <h3 className="font-display text-2xl text-maroon">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-ink/80">
                  {feature.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
