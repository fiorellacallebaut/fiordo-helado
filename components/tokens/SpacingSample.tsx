type SpacingSampleProps = { name: string; value: string };

export default function SpacingSample({ name, value }: SpacingSampleProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-caption">
        <code className="font-semibold">{name}</code> <span className="text-text-muted">· {value}</span>
      </p>
      <div className="h-16 rounded-md bg-accent" style={{ width: `var(--${name})` }} />
    </div>
  );
}
