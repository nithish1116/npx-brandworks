export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate sm:flex-row">
        <div className="font-display flex items-center gap-1 text-base font-semibold">
          <span className="text-paper">NP</span>
           <span className="text-blue-400 text-3xl">X</span>
             <span className="ml-2 hidden bg-gradient-to-r from-slate-500 via-sky-400 to-blue-500 bg-clip-text text-xs font-medium tracking-[0.3em] text-transparent sm:inline">
              BRANDWORKS
             </span>
        </div>
        <p>© {new Date().getFullYear()} NPX Brandworks. All rights reserved.</p>
      </div>
    </footer>
  );
}
