/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest');

module.exports = {
  clearMocks: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 8000,
  globalSetup: '<rootDir>/global-setup.js',
  setupFilesAfterEnv: ['<rootDir>/setupFilesAfterEnv.js'],
};
