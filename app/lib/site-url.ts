import { headers } from "next/headers";

export async function resolveSiteUrl(): Promise<URL> {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return new URL(process.env.NEXT_PUBLIC_SITE_URL);
  }

  if (process.env.RAILWAY_PUBLIC_DOMAIN) {
    return new URL(`https://${process.env.RAILWAY_PUBLIC_DOMAIN}`);
  }

  try {
    const headerStore = await headers();
    const host =
      headerStore.get("x-forwarded-host") ?? headerStore.get("host");

    if (host && !host.startsWith("localhost") && !host.startsWith("127.")) {
      const proto = headerStore.get("x-forwarded-proto") ?? "https";
      return new URL(`${proto}://${host}`);
    }
  } catch {
    // headers() is unavailable during prerender
  }

  return new URL("http://localhost:3000");
}
