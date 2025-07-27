// ESM-aware ESLint Flat Config
import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    rules: {
      'no-console': 'warn'
    }
  }
];
