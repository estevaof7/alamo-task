import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended'
  ),
  {
    rules: {
      'no-console': [
        'error',
        {
          allow: ['warn', 'error']
        }
      ],
      quotes: ['error', 'single'],
      // 'linebreak-style': ['error', 'unix']
      'linebreak-style': 'off'
    },
    ignores: [
      'node_modules/',
      '.next/',
      'dist/',
      '.vscode/',
      '.eslintcache',
      'package-lock.json',
      'pnpm-lock.yaml',
      'coverage/'
    ]
  }
];

export default eslintConfig;
