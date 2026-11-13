"use client";

import React, { useState } from "react";
import {
  Truck,
  ExternalLink,
  Clock,
  AlertTriangle,
  Info,
  CheckCircle2,
  FileSpreadsheet,
  Package,
  Layers,
  ArrowRight,
  ShieldCheck,
  Send,
} from "lucide-react";

export function ShipmentsSection() {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(id);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  return (
    <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] p-6 md:p-8 lg:p-10 w-full min-w-0 bg-[#f8fafc]">
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        {/* Header & General Clarification */}
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span className="text-[11px] font-bold tracking-wider text-slate-700 uppercase">
              GESTIÓN DE LOGÍSTICA & HARDWARE
            </span>
          </div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900 mt-2 tracking-tight">
            Despachos y Envíos por País
          </h1>
          <p className="text-xs md:text-sm text-slate-500 mt-1 font-normal">
            Protocolo operativo para reposiciones, recambios y seguimiento de terminales de pago.
          </p>
        </div>

        {/* Global Policy Banner */}
        <div className="w-full bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4 md:p-5 flex items-start gap-3.5 shadow-2xs">
          <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0 mt-0.5">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div className="flex flex-col gap-1 text-xs">
            <span className="font-bold text-amber-900">
              Aclaración general del equipo de soporte
            </span>
            <p className="text-amber-800/90 leading-relaxed font-normal">
              <strong>No se realizan envíos iniciales ni continuos para México ni Argentina</strong> desde soporte Fudo.
              Únicamente se generan envíos desde <strong>Chile</strong> para reposiciones/recambios de terminales (ej. equipo caído o bloqueado) o bajo solicitud expresa de un Ejecutivo de Cuentas de Chile. Para el resto de casos, solo se brinda seguimiento.
            </p>
          </div>
        </div>

        {/* 3 Country Action Blocks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* BLOCK 1: CHILE (Shipit) */}
          <div className="bg-white rounded-2xl border-2 border-slate-900 p-6 shadow-sm flex flex-col justify-between relative">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇨🇱</span>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 leading-tight">
                      Chile
                    </h2>
                    <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full inline-block mt-0.5">
                      Shipit • Reposiciones
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Máx 3 días hábiles</span>
                </div>
              </div>

              {/* Direct Access Button */}
              <div className="mt-4">
                <a
                  href="https://app.shipit.cl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold shadow-2xs transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-emerald-400" />
                    Ingresar a Shipit
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Step by step info */}
              <div className="flex flex-col gap-3 mt-4 text-xs">
                {/* ID Rule */}
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-0.5">
                    1. Identificador de Envío (ID)
                  </span>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Corresponde al <strong>ID de Dash</strong> del cliente. Si ya tiene un envío registrado, agrega extensión consecutiva (ej: <code className="bg-white px-1 py-0.2 rounded border border-slate-200 font-mono">.1</code>, <code className="bg-white px-1 py-0.2 rounded border border-slate-200 font-mono">.2</code>).
                  </p>
                </div>

                {/* Kit contents */}
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-1">
                    2. Kit estándar incluido:
                  </span>
                  <ul className="flex flex-col gap-1 text-[11px] text-slate-600">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
                      <span><strong>Terminal:</strong> Uroba estándar / Uroba Nueva "N". (<em>M90 solo con autorización de Ronald Perdomo</em>).</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
                      <span><strong>SIM:</strong> Chip Entel para Uroba nuevas; SIM Entel M90 para M90.</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 shrink-0 mt-0.5" />
                      <span><strong>Rollos:</strong> 5 unidades por terminal (ej: 2 terminales = 10 rollos).</span>
                    </li>
                  </ul>
                </div>

                {/* Courier selection & cut-off */}
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100 text-[11px] text-slate-600 leading-relaxed">
                  <p>
                    <strong>Courier:</strong> Selección Manual. Elegir exclusivamente la opción más económica entre <strong>Blue Express</strong> o <strong>Starken</strong>.
                  </p>
                  <p className="mt-1 text-slate-500">
                    * Envíos pasadas las 20:00 hs cuentan a partir del siguiente día hábil.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Register note */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-600" />
                Registrar en Excel Chile
              </span>
              <span className="text-slate-400">Obligatorio</span>
            </div>
          </div>

          {/* BLOCK 2: ARGENTINA (Tracking de Pick) */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇦🇷</span>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 leading-tight">
                      Argentina
                    </h2>
                    <span className="text-[11px] font-medium text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full inline-block mt-0.5">
                      Tracking de Pick • Seguimiento
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Máx 6 días hábiles</span>
                </div>
              </div>

              {/* Direct Access Button */}
              <div className="mt-4">
                <a
                  href="https://pick.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-100 hover:bg-slate-200/80 text-slate-800 rounded-xl text-xs font-semibold transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-slate-600" />
                    Plataforma Tracking de Pick
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

              {/* Step by step info */}
              <div className="flex flex-col gap-3 mt-4 text-xs">
                {/* Search flow */}
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-1">
                    1. Procedimiento de Rastreo
                  </span>
                  <ol className="flex flex-col gap-1 text-[11px] text-slate-600 list-decimal list-inside">
                    <li>Buscar el <strong>ID de Dash</strong> en el Excel de control de Argentina.</li>
                    <li>Copiar el <strong>código de Pick</strong> correspondiente.</li>
                    <li>Ingresar al tracking y compartir el link de seguimiento al cliente.</li>
                  </ol>
                </div>

                {/* Recambios & Hardware */}
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-1">
                    2. En caso de Recambios:
                  </span>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Cargar el <strong>folio interno</strong> con los datos completos del equipo averiado y <strong>canalizarlo directamente con el equipo local de Argentina</strong>.
                  </p>
                </div>

                {/* Scope notice */}
                <div className="p-3 bg-amber-50/50 rounded-xl border border-amber-100 text-[11px] text-amber-800 leading-relaxed">
                  <span className="font-semibold block mb-0.5">Nota importante:</span>
                  Soporte no emite guías ni despachos nuevos para Argentina. Solo se gestiona rastreo y enlace para el comercio.
                </div>
              </div>
            </div>

            {/* Bottom Register note */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <FileSpreadsheet className="w-3.5 h-3.5 text-blue-600" />
                Excel de Control Argentina
              </span>
              <span className="text-slate-400">Solo consulta</span>
            </div>
          </div>

          {/* BLOCK 3: MÉXICO (Equipo Local) */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇲🇽</span>
                  <div>
                    <h2 className="text-sm font-bold text-slate-900 leading-tight">
                      México
                    </h2>
                    <span className="text-[11px] font-medium text-purple-700 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-full inline-block mt-0.5">
                      Equipo Local • Derivación
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                  <Layers className="w-3.5 h-3.5 text-slate-400" />
                  <span>Sin tracking propio</span>
                </div>
              </div>

              {/* Direct Access Action */}
              <div className="mt-4">
                <div className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl text-xs font-semibold">
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4 text-purple-600" />
                    Derivación a México
                  </span>
                  <span className="text-[10px] text-slate-400 font-normal">Canal Interno</span>
                </div>
              </div>

              {/* Step by step info */}
              <div className="flex flex-col gap-3 mt-4 text-xs">
                {/* Protocol explanation */}
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-1">
                    1. Derivación Directa
                  </span>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    No se dispone de plataforma de seguimiento propia ni se gestionan envíos desde el equipo de soporte regional.
                  </p>
                </div>

                {/* Instructions */}
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-1">
                    2. ¿Qué hacer ante un reclamo?
                  </span>
                  <p className="text-slate-600 leading-relaxed text-[11px]">
                    Cualquier consulta sobre estados de envío o recambio debe ser derivada inmediatamente con el <strong>equipo local de México</strong> vía canal interno o ticket asignado.
                  </p>
                </div>

                {/* Client communication */}
                <div className="p-3 bg-slate-50/80 rounded-xl border border-slate-100">
                  <span className="font-semibold text-slate-800 block mb-1">
                    3. Respuesta al cliente:
                  </span>
                  <p className="text-slate-600 leading-relaxed text-[11px] italic">
                    "Hola! Estamos coordinando el estado de tu terminal con el equipo de logística de México. Te estaremos contactando en breve con la confirmación."
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Register note */}
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-600" />
                Gestión Exclusiva Local
              </span>
              <span className="text-slate-400">México</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

