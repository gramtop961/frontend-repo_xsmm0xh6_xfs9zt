import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Features', href: '#features' },
    { name: 'Security', href: '#security' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-xl font-semibold">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-red-500 text-white">DC</span>
            <span className="text-slate-900">CivicCollect</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-red-500 px-4 py-2 text-white shadow hover:opacity-95 transition"
            >
              Request Demo
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-slate-800 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-md px-3 py-2 text-white bg-gradient-to-r from-blue-600 to-red-500 text-center"
                onClick={() => setOpen(false)}
              >
                Request Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
