import { Database, Shield, Lock, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Structured Collection',
    desc: 'Build complex, conditional forms with validation, file uploads, and multi-language support.',
  },
  {
    icon: Shield,
    title: 'Compliance First',
    desc: 'Meet government standards with audit trails, role-based access, and data residency controls.',
  },
  {
    icon: Lock,
    title: 'End-to-End Security',
    desc: 'Encryption in transit and at rest, SSO (SAML/OIDC), and fine-grained permissions.',
  },
  {
    icon: BarChart3,
    title: 'Real-time Insights',
    desc: 'Dashboards and exports to understand submission rates, trends, and bottlenecks.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white to-blue-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built for mission-critical programs</h2>
          <p className="mt-3 text-slate-600">
            A modern platform designed for agencies to securely collect and act on data from citizens and staff.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-600 to-red-500 text-white flex items-center justify-center shadow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>

        <div id="security" className="mt-16 rounded-2xl border border-slate-200 bg-white p-8">
          <h3 className="text-xl font-semibold text-slate-900">Security & Compliance</h3>
          <p className="mt-2 text-slate-600">
            Built with a security-first mindset: audit logs, principle of least privilege, automated backups, and continuous monitoring.
            Integrates with agency identity providers and supports data retention policies.
          </p>
        </div>
      </div>
    </section>
  );
}
