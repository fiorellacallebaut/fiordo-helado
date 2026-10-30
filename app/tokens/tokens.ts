// Inventario de tokens para la página /tokens. Refleja app/globals.css.

import { contrastRatio } from "@/lib/contrast";

export type Step = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export type ColorScale = {
  name: string;
  baseStep: Step;
  steps: { step: Step; hex: string }[];
};

const STEPS: Step[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

const scale = (name: string, baseStep: Step, hexes: string[]): ColorScale => ({
  name,
  baseStep,
  steps: STEPS.map((step, i) => ({ step, hex: hexes[i] })),
});

export const colorScales: ColorScale[] = [
  scale("lemon", 100, ["#FAFFE3", "#F5FFC6", "#E1EEA0", "#CAD689", "#ACB76C", "#8F9A4F", "#737D32", "#596123", "#40461A", "#292D10"]),
  scale("sky", 200, ["#EFF8FE", "#DBF0FE", "#B4E1FF", "#8FCCF4", "#73AFD6", "#5793B9", "#3C789D", "#215E81", "#18445D", "#0F2C3D"]),
  scale("pink", 300, ["#FEF4FA", "#FEE7F6", "#FECEED", "#FFACE4", "#EE81CE", "#CF64B0", "#AF4893", "#912A77", "#6C1958", "#461039"]),
  scale("lavender", 400, ["#F7F6FC", "#EEEAF8", "#DCD5F3", "#C8BAED", "#AE96E6", "#9673DC", "#7C57BF", "#633DA2", "#482C76", "#2E1C4E"]),
  scale("cocoa", 800, ["#F8F6F6", "#F1ECEC", "#E3D9D9", "#D3C1C0", "#C0A2A1", "#AF8282", "#946969", "#765252", "#593C3C", "#392525"]),
];

export const stateColors = [
  { name: "success-100", hex: "#DDF5E3" },
  { name: "success-700", hex: "#1E6B3C" },
  { name: "error-100", hex: "#FDE3E1" },
  { name: "error-700", hex: "#B3261E" },
];

const primitiveHex: Record<string, string> = Object.fromEntries([
  ...colorScales.flatMap((s) => s.steps.map(({ step, hex }) => [`${s.name}-${step}`, hex])),
  ...stateColors.map(({ name, hex }) => [name, hex]),
]);

export type SemanticColor = { name: string; primitive: string; hex: string };

const semantic = (name: string, primitive: string): SemanticColor => ({
  name,
  primitive,
  hex: primitiveHex[primitive],
});

export const semanticColors: SemanticColor[] = [
  semantic("primary", "pink-300"),
  semantic("primary-hover", "pink-400"),
  semantic("on-primary", "cocoa-900"),
  semantic("secondary", "sky-200"),
  semantic("on-secondary", "cocoa-800"),
  semantic("accent", "lavender-400"),
  semantic("on-accent", "cocoa-900"),
  semantic("surface", "lemon-50"),
  semantic("surface-muted", "lemon-100"),
  semantic("surface-inverse", "cocoa-800"),
  semantic("on-inverse", "lemon-50"),
  semantic("text", "cocoa-800"),
  semantic("text-muted", "cocoa-700"),
  semantic("border", "cocoa-200"),
  semantic("border-strong", "cocoa-500"),
  semantic("success", "success-700"),
  semantic("success-surface", "success-100"),
  semantic("error", "error-700"),
  semantic("error-surface", "error-100"),
];

// Combinaciones texto/fondo que va a usar la web. `minRatio` es el mínimo AA que corresponde.
export type ColorPair = { fg: string; bg: string; use: string; minRatio: number };

export const colorPairs: ColorPair[] = [
  { fg: "on-primary", bg: "primary", use: "Botón primario", minRatio: 4.5 },
  { fg: "on-primary", bg: "primary-hover", use: "Botón primario (hover)", minRatio: 4.5 },
  { fg: "on-secondary", bg: "secondary", use: "Botón secundario", minRatio: 4.5 },
  { fg: "on-accent", bg: "accent", use: "Badge / acento", minRatio: 4.5 },
  { fg: "text", bg: "surface", use: "Texto general", minRatio: 4.5 },
  { fg: "text", bg: "surface-muted", use: "Texto en bloque alternado", minRatio: 4.5 },
  { fg: "text-muted", bg: "surface", use: "Texto secundario", minRatio: 4.5 },
  { fg: "text-muted", bg: "surface-muted", use: "Texto secundario en bloque alternado", minRatio: 4.5 },
  { fg: "on-inverse", bg: "surface-inverse", use: "Footer", minRatio: 4.5 },
  { fg: "success", bg: "success-surface", use: "Mensaje de éxito", minRatio: 4.5 },
  { fg: "error", bg: "error-surface", use: "Mensaje de error", minRatio: 4.5 },
  { fg: "error", bg: "surface", use: "Error de formulario", minRatio: 4.5 },
  { fg: "border-strong", bg: "surface", use: "Borde de input (no texto)", minRatio: 3 },
];

export const semanticHex = (name: string) =>
  semanticColors.find((c) => c.name === name)?.hex ?? "";

// Un fondo es "oscuro" si contrasta más con on-inverse que con text.
export const isDarkBackground = (hex: string) =>
  contrastRatio(hex, semanticHex("on-inverse")) > contrastRatio(hex, semanticHex("text"));

export type TypeStyle = {
  name: string;
  className: string;
  family: string;
  mobile: string;
  desktop: string;
  weight: number;
  lineHeight: string;
};

// className va escrito completo para que Tailwind lo detecte.
export const typeStyles: TypeStyle[] = [
  { name: "display", className: "font-heading text-display", family: "Parkinsans", mobile: "40px", desktop: "64px", weight: 700, lineHeight: "1.05" },
  { name: "h1", className: "font-heading text-h1", family: "Parkinsans", mobile: "32px", desktop: "48px", weight: 700, lineHeight: "1.1" },
  { name: "h2", className: "font-heading text-h2", family: "Parkinsans", mobile: "24px", desktop: "32px", weight: 600, lineHeight: "1.2" },
  { name: "body-lg", className: "font-body text-body-lg", family: "DM Sans", mobile: "18px", desktop: "20px", weight: 400, lineHeight: "1.5" },
  { name: "body", className: "font-body text-body", family: "DM Sans", mobile: "16px", desktop: "16px", weight: 400, lineHeight: "1.5" },
  { name: "caption", className: "font-body text-caption", family: "DM Sans", mobile: "13px", desktop: "14px", weight: 500, lineHeight: "1.4" },
];

export type WeightToken = {
  token: string;
  style: string;
  variant: "regular" | "medium" | "light";
  weight: number;
  className: string;
};

// Variantes de peso de body y body-lg. Ningún utility de Tailwind las lee solo:
// se aplican con font-(weight:--token). className va escrito completo para que Tailwind lo detecte.
export const weightTokens: WeightToken[] = [
  { token: "text-body-lg--font-weight-regular", style: "body-lg", variant: "regular", weight: 400, className: "font-body text-body-lg font-(weight:--text-body-lg--font-weight-regular)" },
  { token: "text-body-lg--font-weight-medium", style: "body-lg", variant: "medium", weight: 500, className: "font-body text-body-lg font-(weight:--text-body-lg--font-weight-medium)" },
  { token: "text-body-lg--font-weight-light", style: "body-lg", variant: "light", weight: 300, className: "font-body text-body-lg font-(weight:--text-body-lg--font-weight-light)" },
  { token: "text-body--font-weight-regular", style: "body", variant: "regular", weight: 400, className: "font-body text-body font-(weight:--text-body--font-weight-regular)" },
  { token: "text-body--font-weight-medium", style: "body", variant: "medium", weight: 500, className: "font-body text-body font-(weight:--text-body--font-weight-medium)" },
  { token: "text-body--font-weight-light", style: "body", variant: "light", weight: 300, className: "font-body text-body font-(weight:--text-body--font-weight-light)" },
];

export const spacing = [
  { name: "spacing-4", value: "4px" },
  { name: "spacing-8", value: "8px" },
  { name: "spacing-16", value: "16px" },
  { name: "spacing-24", value: "24px" },
  { name: "spacing-48", value: "48px" },
];

export const radii = [
  { name: "radius-md", value: "8px" },
  { name: "radius-full", value: "9999px" },
];
