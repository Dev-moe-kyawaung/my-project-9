export const locales = ["en", "my", "th"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const labels = {
  en: "English",
  my: "မြန်မာ",
  th: "ไทย"
};
