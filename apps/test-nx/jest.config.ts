/* eslint-disable */
export default {
   displayName: 'test-nx',
   preset: 'jest-preset-angular',
   setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
   coverageDirectory: '../../coverage/apps/test-nx',
   transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};
