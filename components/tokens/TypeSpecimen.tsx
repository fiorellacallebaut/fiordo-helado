import type { TypeStyle } from "@/app/tokens/tokens";

export default function TypeSpecimen({ style }: { style: TypeStyle }) {
  return (
    <div className="flex flex-col gap-8 border-b border-border pb-24">
      <p className="text-caption text-text-muted">
        <code>text-{style.name}</code> · {style.family} {style.weight} · {style.mobile} → {style.desktop} ·
        line-height {style.lineHeight}
      </p>
      <p className={style.className}>Helado artesanal frente al fiordo</p>
    </div>
  );
}
