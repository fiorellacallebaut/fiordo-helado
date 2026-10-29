type TokenSectionProps = {
  id: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function TokenSection({ id, title, description, children }: TokenSectionProps) {
  return (
    <section aria-labelledby={id} className="flex flex-col gap-24 border-t border-border pt-48">
      <header className="flex flex-col gap-8">
        <h2 id={id} className="font-heading text-h2">
          {title}
        </h2>
        {description && <p className="text-body text-text-muted">{description}</p>}
      </header>
      {children}
    </section>
  );
}
