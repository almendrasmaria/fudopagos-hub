"use client";

import React, { useEffect, useState } from "react";
import { Search, X, BookOpen, CreditCard, Smartphone, Truck, RotateCcw } from "lucide-react";
import { Article } from "@/types";

interface QuickActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
}

export function QuickActionModal({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
}: QuickActionModalProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase()) ||
      a.code.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center px-4 py-3 border-b border-slate-100">
          <Search className="w-4 h-4 text-slate-400 mr-2.5" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar acción, protocolo o artículo..."
            className="w-full text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Artículos y Protocolos ({filtered.length})
          </div>
          {filtered.length === 0 ? (
            <div className="text-center py-6 text-xs text-slate-400">
              No se encontraron coincidencias.
            </div>
          ) : (
            filtered.map((article) => (
              <div
                key={article.id}
                onClick={() => {
                  onSelectArticle(article);
                  onClose();
                }}
                className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2.5 truncate">
                  <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="text-xs font-medium text-slate-800 truncate">
                    {article.title}
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-400 shrink-0 ml-2">
                  {article.code}
                </span>
              </div>
            ))
          )}

          <div className="px-3 pt-3 pb-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-t border-slate-100 mt-2">
            Módulos Rápidos
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2.5 p-2 rounded-xl text-xs text-slate-600 hover:bg-slate-50 cursor-pointer">
              <CreditCard className="w-3.5 h-3.5 text-slate-400" />
              <span>Ir a Cobros y Liquidación</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-xl text-xs text-slate-600 hover:bg-slate-50 cursor-pointer">
              <Smartphone className="w-3.5 h-3.5 text-slate-400" />
              <span>Ver estado de Terminales POS</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-xl text-xs text-slate-600 hover:bg-slate-50 cursor-pointer">
              <Truck className="w-3.5 h-3.5 text-slate-400" />
              <span>Rastreo de Despachos y Envíos</span>
            </div>
            <div className="flex items-center gap-2.5 p-2 rounded-xl text-xs text-slate-600 hover:bg-slate-50 cursor-pointer">
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span>Panel de Anulaciones y Disputas</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

