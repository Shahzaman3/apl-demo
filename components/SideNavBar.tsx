import Link from "next/link";

interface SideNavBarProps {
  gameState?: {
    questionsAnswered: number;
    confidence: number;
    remainingPool: number;
  };
}

export default function SideNavBar({ gameState }: SideNavBarProps) {
  return (
    <aside className="hidden md:flex bg-surface-container dark:bg-surface-container left-0 h-full w-64 border-r border-outline-variant flex-col p-md gap-sm overflow-y-auto shrink-0 transition-all duration-300 justify-between">
      <div className="flex flex-col gap-sm">
        <div className="flex items-center gap-md mb-lg">
          <img
            alt="User Analytics Profile"
            className="w-10 h-10 rounded-full object-cover border border-outline-variant"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtuqDlPl8gPrErC47Ylai52wAi-4lgOLZP1XDXEQc6KsOAGIDV_Q8wcatzAyvX1yyB-ZoyzzgeuLqBiQR1aG3mtNQFyy7kObc1d7MgDX6kkkRRZ-OJEeauRqDfsMD4eBDPlSA4jKsdyd4qYbUcG1Cspsk6KXyy_UE8SxKElsmgolRSU8EXKJGf-EqFfzHrWaje7t2DyrnYwZCbARcQt4k51WCXwNroww1TzrCpl5LJnSKuEpEz9t4T_p3wz_GdDlQt5IYisVz9cH8"
          />
          <div>
            <h2 className="font-headline-sm text-headline-sm font-black text-on-surface">
              PRO ANALYST
            </h2>
            <p className="font-label-sm text-label-sm text-on-surface-variant">
              Rank: Elite
            </p>
          </div>
        </div>
        <nav className="flex flex-col gap-sm">
          <Link
            className="flex items-center gap-sm text-on-surface-variant hover:bg-surface-container-high px-4 py-3 rounded-lg transition-all duration-150 font-label-md text-label-md"
            href="/game"
          >
            <span className="material-symbols-outlined">insights</span> Live Match
          </Link>
        </nav>
      </div>

      {/* Bottom Density Block */}
      <div className="mt-auto pt-sm border-t border-outline-variant flex flex-col gap-xs">
        {gameState ? (
          <div className="bg-surface-container-low border border-outline-variant rounded-lg p-3 flex flex-col gap-2">
            <div className="flex items-center gap-1 text-primary font-label-xs uppercase tracking-wider border-b border-outline-variant pb-1 mb-1">
              <span className="material-symbols-outlined text-[14px]">query_stats</span>
              <span>Live Telemetry</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-on-surface-variant">Questions</span>
              <span className="font-bold text-on-surface">{gameState.questionsAnswered} / 8</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-on-surface-variant">Confidence</span>
              <span className="font-bold text-primary">{gameState.confidence}%</span>
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-on-surface-variant">Pool Remaining</span>
              <span className="font-bold text-secondary">{gameState.remainingPool}</span>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 px-2 py-1 bg-surface-container-low rounded border border-outline-variant">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-xs font-label-xs text-on-surface-variant uppercase tracking-wider">
              System Online
            </span>
          </div>
        )}
      </div>
    </aside>
  );
}
