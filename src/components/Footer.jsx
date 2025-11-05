export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 text-lg font-semibold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-red-500 text-white">DC</span>
              <span className="text-slate-900">CivicCollect</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Modern, secure data collection for public sector programs.
            </p>
          </div>
          <div className="text-sm text-slate-600">
            <p>
              Interested in a pilot? Email us at
              <a className="text-blue-600 font-medium ml-1" href="mailto:hello@civiccollect.gov">hello@civiccollect.gov</a>
            </p>
            <p className="mt-2">Washington, D.C.</p>
          </div>
          <div className="md:text-right text-sm text-slate-500">
            <p>© {new Date().getFullYear()} CivicCollect. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
