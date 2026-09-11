import Image from "next/image";
import { GoldCornerFrame, OrnateDivider } from "@/app/components/OrnateDivider";
import { Reveal } from "@/app/components/Reveal";

export function About() {
  return (
    <section id="about" className="relative bg-white px-4 py-16 sm:px-6 sm:py-20">
      <OrnateDivider className="mb-10" />
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-center font-display text-4xl text-maroon sm:text-5xl">
            আমাদের কথা
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-rose">
            আয়নায় আপনার সৌন্দর্য, আরশিতে তার প্রতিচ্ছবি
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <GoldCornerFrame className="overflow-hidden">
            <div className="grid items-center gap-8 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-5 text-[1.05rem] leading-8 text-ink/90">
                <p>
                  প্রতিটি নারী অনন্য, আর তার পোশাকও তেমনই হওয়া উচিত। 💕 শ্রী-এর
                  যত্নে সাজানো, সেরা ঐতিহ্যবাহী ট্রেন্ড আপনার জন্য 🥻👗
                </p>
                <p>
                  আরশি মানে আয়না — যেখানে আপনি নিজেকে নতুন করে দেখতে পান।
                  সিঙ্গুর থেকে আমরা বেছে বেছে আনি শাড়ি, ব্লাউজ, গয়না আর ক্লাচ,
                  যাতে প্রতিটি উৎসব, প্রতিটি মুহূর্ত হয়ে ওঠে আপনার মতোই অনন্য।
                </p>
                <p className="font-medium text-maroon">
                  ঐতিহ্যের সুতোয় গাঁথা, আধুনিক রুচির ছোঁয়ায় সাজানো।
                </p>
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-gold/60">
                <Image
                  src="/images/hero-banner.png"
                  alt="আরশির শাড়ি, গয়না ও ক্লাচের চিত্র"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            </div>
          </GoldCornerFrame>
        </Reveal>
      </div>
    </section>
  );
}
