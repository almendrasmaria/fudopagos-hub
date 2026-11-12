"use client";

import React from "react";
import {
  LifeBuoy,
  CreditCard,
  Truck,
  ChevronsUpDown,
  X,
} from "lucide-react";

interface SidebarProps {
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
  isOpenMobile?: boolean;
  onCloseMobile?: () => void;
  articlesCount?: number;
}

export function Sidebar({
  activeTab = "centro-de-ayuda",
  onSelectTab,
  isOpenMobile = false,
  onCloseMobile,
  articlesCount = 36,
}: SidebarProps) {
  const menuItems = [
    {
      id: "centro-de-ayuda",
      label: "Centro de Ayuda",
      icon: LifeBuoy,
      count: articlesCount,
    },
    {
      id: "cobros-liquidacion",
      label: "Cobros y Liquidación",
      icon: CreditCard,
    },
    {
      id: "despachos-envios",
      label: "Despachos y Envíos",
      icon: Truck,
    },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div
          onClick={onCloseMobile}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs md:hidden"
        />
      )}

      <aside
        className={`fixed md:sticky top-0 z-40 md:z-20 h-screen w-64 min-w-[256px] bg-white border-r border-slate-200/80 flex flex-col justify-between select-none transition-transform duration-200 ease-in-out ${isOpenMobile ? "translate-x-0 shadow-2xl" : "-translate-x-full md:translate-x-0"
          }`}
      >
        {/* Top Section */}
        <div className="p-4 flex flex-col gap-4">
          {/* Workspace Header */}
          <div className="flex items-center justify-between p-1.5 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs tracking-wider shadow-xs">
                FP
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-slate-900 leading-tight">
                  Fudo Pagos Hub
                </span>
                <ChevronsUpDown className="w-3.5 h-3.5 text-slate-400" />
              </div>
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
          </div>

          {/* Navigation */}
          <div className="mt-1">
            <div className="px-3 pb-2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              OPERACIÓN
            </div>
            <nav className="flex flex-col gap-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = item.id === activeTab;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      onSelectTab?.(item.id);
                      onCloseMobile?.();
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${isActive
                        ? "bg-slate-900 text-white shadow-xs"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                      }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon
                        className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"
                          }`}
                      />
                      <span>{item.label}</span>
                    </div>

                    {item.count !== undefined && (
                      <span
                        className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${isActive
                            ? "bg-slate-800 text-slate-200"
                            : "bg-slate-100 text-slate-600"
                          }`}
                      >
                        {item.count}
                      </span>
                    )}

                    {(item as { hasDot?: boolean }).hasDot && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    )}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Close button on mobile at bottom */}
        {isOpenMobile && (
          <div className="p-4 border-t border-slate-100 md:hidden flex justify-end">
            <button
              type="button"
              onClick={onCloseMobile}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 font-medium"
            >
              <X className="w-4 h-4" />
              <span>Cerrar menú</span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
