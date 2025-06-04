import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Load Next.js and TypeScript legacy configs
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Add your custom overrides here
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    rules: {
      "react/no-unescaped-entities": "off", // Disable the specific rule
    },
  },
];

export default eslintConfig;
