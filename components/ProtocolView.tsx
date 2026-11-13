"use client";

import React, { useState } from "react";
import {
  Copy,
  Check,
  ArrowLeft,
  Info,
  ChevronDown,
} from "lucide-react";
import { Article } from "@/types";

interface ProtocolViewProps {
  article: Article | null;
  onBackMobile?: () => void;
}

export function ProtocolView({ article, onBackMobile }: ProtocolViewProps) {
  const [copiedArticleId, setCopiedArticleId] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  if (!article) {
    return (
      <div className="flex-1 flex items-center justify-center p-12 text-slate-400 text-xs w-full">
        Selecciona un artículo para ver su protocolo de respuesta.
      </div>
    );
  }

  const steps = article.verificationSteps;
  const copied = copiedArticleId === article.id;
  const clientMessage = article.clientResponse?.text?.trim() ?? "";
  const characterCount = clientMessage.length;

  const handleCopyResponse = async () => {
    if (!clientMessage) return;
    try {
      await navigator.clipboard.writeText(clientMessage);
      setCopiedArticleId(article.id);
      setTimeout(() => setCopiedArticleId(null), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] p-6 md:p-8 lg:p-10 w-full min-w-0 bg-white/40">
      <div className="flex flex-col gap-6 w-full max-w-5xl">
        {/* Mobile Back Button */}
        {onBackMobile && (
          <button
            type="button"
            onClick={onBackMobile}
            className="md:hidden inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 -mt-2 mb-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Volver a las guías</span>
          </button>
        )}

        {/* Protocol Top Header */}
        <div className="w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              <span className="text-[11px] font-bold tracking-wider text-slate-700 uppercase">
                PROTOCOLO DE RESPUESTA • {article.category}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {article.code}
            </span>
          </div>

          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mt-2.5 tracking-tight">
            {article.title}
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1 font-normal">
            {article.subtitle}
          </p>
        </div>

        {/* Section 1: Verificaciones del Agente (Numbered List) */}
        {steps.length > 0 && (
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-2xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100/80">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-400">1</span>
                <h2 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
                  VERIFICACIONES DEL AGENTE
                </h2>
              </div>
              <span className="text-xs font-normal text-slate-400">
                {steps.length} {steps.length === 1 ? "paso" : "pasos"}
              </span>
            </div>

            {/* Clean Numbered Step List */}
            <div className="flex flex-col gap-3 mt-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/70 border border-slate-100/80 hover:bg-slate-50 transition-colors"
                >
                  <span className="w-5 h-5 rounded-lg bg-white border border-slate-200 text-slate-700 flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5 shadow-2xs">
                    {index + 1}
                  </span>
                  <p className="text-xs md:text-sm text-slate-800 leading-relaxed font-normal">
                    {formatVerificationText(step.text)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Section 2: Guía / Procedimiento del Agente */}
        {(article.solutionHtml || article.reasonHtml) && (
          <div className="w-full bg-white rounded-2xl border border-slate-200/90 p-5 md:p-6 shadow-2xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100/80">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-slate-400">
                  {steps.length > 0 ? "2" : "1"}
                </span>
                <h2 className="text-xs font-bold text-slate-900 tracking-wider uppercase">
                  PROCEDIMIENTO Y DETALLE
                </h2>
              </div>
            </div>

            {article.reasonHtml && (
              <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs md:text-sm text-slate-700">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Causa habitual
                </span>
                <div
                  className="[&>p]:m-0"
                  dangerouslySetInnerHTML={{ __html: article.reasonHtml }}
                />
              </div>
            )}

            {article.solutionHtml && (
              <div
                className="mt-4 prose prose-slate max-w-none text-xs md:text-sm leading-relaxed text-slate-700 [&>ul]:list-disc [&>ul]:pl-5 [&>ol]:list-decimal [&>ol]:pl-5 [&>p]:mb-3 [&_img]:rounded-xl [&_img]:border [&_img]:border-slate-200 [&_img]:my-3 [&_img]:max-w-full [&_a]:text-blue-600 [&_a]:underline"
                dangerouslySetInnerHTML={{ __html: article.solutionHtml }}
              />
            )}

            {/* Barra integrada para copiar respuesta adaptada al cliente */}
            {clientMessage && (
              <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyResponse}
                      aria-label="Copiar mensaje para el cliente"
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer shadow-xs active:scale-98 ${
                        copied
                          ? "bg-emerald-600 text-white"
                          : "bg-emerald-600 hover:bg-emerald-700 text-white"
                      }`}
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>¡Mensaje copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar mensaje para el cliente</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setShowPreview((v) => !v)}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-medium text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <span>{showPreview ? "Ocultar texto" : "Ver texto adaptado"}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          showPreview ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400">
                    {characterCount} caracteres
                  </span>
                </div>

                {/* Previsualización colapsable opcional */}
                {showPreview && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed whitespace-pre-line mt-1">
                    {clientMessage}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Optional Section 3: Notas Internas */}
        {article.notesHtml && (
          <div className="w-full bg-amber-50/60 rounded-2xl border border-amber-200/80 p-5 shadow-2xs flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs leading-relaxed text-amber-900">
              <span className="font-bold block mb-1">Nota interna para soporte:</span>
              <div
                dangerouslySetInnerHTML={{ __html: article.notesHtml }}
                className="[&>p]:mb-1 [&>ul]:list-disc [&>ul]:pl-4"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function formatVerificationText(text: string) {
  const parts = text.split(
    /(Dash Operaciones|Fudo Pagos|software propio de mercado)/g
  );

  return parts.map((part, i) => {
    if (part === "Dash Operaciones" || part === "Fudo Pagos") {
      return (
        <strong key={i} className="font-semibold text-slate-900">
          {part}
        </strong>
      );
    }
    if (part === "software propio de mercado") {
      return (
        <span key={i} className="italic text-slate-700 font-medium">
          {part}
        </span>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
