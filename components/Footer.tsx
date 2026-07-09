export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-center text-sm text-slate md:flex-row md:text-left">
        {/* Logo */}
        <div className="flex items-center justify-center whitespace-nowrap">
          <span className="text-xl font-semibold text-paper">NP</span>

          <span className="ml-0.5 text-3xl font-bold text-blue-400">X</span>

          <span className="ml-2 bg-gradient-to-r from-slate-500 via-sky-100 to-blue-500 bg-clip-text text-[11px] font-semibold tracking-[0.2em] text-transparent sm:text-xs sm:tracking-[0.3em]">
            BRANDWORKS
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-paper">NPX Brandworks</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}