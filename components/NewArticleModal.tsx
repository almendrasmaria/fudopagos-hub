"use client";

import React, { useState } from "react";
import { X, Plus, Sparkles } from "lucide-react";
import { Article } from "@/types";

interface NewArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddArticle: (article: Article) => void;
}

export function NewArticleModal({
  isOpen,
  onClose,
  onAddArticle,
}: NewArticleModalProps) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("SII Facturación");
  const [description, setDescription] = useState("");
  const [readTime, setReadTime] = useState("3 min");
  const [responseText, setResponseText] = useState("");
  const [verification1, setVerification1] = useState("");
  const [verification2, setVerification2] = useState("");
  const [externalUrl, setExternalUrl] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newArt: Article = {
      id: `kb-custom-${Date.now()}`,
      number: String(Math.floor(Math.random() * 90) + 10),
      category,
      readTime,
      title,
      description: description || "Sin descripción proporcionada.",
      link: externalUrl || "soporte.fudo.lat/kb/nuevo",
      updatedStatus: "Creado recién",
      code: `KB-${category.slice(0, 3).toUpperCase()}-${Math.floor(Math.random() * 90 + 10)}`,
      subtitle: `Protocolo oficial para agentes de soporte en ${category}.`,
      verificationSteps: [
        {
          id: `step-1`,
          text: verification1 || "Verificar estado del cliente en Dash Operaciones.",
          completed: false,
        },
        ...(verification2
          ? [
              {
                id: `step-2`,
                text: verification2,
                completed: false,
              },
            ]
          : []),
      ],
      clientResponse: {
        text:
          responseText ||
          `¡Hola! Hemos revisado tu consulta sobre ${title}. Te sugerimos seguir los pasos indicados en la documentación o contactar con el equipo especializado.`,
        isHomologated: true,
      },
      externalLink: {
        title: externalUrl ? `Portal ${category}` : "Base de Conocimiento",
        url: externalUrl || "https://soporte.fudo.lat",
        code: "DOC-NEW",
      },
    };

    onAddArticle(newArt);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-slate-900 text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">
                Nuevo Artículo de Protocolo
              </h3>
              <p className="text-[11px] text-slate-400">
                Agrega una guía para el equipo de soporte
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 text-xs">
          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Título del Artículo
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej: Validación de folios CAF en contingencia"
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-medium text-slate-700 mb-1">
                Categoría
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
              >
                <option value="SII Facturación">SII Facturación</option>
                <option value="Conectividad POS">Conectividad POS</option>
                <option value="Cobros Fallidos">Cobros Fallidos</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-slate-700 mb-1">
                Tiempo de lectura
              </label>
              <input
                type="text"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="3 min"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900"
              />
            </div>
          </div>

          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Descripción breve
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Resumen del problema y alcance de la solución..."
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 resize-none"
            />
          </div>

          <div>
            <label className="block font-medium text-slate-700 mb-1">
              Respuesta sugerida para el cliente
            </label>
            <textarea
              rows={3}
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              placeholder="Mensaje estándar para copiar y pegar..."
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 resize-none"
            />
          </div>

          <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-medium transition-colors cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 font-semibold transition-all cursor-pointer inline-flex items-center gap-1.5 shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Guardar Artículo</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

