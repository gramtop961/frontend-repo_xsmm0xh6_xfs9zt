import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs text-slate-700 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-r from-blue-600 to-red-500" />
              FedRAMP-ready architecture
            </div>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Secure Data Collection for Government
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Collect, validate, and manage sensitive forms at scale with modern security, accessibility, and analytics built in.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-red-500 px-6 py-3 text-white shadow-lg shadow-blue-600/20 hover:opacity-95 transition"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg px-6 py-3 border border-slate-300 text-slate-800 bg-white hover:bg-slate-50"
              >
                See Live Demo
              </a>
            </div>
            <div className="mt-6 text-sm text-slate-500">
              Trusted by agencies for permits, benefits, and public feedback.
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] md:h-[620px] w-full rounded-2xl overflow-hidden border border-slate-200 bg-white">
            <Spline
              scene="https://prod.spline.design/XuAg4PYWfzmy0iW1/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-70" />
            <div className="pointer-events-none absolute -inset-x-20 -bottom-20 h-40 blur-3xl bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-red-500/30" />
          </div>
        </div>
      </div>
    </section>
  );
}
