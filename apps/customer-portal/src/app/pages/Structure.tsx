import { Link } from "react-router-dom";

const structure = `FE-LIFECYCLE/
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
│   ├── eslint-config/
│   ├── jest-config/
│   ├── typescript-config/
│   ├── ui/
│   └── utils/
│
├── node_modules/
│
├── .gitignore
├── .release.config.cjs
├── lerna.json
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
└── sonar-project.properties`;

export default function Structure() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-3xl font-bold">
              Project <span className="text-blue-600">Structure</span>
            </h1>

            <p className="mt-1 text-slate-600">FE Lifecycle React Monorepo</p>
          </div>

          <Link
            to="/"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 transition hover:border-blue-500 hover:bg-blue-50"
          >
            ← Back Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 rounded-2xl border border-blue-200 bg-blue-50 p-6">
          <h2 className="text-2xl font-semibold text-slate-900">
            Monorepo Folder Layout
          </h2>

          <p className="mt-3 leading-7 text-slate-600">
            This project uses a PNPM workspace with shared packages for UI,
            utilities, TypeScript configuration, ESLint configuration and Jest
            configuration. Multiple React applications can consume these shared
            packages without duplicating code.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-slate-200 shadow-sm">
          <pre className="p-8 font-mono text-sm leading-7 text-slate-800">
            {structure}
          </pre>
        </div>
      </main>
    </div>
  );
}
