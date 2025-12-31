import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      "tailwindcss/enforces-shorthand": "off",
      "tailwindcss/classnames-order": "off",
      "tailwindcss/no-custom-classname": "off",
      "tailwindcss/migration-from-tailwind-2": "off",
    },
  },
];
