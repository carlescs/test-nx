# NX Angular Monorepo
This is an NX monorepo containing Angular applications and libraries with Storybook integration, built with TypeScript, Jest testing, ESLint, and Prettier code formatting.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Install Dependencies
- `CYPRESS_INSTALL_BINARY=0 npm install` -- takes 52 seconds. NEVER CANCEL. Set timeout to 120+ seconds.
  - **IMPORTANT**: Use `CYPRESS_INSTALL_BINARY=0` to avoid Cypress binary download issues in sandboxed environments.
  - Installs all dependencies including Angular, NX, Jest, Storybook, ESLint, and Prettier.

### Build Commands
- `npx nx run-many -t build` -- takes 2 minutes 2 seconds. NEVER CANCEL. Set timeout to 300+ seconds.
  - Builds the test-nx Angular application to `dist/apps/test-nx`.
- `npx nx build-storybook ui` -- takes 2 minutes 39 seconds. NEVER CANCEL. Set timeout to 360+ seconds.
  - Builds Storybook for the UI library to `dist/storybook/ui`.

### Test Commands
- `npx nx run-many -t test` -- takes 2 minutes 8 seconds. NEVER CANCEL. Set timeout to 300+ seconds.
  - Runs Jest tests for all projects (test-nx app and ui library).
  - All tests pass successfully.

### Lint and Format Commands
- `npx nx run-many -t lint` -- takes 2 minutes 15 seconds. NEVER CANCEL. Set timeout to 300+ seconds.
  - Lints all projects using ESLint with Angular-specific rules.
  - May show TypeScript version warnings but should pass with minimal warnings.
- `npx prettier --write .` -- takes 1.7 seconds. Fast command.
  - Formats all code files according to project standards.

### Development Servers
- Angular App: `npx nx serve test-nx`
  - Serves on http://localhost:4200
  - Takes ~8 seconds to build and start.
  - Use for testing the main Angular application.
- Storybook: `npx nx storybook ui`  
  - Serves on http://localhost:4400
  - Takes ~30 seconds to build and start.
  - Use for testing and developing UI components in isolation.

## Validation

### Manual Testing Requirements
- **Angular App**: Always test by visiting http://localhost:4200 and verifying the app loads correctly.
- **Storybook**: Always test by visiting http://localhost:4400 and verifying component stories load.
- **Before finishing changes**: Always run the full validation sequence:
  1. `CYPRESS_INSTALL_BINARY=0 npm install`
  2. `npx nx run-many -t lint`
  3. `npx nx run-many -t test`
  4. `npx nx run-many -t build`
  5. `npx prettier --write .`
  6. Manually test one development server

### CI Pipeline Validation
- The GitHub Actions workflow (.github/workflows/node.js.yml) runs:
  - `npm install`
  - `npx nx run-many -t build`
  - `npx nx run-many -t test`
- Always ensure your changes pass these commands before submitting.

## Project Structure

### Applications
- **test-nx** (`apps/test-nx/`): Main Angular application
  - Entry point: `apps/test-nx/src/main.ts`
  - App component: `apps/test-nx/src/app/app.component.ts`
  - Serves on port 4200 during development
- **test-nx-e2e** (`apps/test-nx-e2e/`): Cypress e2e tests for test-nx app
- **ui-e2e** (`apps/ui-e2e/`): Cypress e2e tests for UI library

### Libraries
- **ui** (`libs/ui/`): Angular component library with Storybook
  - Components: Button (`libs/ui/src/lib/components/button/`) and TextBox (`libs/ui/src/lib/components/textbox/`)
  - Storybook config: `libs/ui/.storybook/`
  - Serves Storybook on port 4400 during development

### Key Configuration Files
- `nx.json`: NX workspace configuration with caching and cloud settings
- `package.json`: Project dependencies and npm scripts
- `jest.config.ts`: Jest testing configuration
- `tsconfig.base.json`: Base TypeScript configuration
- `.eslintrc.json`: Root ESLint configuration
- `.prettierrc`: Prettier formatting rules

## Common Issues and Workarounds

### Cypress Installation Issues
- **Problem**: `npm install` fails with Cypress binary download errors
- **Solution**: Always use `CYPRESS_INSTALL_BINARY=0 npm install`
- **Note**: E2E tests won't work without Cypress binary, but builds and unit tests will work fine

### ESLint Configuration
- ESLint configurations have been fixed to use proper severity values (`"warn"` instead of `"warning"`)
- The custom rule `@typescript-eslint/explicit-type-declarations` was removed as it doesn't exist
- JSDoc comments are required for classes and methods in the ui library

### NX Cloud Connectivity
- NX Cloud may show connection errors in sandboxed environments
- This is normal and doesn't affect local development or builds
- All caching and builds work locally without NX Cloud

### TypeScript Version Warnings
- ESLint may show warnings about TypeScript version 5.1.6 not being officially supported
- These warnings are safe to ignore - the build and tests work correctly

## Development Workflow Best Practices

### When Making Changes to Angular Components:
1. Always run linting after changes: `npx nx run-many -t lint`
2. Test the specific project: `npx nx test ui` or `npx nx test test-nx`
3. If modifying UI components, test in Storybook: `npx nx storybook ui`
4. For app changes, test the dev server: `npx nx serve test-nx`

### When Adding New Dependencies:
1. Use `npm install <package>` to add dependencies
2. Re-run the full build pipeline to ensure compatibility
3. Update TypeScript types if needed for the new packages

### Before Submitting Changes:
1. Format code: `npx prettier --write .`
2. Lint all projects: `npx nx run-many -t lint`
3. Run all tests: `npx nx run-many -t test`
4. Build all projects: `npx nx run-many -t build`
5. Manually verify the application works by running one development server

## Timing Expectations (For Setting Appropriate Timeouts)

| Command | Expected Time | Recommended Timeout |
|---------|---------------|---------------------|
| `CYPRESS_INSTALL_BINARY=0 npm install` | ~52 seconds | 120 seconds |
| `npx nx run-many -t lint` | ~2 minutes 15 seconds | 300 seconds |
| `npx nx run-many -t test` | ~2 minutes 8 seconds | 300 seconds |
| `npx nx run-many -t build` | ~2 minutes 2 seconds | 300 seconds |
| `npx nx build-storybook ui` | ~2 minutes 39 seconds | 360 seconds |
| `npx prettier --write .` | ~1.7 seconds | 30 seconds |
| `npx nx serve test-nx` | ~8 seconds to start | 60 seconds |
| `npx nx storybook ui` | ~30 seconds to start | 90 seconds |

**CRITICAL**: NEVER CANCEL long-running commands. Builds and tests may take several minutes to complete.