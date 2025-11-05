import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <main>
        <Hero />
        <Features />

        <section id="pricing" className="relative py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 to-red-50 p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold">Simple, transparent pricing</h3>
                  <p className="mt-3 text-slate-700">
                    Start small and scale with your program. No hidden fees.
                  </p>
                  <ul className="mt-6 space-y-2 text-slate-700 text-sm">
                    <li>• Unlimited forms and submissions</li>
                    <li>• Role-based access control</li>
                    <li>• Audit logs & exports</li>
                    <li>• Email and SSO integrations</li>
                  </ul>
                </div>
                <div className="relative rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
                  <div className="text-sm font-medium text-slate-600">Agency Plan</div>
                  <div className="mt-2 flex items-end gap-1">
                    <div className="text-5xl font-extrabold tracking-tight text-slate-900">$499</div>
                    <div className="pb-2 text-slate-500">/month</div>
                  </div>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-red-500 px-6 py-3 text-white shadow-lg hover:opacity-95 transition"
                  >
                    Request a quote
                  </a>
                  <p className="mt-3 text-xs text-slate-500 text-center">Custom SLAs and on-prem options available.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
