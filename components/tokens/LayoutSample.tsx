type LayoutSampleProps = { name: string; value: string };

export default function LayoutSample({ name, value }: LayoutSampleProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-caption">
        <code className="font-semibold">{name}</code> <span className="text-text-muted">· {value}</span>
      </p>
      <div className="h-16 rounded-md bg-accent" style={{ width: `min(100%, var(--${name}))` }} />
    </div>
  );
}
