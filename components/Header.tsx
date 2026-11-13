"use client";

import React from "react";
import { Plus, Menu, AlertCircle } from "lucide-react";

interface HeaderProps {
  currentSectionTitle?: string;
  onNewArticle?: () => void;
  onOpenEscalation?: () => void;
  onOpenMobileMenu?: () => void;
}

export function Header({
  currentSectionTitle = "Centro de Ayuda",
  onNewArticle,
  onOpenEscalation,
  onOpenMobileMenu,
}: HeaderProps) {
  return (
    <header className="h-16 px-4 md:px-8 border-b border-slate-200/80 bg-white/80 backdrop-blur-md flex items-center justify-between sticky top-0 z-10">
      {/* Left Breadcrumb & Mobile Menu Toggle */}
      <div className="flex items-center gap-3 text-xs">
        {onOpenMobileMenu && (
          <button
            type="button"
            onClick={onOpenMobileMenu}
            className="p-1.5 -ml-1 text-slate-500 hover:text-slate-800 md:hidden rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            title="Abrir menú"
          >
            <Menu className="w-5 h-5" />
          </button>
        )}
        <div className="flex items-center gap-2">
          <span className="text-slate-400 font-medium">Herramientas</span>
          <span className="text-slate-300">/</span>
          <span className="text-slate-800 font-semibold">{currentSectionTitle}</span>
        </div>
      </div>

      {/* Right Action */}
      <div>
        {currentSectionTitle === "Centro de Ayuda" ? (
          <div className="flex items-center gap-2">
            {onOpenEscalation && (
              <button
                type="button"
                onClick={onOpenEscalation}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100/80 border border-amber-200/90 text-xs font-semibold text-amber-900 shadow-2xs hover:shadow-xs transition-all cursor-pointer active:scale-98"
                title="Pauta para escalamiento completo"
              >
                <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="hidden sm:inline">Pauta de Escalamiento</span>
                <span className="sm:hidden">Escalar</span>
              </button>
            )}

            <button
              type="button"
              onClick={onNewArticle}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs hover:shadow-xs transition-all cursor-pointer active:scale-98"
            >
              <Plus className="w-3.5 h-3.5 text-slate-500" />
              <span>Nuevo Artículo</span>
            </button>
          </div>
        ) : (
          <div className="text-[11px] text-slate-400 font-medium px-2 py-1 bg-slate-50 border border-slate-200/60 rounded-lg">
            Operativa Regional
          </div>
        )}
      </div>
    </header>
  );
}
