"use client";

import React, { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { ArticleList } from "@/components/ArticleList";
import { ProtocolView } from "@/components/ProtocolView";
import { ShipmentsSection } from "@/components/ShipmentsSection";
import { CobrosSection } from "@/components/CobrosSection";
import { NewArticleModal } from "@/components/NewArticleModal";
import { initialArticles } from "@/data/mockArticles";
import { Article } from "@/types";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>(initialArticles);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(
    initialArticles[0] ?? null
  );
  const [activeTab, setActiveTab] = useState("centro-de-ayuda");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileView, setMobileView] = useState<"list" | "detail">("detail");
  const [isNewArticleOpen, setIsNewArticleOpen] = useState(false);

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    setMobileView("detail");
  };

  const handleAddArticle = (newArticle: Article) => {
    setArticles((prev) => [newArticle, ...prev]);
    setSelectedArticle(newArticle);
    setMobileView("detail");
  };

  const getSectionTitle = () => {
    switch (activeTab) {
      case "centro-de-ayuda":
        return "Centro de Ayuda";
      case "despachos-envios":
        return "Despachos y Envíos";
      case "cobros-liquidacion":
        return "Cobros y Liquidación";
      case "terminales-pos":
        return "Terminales POS";
      case "anulaciones-disputas":
        return "Anulaciones y Disputas";
      default:
        return "Centro de Ayuda";
    }
  };

  return (
    <div className="flex h-screen w-full bg-[#f8fafc] text-slate-800 overflow-hidden font-sans select-none antialiased">
      {/* 1. Left Navigation Sidebar */}
      <Sidebar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        isOpenMobile={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
        articlesCount={articles.length}
      />

      {/* 2. Main Content Workspace */}
      <div className="flex-1 flex flex-col min-w-0 h-full w-full">
        {/* Top Header & Breadcrumbs */}
        <Header
          currentSectionTitle={getSectionTitle()}
          onNewArticle={() => setIsNewArticleOpen(true)}
          onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        />

        {/* Dynamic Section Content */}
        {activeTab === "despachos-envios" ? (
          <ShipmentsSection />
        ) : activeTab === "cobros-liquidacion" ? (
          <CobrosSection />
        ) : activeTab === "centro-de-ayuda" ? (
          /* Workspace 2-Column Split: Articles Feed + Detail Protocol View */
          <main className="flex flex-1 min-h-0 w-full overflow-hidden bg-slate-50/50">
            {/* Middle Column: Articles List */}
            <div
              className={`w-full md:w-auto h-full ${
                mobileView === "list" ? "block" : "hidden md:block"
              }`}
            >
              <ArticleList
                articles={articles}
                selectedArticle={selectedArticle}
                onSelectArticle={handleSelectArticle}
              />
            </div>

            {/* Right Column: Protocol Detail View */}
            <div
              className={`flex-1 h-full min-w-0 w-full ${
                mobileView === "detail" ? "block" : "hidden md:block"
              }`}
            >
              <ProtocolView
                article={selectedArticle}
                onBackMobile={() => setMobileView("list")}
              />
            </div>
          </main>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white/40">
            <div className="max-w-md p-8 bg-white rounded-2xl border border-slate-200 shadow-2xs">
              <h3 className="text-base font-bold text-slate-900 mb-1">
                {getSectionTitle()}
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Módulo en preparación para el equipo de soporte de Fudo Pagos.
              </p>
              <button
                type="button"
                onClick={() => setActiveTab("despachos-envios")}
                className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Ver Despachos y Envíos
              </button>
            </div>
          </div>
        )}
      </div>

      {/* New Article Modal */}
      <NewArticleModal
        isOpen={isNewArticleOpen}
        onClose={() => setIsNewArticleOpen(false)}
        onAddArticle={handleAddArticle}
      />
    </div>
  );
}
