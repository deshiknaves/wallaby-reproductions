# Wallaby Reproductions

Turborepo monorepo with Next.js and Vitest for reproducing Wallaby.js issues.

## Structure

```
├── apps/
│   └── web/                 # @repo/web - Next.js 15 app (App Router)
├── packages/
│   ├── core/                # @repo/core - shared utilities
│   ├── typescript-config/   # shared tsconfig
│   └── eslint-config/       # shared eslint config
```

## Scripts

```bash
pnpm install          # install dependencies
pnpm build            # build all packages
pnpm test             # run tests
pnpm test:coverage    # run tests with coverage
pnpm lint             # lint all packages
pnpm dev              # start dev server
```

## Stack

- **Monorepo**: Turborepo + pnpm workspaces
- **Framework**: Next.js 15 (App Router)
- **Testing**: Vitest 4 + React Testing Library
- **Coverage**: v8
- **Linting**: ESLint 9 (flat config)
- **Types**: TypeScript 5
