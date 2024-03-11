module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "testing-library"],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      alias: {
        map: [
          ["@/components", "./src/components/"],
          ["@/services", "./src/services/"],
          ["@/context", "./src/context/"],
          ["@/utils", "./src/utils/"],
        ],
        extensions: [".js", ".jsx"],
      },
    },
  },
  rules: {
    // NextJs specific fix: suppress errors for missing 'import React' in files for nextjs
    "react/react-in-jsx-scope": "off",
    // ignore prop types valdation,
    "react/prop-types": "off",
    // NextJs specific fix: allow jsx syntax in js files,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }], // should add ".ts" if typescript project
    // error out formatting not matching prettier rule
    "prettier/prettier": ["error", { singleQuote: true }],
  },
};
