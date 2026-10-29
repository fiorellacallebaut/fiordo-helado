type SwatchProps = {
  token: string;
  label: string;
  hex: string;
  detail?: string;
  isBase?: boolean;
  /** true si el fondo es oscuro y necesita texto claro */
  isDark?: boolean;
};

export default function Swatch({ token, label, hex, detail, isBase = false, isDark = false }: SwatchProps) {
  return (
    <div className="flex flex-col gap-8">
      <div
        className={`flex h-48 items-start justify-end rounded-md border border-border p-4 ${
          isDark ? "text-on-inverse" : "text-text"
        }`}
        style={{ backgroundColor: `var(--color-${token})` }}
      >
        {isBase && (
          <span className="rounded-full border border-current px-8 text-caption">base</span>
        )}
      </div>
      <dl className="flex flex-col text-caption">
        <dt className="font-semibold">{label}</dt>
        <dd className="text-text-muted">{hex}</dd>
        {detail && <dd className="text-text-muted">{detail}</dd>}
      </dl>
    </div>
  );
}
