module.exports = {
  testEnvironment: 'jsdom', //pois vamos estar rodando no browser
  testPathIgnorePatterns: ['/node_modules/', '/.next/'], //ignorar essas pastas
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    //quero que ele ignore esses de baixo
    '!src/app/**',
    '!src/lib/registry.tsx',
    '!src/types/**',
    '!src/**/stories.tsx',
    '!src/styles/**'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'], //ele vai pegar todos os arquivos da pasta src
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js'
  }
};
