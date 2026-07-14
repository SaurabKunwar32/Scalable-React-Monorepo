# FE-LIFECYCLE Monorepo Structure

```text
FE-LIFECYCLE/
│
├── .github/
│   └── workflows/
│       ├── deploy.yml
│       ├── pull-request.yml
│       ├── quality-gates.yml
│       └── release.yml
│
├── apps/
│   └── customer-portal/
│       │
│       ├── coverage/
│       ├── node_modules/
│       │
│       ├── public/
│       │
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── test/
│       │   ├── App.tsx
│       │   └── main.tsx
│       │
│       ├── .gitignore
│       ├── eslint.config.js
│       ├── index.html
│       ├── jest.config.js
│       ├── package.json
│       ├── README.md
│       ├── tsconfig.app.json
│       ├── tsconfig.json
│       ├── tsconfig.node.json
│       ├── tsconfig.test.json
│       └── vite.config.ts
│
├── packages/
│   │
│   ├── eslint-config/
│   │   ├── package.json
│   │   └── index.js
│   │
│   ├── jest-config/
│   │   ├── package.json
│   │   └── jest.config.js
│   │
│   ├── typescript-config/
│   │   ├── base.json
│   │   ├── react-app.json
│   │   └── react-library.json
│   │
│   ├── ui/
│   │   ├── src/
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── utils/
│       ├── src/
│       │   ├── formatCurrency.ts
│       │   └── index.ts
│       ├── package.json
│       └── tsconfig.json
│
├── node_modules/
│
├── .gitignore
│
├── .release.config.cjs
│
├── lerna.json
│
├── package.json
│
├── pnpm-lock.yaml
│
├── pnpm-workspace.yaml
│
└── sonar-project.properties
```
