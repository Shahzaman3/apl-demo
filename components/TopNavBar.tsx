"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function TopNavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-surface dark:bg-surface border-b border-outline-variant w-full sticky top-0 z-50 shadow-sm nav-border-suppressed">
      <div className="flex justify-between items-center h-16 px-4 md:px-gutter w-full max-w-container-max mx-auto relative z-20 bg-surface">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <span
            className="material-symbols-outlined text-primary text-2xl md:text-3xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            sports_cricket
          </span>
          <span className="font-headline-sm md:font-headline-md text-headline-sm md:text-headline-md font-bold text-primary italic tracking-tighter">
            CRIC-AI PREDICTOR
          </span>
        </Link>
        
        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-lg items-center h-full">
          <Link
            href="/game"
            className="flex items-center h-full text-on-surface-variant font-medium font-label-md text-label-md uppercase tracking-wider hover:text-primary transition-colors duration-200"
          >
            Arena
          </Link>
        </div>

        {/* Trailing Actions */}
        <div className="flex items-center gap-2 md:gap-md">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-surface-container-high rounded border border-outline-variant text-xs text-on-surface-variant font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span>Model: APL-v2</span>
          </div>
          <div className="flex gap-2 md:gap-sm text-on-surface-variant">
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden hover:text-primary transition-colors duration-200 flex items-center justify-center p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-b border-outline-variant bg-surface-container absolute w-full left-0 top-16 z-10 overflow-hidden shadow-lg"
          >
            <div className="flex flex-col py-4 px-4 gap-4">
              <Link
                href="/game"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 text-on-surface-variant font-medium font-label-lg text-label-lg uppercase tracking-wider hover:text-primary hover:bg-surface-container-high p-3 rounded transition-colors"
              >
                <span className="material-symbols-outlined text-primary">insights</span> Live Match
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
