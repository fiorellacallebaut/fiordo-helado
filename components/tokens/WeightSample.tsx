import type { WeightToken } from "@/app/tokens/tokens";

export default function WeightSample({ weightToken }: { weightToken: WeightToken }) {
  const { token, style, variant, weight, className } = weightToken;
  return (
    <div className="flex flex-col gap-8 rounded-md border border-border bg-surface-muted p-16">
      <p className="text-caption text-text-muted">
        <code>--{token}</code> · {weight}
      </p>
      <p className={className}>
        {style} {variant} · Helado artesanal frente al fiordo
      </p>
    </div>
  );
}
