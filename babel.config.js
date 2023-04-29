export default {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@/application': ['./src/application'],
          '@/domain': ['./src/domain'],
          '@/infrastructure': ['./src/infrastructure'],
          '@/utils': ['./src/utils'],
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts', '**/*.test.ts'],
};
