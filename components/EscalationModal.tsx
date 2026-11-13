"use client";

import React, { useState } from "react";
import {
  X,
  KeyRound,
  Search,
  Clock,
  Globe,
  MessageSquare,
  Camera,
  Copy,
  Check,
  AlertCircle,
  Hash,
} from "lucide-react";

interface EscalationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EscalationModal({ isOpen, onClose }: EscalationModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const escalationTemplate = `*ESCALAMIENTO COMPLETO — FUDO PAGOS*
• ID de Dash: 
• Nro. de Serie de la terminal: 
• Fecha y hora exacta del incidente: 
• Conectividad: WiFi / Chip (Entel o Claro)
• Contexto: siempre / aleatorio (mesas, mostrador o delivery)
• Pruebas realizadas: 
• Evidencia: (fotos o videos adjuntos)
• Datos de contacto del cliente: `;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(escalationTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const checklistItems = [
    {
      icon: KeyRound,
      color: "text-amber-600 bg-amber-50 border-amber-200/60",
      title: "ID de Dash",
      desc: "ID de Dash del comercio",
    },
    {
      icon: Search,
      color: "text-amber-600 bg-amber-50 border-amber-200/60",
      title: "Número de serie",
      desc: "Número de serie de la terminal",
    },
    {
      icon: Clock,
      color: "text-amber-600 bg-amber-50 border-amber-200/60",
      title: "Fecha y hora exacta",
      desc: "Momento exacto del incidente",
    },
    {
      icon: Globe,
      color: "text-amber-600 bg-amber-50 border-amber-200/60",
      title: "Conectividad",
      desc: "WiFi o chip (Entel o Claro)",
    },
    {
      icon: MessageSquare,
      color: "text-amber-600 bg-amber-50 border-amber-200/60",
      title: "Contexto",
      desc: "Siempre o aleatorio; mesas, mostrador o delivery",
    },
    {
      icon: Camera,
      color: "text-amber-600 bg-amber-50 border-amber-200/60",
      title: "Evidencia",
      desc: "Fotos o videos del error en pantalla",
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs animate-in fade-in duration-150"
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200/80 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 md:p-6 border-b border-slate-100 flex items-start justify-between bg-gradient-to-b from-slate-50/60 to-white">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold tracking-wider uppercase text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-md border border-amber-200/70">
                Soporte Técnico
              </span>
              <span className="text-[10px] font-medium text-slate-400">
                Checklist Operativo
              </span>
            </div>
            <h2 className="text-lg md:text-xl font-bold text-slate-900 tracking-tight">
              Si no se resuelve: escalar completo
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Folio a Soporte FudoPagos o Slack{" "}
              <span className="inline-flex items-center gap-0.5 font-semibold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                <Hash className="w-3 h-3 text-slate-400" />
                contact-fudopagos
              </span>
              , con todo lo que se probó y esto:
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            title="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 6 Data Cards Grid */}
        <div className="p-5 md:p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {checklistItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200/80 bg-white hover:bg-slate-50/60 transition-colors shadow-2xs"
                >
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border ${item.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-slate-800 block">
                      {item.title}
                    </span>
                    <span className="text-[11px] text-slate-500 leading-tight block mt-0.5">
                      {item.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-600">
            <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <p className="leading-relaxed text-[11px] md:text-xs text-slate-600">
              <strong className="text-slate-800">
                Más datos de contacto del cliente.
              </strong>{" "}
              El canal de Slack es ideal en días hábiles cuando el soporte de
              FudoPagos no está, pero sí Comercial, Desarrollo y Payments.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-slate-100 bg-slate-50/50 flex flex-wrap items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-xs active:scale-98 ${
              copied
                ? "bg-emerald-600 text-white"
                : "bg-white hover:bg-slate-100 border border-slate-200 text-slate-700"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>¡Plantilla copiada!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>Copiar plantilla de escalamiento</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-all cursor-pointer active:scale-98"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}

