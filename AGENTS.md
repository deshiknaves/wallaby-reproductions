# Agent Notes

## Package Names

- `@repo/web` - Next.js app in `apps/web/`
- `@repo/core` - shared utilities in `packages/core/`
- `@repo/typescript-config` - tsconfigs in `packages/typescript-config/`
- `@repo/eslint-config` - eslint configs in `packages/eslint-config/`

## Testing

- Vitest 4 with projects config (not workspace)
- Root `vitest.config.ts` defines projects + coverage
- Each project has own `vitest.config.ts` with `defineConfig`
- Web uses jsdom + React Testing Library
- Run `pnpm test` from root to test all projects

## Config Patterns

- All packages use `"type": "module"`
- ESLint 9 flat config (`.js` files, not `.eslintrc`)
- TypeScript configs extend from `@repo/typescript-config`
- ESLint configs extend from `@repo/eslint-config`

## Adding a New Package

1. Create dir in `packages/` or `apps/`
2. Add `package.json` with `"type": "module"`
3. Extend shared tsconfig/eslint
4. Add `vitest.config.ts` if tests needed
5. Root vitest will auto-discover via glob pattern

## Common Issues

- jest-dom import is `@testing-library/jest-dom` (not `/vitest`)
- React components need `@vitejs/plugin-react` in vitest config
- Web tests need `environment: "jsdom"` in vitest config
