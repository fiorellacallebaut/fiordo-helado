import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-title" className="flex min-h-dvh items-center text-on-primary">
      <div className="mx-auto flex w-full max-w-content-max-width flex-col items-center gap-24 px-page-padding text-center">
        <h1 id="hero-title" className="font-heading text-display">
          Fiordo helado
        </h1>
        <p className="font-body text-body-lg">Un montón de sabores</p>
        <Button href="/tokens">Ver tokens</Button>
      </div>
    </section>
  );
}
