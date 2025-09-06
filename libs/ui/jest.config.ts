/* eslint-disable */
export default {
   displayName: 'ui',
   preset: 'jest-preset-angular',
   setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
   coverageDirectory: '../../coverage/libs/ui',
   transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};
