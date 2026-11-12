"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  ChevronDown,
  CheckCircle2,
  XCircle,
  FileSpreadsheet,
  Globe,
  Bell,
  ShieldCheck,
  Landmark,
  RefreshCw,
} from "lucide-react";

/* ─── Accordion Section ─── */
function Section({
  number,
  title,
  subtitle,
  badge,
  badgeStyle,
  isOpen,
  onToggle,
  children,
}: {
  number: number;
  title: string;
  subtitle: string;
  badge?: string;
  badgeStyle?: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-slate-50/50 transition-colors"
      >
        {/* Number circle */}
        <div
          className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold transition-all ${isOpen
            ? "bg-slate-900 text-white"
            : "border-2 border-slate-300 text-slate-500"
            }`}
        >
          {number}
        </div>

        {/* Title + subtitle */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-slate-900">{title}</p>
          <p className="text-xs text-slate-400 mt-0.5 truncate">{subtitle}</p>
        </div>

        {/* Badge + chevron */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {badge && (
            <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${badgeStyle}`}>
              {badge}
            </span>
          )}
          <ChevronDown
            className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="border-t border-slate-100 px-6 pb-6 pt-5 space-y-5">
          {children}
        </div>
      )}
    </div>
  );
}

/* ─── Level card (Jerarquía) ─── */
function LevelCard({
  dotColor,
  title,
  badge,
  badgeStyle,
  desc,
  num,
  bg,
}: {
  dotColor: string;
  title: string;
  badge: string;
  badgeStyle: string;
  desc: string;
  num: string;
  bg: string;
}) {
  return (
    <div className={`flex gap-4 p-4 rounded-2xl border ${bg}`}>
      {/* Colored dot */}
      <span className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1 ${dotColor}`} />
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <span className="text-sm font-bold text-slate-900">{title}</span>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeStyle}`}>
            {badge}
          </span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">{desc}</p>
      </div>
      {/* Number */}
      <span className="text-sm font-bold text-slate-200 flex-shrink-0">{num}</span>
    </div>
  );
}

/* ─── Country link card ─── */
function CountryLink({
  href,
  flag,
  label,
  note,
}: {
  href: string;
  flag: string;
  label: string;
  note: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all group"
    >
      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm text-xl">
        {flag}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-900">{label}</p>
        <p className="text-xs text-slate-400 mt-0.5 truncate">{note}</p>
      </div>
      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-600 transition-colors flex-shrink-0" />
    </a>
  );
}

