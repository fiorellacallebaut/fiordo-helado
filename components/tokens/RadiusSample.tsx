type RadiusSampleProps = { name: string; value: string };

export default function RadiusSample({ name, value }: RadiusSampleProps) {
  return (
    <div className="flex flex-col gap-8">
      <div
        className="h-48 border-2 border-border-strong bg-secondary"
        style={{ borderRadius: `var(--${name})` }}
      />
      <p className="flex flex-col text-caption">
        <code className="font-semibold">{name}</code>
        <span className="text-text-muted">{value}</span>
      </p>
    </div>
  );
}
