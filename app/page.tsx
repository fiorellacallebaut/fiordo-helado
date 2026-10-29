import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-16 bg-surface px-16 py-48 text-center">
      <h1 className="font-heading text-display">Fiordo Helado</h1>
      <p className="font-body text-body text-text-muted">Sitio en construcción</p>
      <Link
        href="/tokens"
        className="rounded-md font-body text-body font-semibold text-text underline underline-offset-4 hover:text-text-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-text"
      >
        Ver tokens
      </Link>
    </main>
  );
}
