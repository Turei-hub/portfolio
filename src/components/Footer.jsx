export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-6 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Turei Milner &middot; Auckland, NZ &middot;{' '}
        <a
          href="https://turei.dev"
          className="hover:text-emerald-400 transition-colors"
        >
          turei.dev
        </a>
      </p>
    </footer>
  )
}
