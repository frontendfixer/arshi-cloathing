"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FacebookCta, ctaPrimaryClass } from "@/app/components/FacebookCta";
import { CloseIcon, FacebookIcon, MenuIcon } from "@/app/components/Icons";
import { BYLINE, SITE_NAME } from "@/app/lib/constants";

const links = [
  { href: "#home", label: "হোম" },
  { href: "#about", label: "আমাদের কথা" },
  { href: "#collections", label: "কালেকশন" },
  { href: "#contact", label: "যোগাযোগ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gold/40 bg-white/92 shadow-[0_8px_30px_-18px_rgba(139,30,63,0.35)] backdrop-blur-md"
          : "border-b border-transparent bg-blush/40 backdrop-blur-[2px]"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <a href="#home" className="flex min-w-0 shrink items-center gap-2.5">
          <Image
            src="/images/logo.png"
            alt="আরশি লোগো"
            width={44}
            height={44}
            className="h-10 w-10 rounded-full ring-1 ring-gold/80"
            priority
          />
          <span className="leading-tight">
            <span className="block font-display text-2xl text-maroon">
              {SITE_NAME}
            </span>
            <span className="block text-[0.65rem] tracking-[0.28em] text-gold">
              · {BYLINE} ·
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 text-[0.95rem] font-medium text-ink md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition hover:text-maroon"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <FacebookCta
            className={`${ctaPrimaryClass} !hidden px-4 py-2.5 text-sm md:!inline-flex`}
          >
            <FacebookIcon className="h-4 w-4" />
            ফেসবুকে মেসেজ করুন
          </FacebookCta>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/70 bg-white text-maroon md:hidden"
            aria-expanded={open}
            aria-label={open ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <CloseIcon className="h-5 w-5" />
            ) : (
              <MenuIcon className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-gold/30 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-blush-soft"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <FacebookCta
            className={`${ctaPrimaryClass} mt-3 w-full`}
          >
            <FacebookIcon className="h-4 w-4" />
            ফেসবুকে মেসেজ করুন
          </FacebookCta>
        </div>
      ) : null}
    </header>
  );
}
