export type ContrastRow = {
  fg: string;
  bg: string;
  use: string;
  ratio: number;
  minRatio: number;
};

export default function ContrastTable({ rows }: { rows: ContrastRow[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-body">
        <thead className="text-caption text-text-muted">
          <tr className="border-b border-border">
            <th scope="col" className="py-8 pr-16">Muestra</th>
            <th scope="col" className="py-8 pr-16">Texto / fondo</th>
            <th scope="col" className="py-8 pr-16">Uso</th>
            <th scope="col" className="py-8 pr-16">Contraste</th>
            <th scope="col" className="py-8">AA</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ fg, bg, use, ratio, minRatio }) => {
            const passes = ratio >= minRatio;
            return (
              <tr key={`${fg}-${bg}`} className="border-b border-border">
                <td className="py-8 pr-16">
                  <span
                    className="inline-flex rounded-md border-2 border-transparent px-16 py-4 font-semibold"
                    style={{
                      backgroundColor: `var(--color-${bg})`,
                      color: `var(--color-${fg})`,
                      borderColor: minRatio === 3 ? `var(--color-${fg})` : undefined,
                    }}
                  >
                    Aa
                  </span>
                </td>
                <td className="py-8 pr-16 whitespace-nowrap">
                  <code>{fg}</code> / <code>{bg}</code>
                </td>
                <td className="py-8 pr-16">{use}</td>
                <td className="py-8 pr-16 whitespace-nowrap">
                  {ratio.toFixed(2)} : 1 <span className="text-caption text-text-muted">(mín. {minRatio})</span>
                </td>
                <td className={`py-8 font-semibold ${passes ? "text-success" : "text-error"}`}>
                  {passes ? "Pasa" : "Falla"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
