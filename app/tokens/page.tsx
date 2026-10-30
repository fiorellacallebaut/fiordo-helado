import type { Metadata } from "next";
import ContrastTable from "@/components/tokens/ContrastTable";
import RadiusSample from "@/components/tokens/RadiusSample";
import SpacingSample from "@/components/tokens/SpacingSample";
import Swatch from "@/components/tokens/Swatch";
import TokenSection from "@/components/tokens/TokenSection";
import TypeSpecimen from "@/components/tokens/TypeSpecimen";
import WeightSample from "@/components/tokens/WeightSample";
import { contrastRatio } from "@/lib/contrast";
import {
  colorPairs,
  colorScales,
  isDarkBackground,
  radii,
  semanticColors,
  semanticHex,
  spacing,
  stateColors,
  typeStyles,
  weightTokens,
} from "./tokens";

export const metadata: Metadata = {
  title: "Tokens · Fiordo Helado",
};

const swatchGrid = "grid grid-cols-2 gap-16 sm:grid-cols-5";

export default function TokensPage() {
  const contrastRows = colorPairs.map((pair) => ({
    ...pair,
    ratio: contrastRatio(semanticHex(pair.fg), semanticHex(pair.bg)),
  }));

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-48 px-16 py-48 sm:px-24">
      <header className="flex flex-col gap-16">
        <p className="text-caption text-text-muted">Fiordo Helado · design system</p>
        <h1 className="font-heading text-display">Tokens</h1>
        <p className="text-body-lg text-text-muted">
          Primitivas y semánticas definidas en <code>app/globals.css</code>. Los componentes usan
          solo las semánticas.
        </p>
      </header>

      <TokenSection
        id="primitivas"
        title="Primitivas de color"
        description="Escalas de 50 (más claro) a 900 (más oscuro). La marca «base» indica el hex original de la paleta."
      >
        {colorScales.map((scale) => (
          <div key={scale.name} className="flex flex-col gap-16">
            <h3 className="font-heading text-body-lg font-semibold">{scale.name}</h3>
            <div className={swatchGrid}>
              {scale.steps.map(({ step, hex }) => (
                <Swatch
                  key={step}
                  token={`${scale.name}-${step}`}
                  label={`${scale.name}-${step}`}
                  hex={hex}
                  isBase={step === scale.baseStep}
                  isDark={isDarkBackground(hex)}
                />
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col gap-16">
          <h3 className="font-heading text-body-lg font-semibold">Estados</h3>
          <div className={swatchGrid}>
            {stateColors.map(({ name, hex }) => (
              <Swatch key={name} token={name} label={name} hex={hex} isDark={isDarkBackground(hex)} />
            ))}
          </div>
        </div>
      </TokenSection>

      <TokenSection
        id="semanticas"
        title="Semánticas de color"
        description="Cada token semántico apunta a una primitiva."
      >
        <div className={swatchGrid}>
          {semanticColors.map(({ name, primitive, hex }) => (
            <Swatch
              key={name}
              token={name}
              label={`color-${name}`}
              hex={hex}
              detail={`→ ${primitive}`}
              isDark={isDarkBackground(hex)}
            />
          ))}
        </div>
      </TokenSection>

      <TokenSection
        id="contraste"
        title="Contraste"
        description="Combinaciones texto/fondo que usa la web. Texto: mínimo 4.5:1. Bordes de controles: mínimo 3:1."
      >
        <ContrastTable rows={contrastRows} />
      </TokenSection>

      <TokenSection
        id="tipografia"
        title="Tipografía"
        description="Parkinsans para títulos y DM Sans para texto. Los tamaños escalan entre 375px y 1280px de ancho."
      >
        <div className="flex flex-col gap-24">
          {typeStyles.map((style) => (
            <TypeSpecimen key={style.name} style={style} />
          ))}
        </div>
      </TokenSection>

      <TokenSection
        id="pesos"
        title="Pesos de body y body-lg"
        description="Variantes regular (400), medium (500) y light (300). Se aplican con font-(weight:--token) junto a text-body o text-body-lg."
      >
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-3">
          {weightTokens.map((weightToken) => (
            <WeightSample key={weightToken.token} weightToken={weightToken} />
          ))}
        </div>
      </TokenSection>

      <TokenSection id="espaciado" title="Espaciado">
        <div className="flex flex-col gap-16">
          {spacing.map(({ name, value }) => (
            <SpacingSample key={name} name={name} value={value} />
          ))}
        </div>
      </TokenSection>

      <TokenSection id="radios" title="Radios">
        <div className={swatchGrid}>
          {radii.map(({ name, value }) => (
            <RadiusSample key={name} name={name} value={value} />
          ))}
        </div>
      </TokenSection>
    </main>
  );
}