/* ─── Step row ─── */
function Step({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        <div className="w-7 h-7 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
          {n}
        </div>
        <div className="w-px flex-1 bg-slate-100 min-h-4" />
      </div>
      <div className="pb-5 flex-1">
        <p className="text-sm font-semibold text-slate-900 mb-1">{title}</p>
        <div className="text-xs text-slate-500 leading-relaxed space-y-2">{children}</div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════ */
export function CobrosSection() {
  const [open, setOpen] = useState<number>(1);

  return (
    <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] p-6 md:p-8 lg:p-10 w-full min-w-0 bg-[#f8fafc]">
      <div className="flex flex-col gap-4 max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="mb-7">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
              Cobros y Liquidación
            </span>
          </div>
          <h1 className="text-[26px] font-bold text-slate-900 tracking-tight leading-tight">
            Verificación de Transacciones
          </h1>
          <p className="text-sm text-slate-500 mt-1.5 max-w-lg leading-relaxed">
            Protocolo oficial para auditar cobros duplicados, pagos descontados no acreditados y gestionar anulaciones administrativas de forma infalible.
          </p>
        </div>

        {/* ════════════════════════════════════
            1 — Jerarquía de Verificación
        ════════════════════════════════════ */}
        <Section
          number={1}
          title="Jerarquía de Verificación"
          subtitle="Secuencia técnica de menor a mayor fiabilidad hasta confirmar el cobro"
          isOpen={open === 1}
          onToggle={() => setOpen(open === 1 ? 0 : 1)}
        >
          {/* Flow */}
          <div className="flex flex-wrap items-center gap-2 p-4 bg-slate-50 rounded-2xl border border-slate-200">
            {[
              { label: "Terminal POS", dark: true },
              { label: "Geopagos", dark: false },
              { label: "Adquirente (Klap / Payway)", dark: false },
              { label: "Marca (Visa / MC)", dark: false },
              { label: "Banco Emisor", dark: false },
            ].map((node, i, arr) => (
              <React.Fragment key={node.label}>
                <span
                  className={`text-xs font-semibold px-3 py-1.5 rounded-xl ${node.dark
                    ? "bg-slate-900 text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-700"
                    }`}
                >
                  {node.label}
                </span>
                {i < arr.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Levels */}
          <div className="space-y-3">
            <LevelCard
              dotColor="bg-amber-400"
              title="Sistema Fudo — Cobros"
              badge="Referencial"
              badgeStyle="bg-amber-100 text-amber-700"
              desc="Primer vistazo preliminar. Puede no mostrar una venta que sí se cobró por pérdida temporal de sincronización de la terminal. No es definitivo."
              num="01"
              bg="bg-gradient-to-r from-amber-50/80 to-orange-50/50 border-amber-200/60"
            />
            <LevelCard
              dotColor="bg-blue-500"
              title="Backoffice / Geopagos"
              badge="Confiable"
              badgeStyle="bg-blue-100 text-blue-700"
              desc="Acceso directo a las 3 plataformas regionales (Chile, Argentina y México). Mucho más confiable que el punto de venta local, con precisión del 99.8%."
              num="02"
              bg="bg-gradient-to-r from-blue-50/80 to-sky-50/50 border-blue-200/60"
            />
            <LevelCard
              dotColor="bg-emerald-500"
              title="Adquirente — Confirmación final"
              badge="Definitivo 100%"
              badgeStyle="bg-emerald-100 text-emerald-700"
              desc="Si está liquidado aquí, el cobro es 100% real. En Chile (Klap): acceso directo en portal Klapeador. Argentina/México (Payway): consultar a Santiago Coltellini o Paula Bianco."
              num="03"
              bg="bg-gradient-to-r from-emerald-50/80 to-green-50/50 border-emerald-200/60"
            />
          </div>
        </Section>

        {/* ════════════════════════════════════
            2 — Backoffice Geopagos
        ════════════════════════════════════ */}
        <Section
          number={2}
          title="Búsqueda en Backoffice Geopagos"
          subtitle="Procedimiento paso a paso para auditar transacciones por país"
          badge="3 países"
          badgeStyle="bg-slate-100 text-slate-600"
          isOpen={open === 2}
          onToggle={() => setOpen(open === 2 ? 0 : 2)}
        >
          {/* Links */}
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-3">
              Acceso directo
            </p>
            <div className="space-y-2">
              <CountryLink
                href="https://backend-mpos-fudo-cl.prd.geopagos.io/login"
                flag="🇨🇱"
                label="Backoffice Geopagos — Chile"
                note="backend-mpos-fudo-cl.prd.geopagos.io"
              />
              <CountryLink
                href="https://backend-mpos-fudo-ar.prd.geopagos.io/login"
                flag="🇦🇷"
                label="Backoffice Geopagos — Argentina"
                note="backend-mpos-fudo-ar.prd.geopagos.io"
              />
              <CountryLink
                href="https://idp.prd.geopagos.io/auth/realms/c7642ba3-cba4-51a0-a8d5-73fa03743516/protocol/openid-connect/auth?scope=openid&state=a61b1855046a15dfbb1539bc4ccb65d1&response_type=code&approval_prompt=auto&redirect_uri=http%3A%2F%2Fbackend-mpos-fudo-mx.prd.geopagos.io%2Fkeycloak%2Fredirect&client_id=87597b8d-47b5-50fb-b4c2-9bb5ac79f402"
                flag="🇲🇽"
                label="Backoffice Geopagos — México"
                note="backend-mpos-fudo-mx.prd.geopagos.io"
              />
            </div>
          </div>

          {/* Steps */}
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
              Pasos
            </p>
            <div>
              <Step n={1} title="Obtener identificador fiscal del cliente">
                <p>
                  Ir a <strong className="text-slate-700">Dash</strong> → buscar cuenta por ID → pestaña{" "}
                  <strong className="text-slate-700">Fudo Pagos</strong> → campo{" "}
                  <strong className="text-slate-700">Documento</strong>. Copiar el número completo.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {[
                    { tag: "RUT", sub: "Chile", s: "bg-red-50 text-red-700 border border-red-200" },
                    { tag: "CUIT", sub: "Argentina", s: "bg-sky-50 text-sky-700 border border-sky-200" },
                    { tag: "RFC", sub: "México", s: "bg-green-50 text-green-700 border border-green-200" },
                  ].map((t) => (
                    <span key={t.tag} className={`text-xs font-semibold px-2.5 py-1 rounded-xl ${t.s}`}>
                      {t.tag} <span className="font-normal opacity-70">— {t.sub}</span>
                    </span>
                  ))}
                </div>
              </Step>

              <Step n={2} title="Filtrar en la sección Transacciones">
                <p>
                  Menú izquierdo → <strong className="text-slate-700">Transacciones</strong>. Pegá el
                  documento en el campo correspondiente, ajustá el rango de fechas y hacé clic en{" "}
                  <strong className="text-slate-700">Aplicar filtro</strong>.
                </p>
              </Step>

              <Step n={3} title="Recopilar datos clave de la operación">
                <p>Anotá: fecha exacta, monto y últimos 4 dígitos de la tarjeta. Si no figura, pedile los datos al cliente.</p>
                <div className="flex gap-2 flex-wrap">
                  {["Fecha exacta", "Monto", "Últimos 4 dígitos"].map((tag) => (
                    <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-xl bg-slate-100 text-slate-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </Step>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════
            3 — Klap y Klapeador
        ════════════════════════════════════ */}
        <Section
          number={3}
          title="Klap y Klapeador 2.1"
          subtitle="Inspección de lotes bancarios y acreditaciones para terminales en Chile"
          badge="Solo Chile"
          badgeStyle="bg-red-100 text-red-600"
          isOpen={open === 3}
          onToggle={() => setOpen(open === 3 ? 0 : 3)}
        >
          {/* Portal Klap + Klapeador */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 text-xl shadow-xs">
                🇨🇱
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-slate-900">Portal Klap</p>
                <p className="text-xs text-slate-500 mt-0.5 truncate">Descarga de liquidaciones (_v2.csv)</p>
              </div>
              <a
                href="https://www.klap.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 text-slate-900 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors flex-shrink-0"
              >
                Abrir <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 shadow-md">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white">Klapeador 2.1</p>
                <p className="text-xs text-slate-400 mt-0.5 truncate">Filtrado de liquidaciones y anulación</p>
              </div>
              <a
                href="https://menu-herramientas-cl.lovable.app/klapeador"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 bg-white text-slate-900 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors flex-shrink-0"
              >
                Abrir <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Steps */}
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">Pasos</p>
            <div>
              <Step n={1} title="Descargar el archivo de liquidación en Klap">
                <p>
                  Ir al portal de Klap → <strong className="text-slate-700">Liquidaciones</strong>. Las ventas
                  se liquidan al <strong className="text-slate-700">día siguiente hábil</strong>.
                </p>
                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800">
                  <strong>Regla de fechas:</strong> Jueves → viernes. Fin de semana → lunes.{" "}
                  Preferí el archivo que termina en{" "}
                  <code className="font-mono bg-amber-100 px-1 rounded">_v2.csv</code>.
                </div>
              </Step>

              <Step n={2} title="Subir y filtrar en el Klapeador">
                <p>
                  Subí el CSV descargado → ingresá el{" "}
                  <strong className="text-slate-700">Monto de venta</strong> y/o los{" "}
                  <strong className="text-slate-700">últimos 4 dígitos</strong> → presioná{" "}
                  <strong className="text-slate-700">Filtrar</strong>.
                </p>
              </Step>

              <Step n={3} title="Interpretar el resultado">
                <div className="space-y-2">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-emerald-800">Venta débito/crédito aprobada</p>
                      <p className="text-emerald-700">Cobro procesado y liquidado correctamente.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-50 border border-red-200">
                    <XCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-red-800">Anulación</p>
                      <p className="text-red-700">La operación fue reversada o rechazada.</p>
                    </div>
                  </div>
                </div>
              </Step>
            </div>
          </div>
        </Section>

        {/* ════════════════════════════════════
            4 — Anulación Administrativa
        ════════════════════════════════════ */}
        <Section
          number={4}
          title="Tramitar Anulación Administrativa"
          subtitle="Solo cuando Klap confirma que la venta está aprobada y corresponde devolución"
          badge="Solo si Klap confirma"
          badgeStyle="bg-purple-100 text-purple-700"
          isOpen={open === 4}
          onToggle={() => setOpen(open === 4 ? 0 : 4)}
        >
          {/* Warning */}
          <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-200">
            <ShieldCheck className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">
              Seguí este orden exacto <strong>solo si confirmaste en Klap que la venta está aprobada</strong> y
              corresponde devolver el dinero (cobro duplicado, error en medio de pago, etc.).
            </p>
          </div>

          {/* Steps */}
          <div>
            <Step n={1} title="Generar el recorte de anulación en el Klapeador">
              <p>
                Marcá la casilla de la transacción en la tabla → clic en{" "}
                <strong className="text-slate-700">Crear anulación administrativa</strong>. Se descarga{" "}
                <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono">anulacion-administrativa.xlsx</code>{" "}
                con los datos exactos que pide Klap.
              </p>
            </Step>

            <Step n={2} title="Notificar en Slack">
              <p>
                Canal privado{" "}
                <span className="font-mono font-bold bg-slate-900 text-white px-2 py-0.5 rounded-lg text-[11px]">
                  #anulaciones-administrativas
                </span>
              </p>
              <p>
                Adjuntá el Excel y explicá brevemente el motivo. Ejemplo:{" "}
                <em className="text-slate-400">
                  &ldquo;Equipo, dejo la anulación del ID #14, el cliente cobró duplicado y solicita devolución.&rdquo;
                </em>
              </p>
            </Step>

            <Step n={3} title="Registrar en la planilla de control">
              <p>
                Abrí <strong className="text-slate-700">Registro de Casos — Reclamos por Transacción Mal Procesada</strong>{" "}
                y completá el formulario verde (<strong>CARGAR NUEVO CASO</strong>):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {[
                  "País, Fecha reclamo, Comercio, ID cuenta (Dash)",
                  "Transacción ID/Nro Op. — desde el Excel de anulación",
                  "Monto y Fecha de la transacción",
                  "Tipo de caso: Duplicada / Reversa fallida / Otro",
                  "Estado y Explicación detallada del caso",
                  "Fecha resolución: vacía hasta que administración resuelva",
                  "Tu correo en 'Mail del creador'",
                  "✓ Tildá el check verde de la izquierda para guardar",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0" />
                    <span className="text-xs text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-blue-50 border border-blue-200">
                <Bell className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <p className="text-blue-700">
                  Verificá notificaciones activadas para{" "}
                  <strong>scoltellini@fu.do</strong> y <strong>pbianco@fu.do</strong>.
                </p>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 text-slate-400">
                <div className="flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>Planilla — Registro de Casos <em className="text-slate-400">(link pendiente)</em></span>
                </div>
                <ExternalLink className="w-3.5 h-3.5" />
              </div>
            </Step>
          </div>
        </Section>

        {/* ════════════════════════════════════
            5 — Auditoría de Depósitos (Payouts)
        ════════════════════════════════════ */}
        <Section
          number={5}
          title="Auditoría de Depósitos (Payouts)"
          subtitle="Confirmar transferencias bancarias acreditadas y diagnosticar rechazos en AR, CL y MX"
          badge="AR · CL · MX"
          badgeStyle="bg-emerald-100 text-emerald-700"
          isOpen={open === 5}
          onToggle={() => setOpen(open === 5 ? 0 : 5)}
        >
          {/* Acceso directo a Dash Payouts */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Landmark className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white">Panel Depósitos / Payouts — Dash</p>
              <p className="text-xs text-slate-400 mt-0.5 truncate">
                dash.fu.do/fudo-payments · Estado de transferencias en Argentina, Chile y México
              </p>
            </div>
            <a
              href="https://dash.fu.do/fudo-payments"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-white text-slate-900 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors flex-shrink-0"
            >
              Abrir <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Pasos de auditoría */}
          <div>
            <p className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4">
              Cómo buscar y auditar un depósito
            </p>
            <div>
              <Step n={1} title="Filtrar la operación">
                <p>
                  En el buscador inferior (<strong className="text-slate-700">Buscar</strong>), ingresá el{" "}
                  <strong className="text-slate-700">ID de cuenta</strong> (ej.{" "}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-700">385745</code>) o el{" "}
                  <strong className="text-slate-700">ID del depósito</strong> (ej.{" "}
                  <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-700">#486923</code>).
                  También podés filtrar por rango de montos o estado:
                </p>
                <div className="flex gap-1.5 flex-wrap pt-1">
                  {[
                    { label: "Exitoso", cls: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                    { label: "Pendiente", cls: "bg-slate-100 text-slate-600 border-slate-200" },
                    { label: "En progreso", cls: "bg-blue-50 text-blue-700 border-blue-200" },
                    { label: "Fallido", cls: "bg-red-50 text-red-700 border-red-200" },
                    { label: "Informado", cls: "bg-amber-50 text-amber-700 border-amber-200" },
                    { label: "Pago manual", cls: "bg-purple-50 text-purple-700 border-purple-200" },
                  ].map((st) => (
                    <span
                      key={st.label}
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${st.cls}`}
                    >
                      {st.label}
                    </span>
                  ))}
                </div>
              </Step>

              <Step n={2} title="Revisar el detalle lateral">
                <p>
                  Al hacer clic sobre un registro de la tabla, se abre una ficha a la derecha con toda la trazabilidad:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                  {[
                    {
                      title: "Cabecera",
                      desc: "ID del depósito y estado actual (ej. #486923 — Fallido).",
                    },
                    {
                      title: "Datos generales",
                      desc: "Monto del depósito, ID de liquidación diaria, ID de cuenta, país, moneda y fecha/hora.",
                    },
                    {
                      title: "Cuenta de destino",
                      desc: "Titular (ej. PARNASO SPA), número de cuenta y tipo de documento.",
                    },
                    {
                      title: "Error del proveedor",
                      desc: "Si falló, muestra el código técnico y la descripción exacta devuelta por el banco.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <p className="text-xs font-bold text-slate-800">{item.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </Step>
            </div>
          </div>

          {/* Error más común en Chile */}
          <div className="rounded-2xl border border-red-200/80 bg-gradient-to-br from-red-50/70 to-amber-50/40 p-5 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-base">🇨🇱</span>
                <p className="text-sm font-bold text-slate-900">
                  Error más común en Chile y cómo se resuelve
                </p>
              </div>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-red-100 text-red-700">
                Rechazo bancario frecuente
              </span>
            </div>

            {/* Diagnóstico en pantalla */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              <div className="p-3 rounded-xl bg-white border border-red-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Estado de respuesta
                </p>
                <p className="text-xs font-mono font-bold text-red-700 mt-1 break-all">
                  error_creditor_account_over_limits
                </p>
              </div>
              <div className="p-3 rounded-xl bg-white border border-red-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Mensaje de respuesta
                </p>
                <p className="text-xs font-semibold text-slate-800 mt-1">
                  Error CCA 64. Cuenta Destino con restricción de Abono
                </p>
              </div>
            </div>

            {/* Significado y solución */}
            <div className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
              <div className="p-3.5 rounded-xl bg-white/80 border border-slate-200/70">
                <p className="font-bold text-slate-900 mb-1">¿Qué significa?</p>
                <p className="text-slate-600">
                  La cuenta bancaria configurada en Fudo alcanzó su{" "}
                  <strong className="text-slate-800">límite máximo de recepción de dinero</strong> (frecuente en cuentas
                  vista/RUT o cuentas nuevas con topes mensuales de abono) o posee un bloqueo bancario que impide
                  ingresar el monto transferido.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50/90 border border-emerald-200/80 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-emerald-900">
                  <RefreshCw className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>¿Qué pasa con el dinero y cómo se soluciona?</span>
                </div>
                <ul className="space-y-1 text-emerald-800 pl-5 list-disc">
                  <li>
                    El dinero <strong>no se pierde</strong> ni requiere trámites complejos de recuperación.
                  </li>
                  <li>
                    El sistema <strong>reintenta el depósito automáticamente todos los días</strong> de forma continua.
                  </li>
                  <li>
                    Para que se acredite, el cliente solo debe <strong>liberar el límite en su banco</strong> o{" "}
                    <strong>actualizar/cambiar la cuenta bancaria destino</strong> en su configuración de Fudo; en el
                    siguiente intento diario se enviará a la cuenta válida.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

      </div>
    </div>
  );
}
