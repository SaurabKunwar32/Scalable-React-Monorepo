import { Button } from "@repo/ui";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <h1 className="text-2xl font-bold">
              FE <span className="text-blue-600">Lifecycle</span>
            </h1>

            <p className="text-sm text-slate-600">React Monorepo Playground</p>
          </div>

          <div className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600">
            PNPM Workspace
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-600">
          Modern Frontend Architecture
        </div>

        <h2 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
          Build Once.
          <br />
          <span className="text-blue-600">Reuse Everywhere.</span>
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600">
          This project demonstrates how to build scalable React applications
          using a PNPM Monorepo with shared UI components, utility packages,
          TypeScript, and reusable tooling.
        </p>

        <div className="mt-12">
          <Button onClick={() => navigate("/structure")}>
            View Project Structure
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-3">
        {[
          {
            icon: "🎨",
            title: "@repo/ui",
            description:
              "Reusable Buttons, Loaders, and UI components shared across applications.",
          },
          {
            icon: "🧰",
            title: "@repo/utils",
            description:
              "Utility functions like size conversion, formatting, validation, and helpers.",
          },
          {
            icon: "🚀",
            title: "Scalable Workflow",
            description:
              "One repository for multiple React applications with shared tooling and packages.",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
          >
            <div className="text-5xl">{feature.icon}</div>

            <h3 className="mt-6 text-2xl font-bold text-slate-900">
              {feature.title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="mb-12 text-center text-4xl font-bold text-slate-900">
          Why a Monorepo?
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Shared Components",
            "Shared Utilities",
            "Single Dependency Graph",
            "Type Safety",
            "Reusable Configurations",
            "Faster Development",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-blue-500 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                ✓
              </div>

              <span className="text-lg font-medium text-slate-800">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="rounded-3xl border border-blue-200 bg-blue-50 p-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Explore Shared Utilities
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-600 leading-7">
            Try the Size Converter page to see how a shared utility package can
            be reused across applications in a React monorepo.
          </p>

          <div className="mt-10">
            <Button onClick={() => navigate("/size-converter")}>
              Try the Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 text-center text-slate-500">
        React • TypeScript • Tailwind CSS • PNPM Workspace
      </footer>
    </div>
  );
}
