"use client";

import React, { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Article } from "@/types";
import { ArticleCard } from "./ArticleCard";

interface ArticleListProps {
  articles: Article[];
  selectedArticle: Article | null;
  onSelectArticle: (article: Article) => void;
  className?: string;
}

export function ArticleList({
  articles,
  selectedArticle,
  onSelectArticle,
  className = "",
}: ArticleListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");

  // Dynamically extract unique categories from the articles
  const categories = useMemo(() => {
    const cats = Array.from(new Set(articles.map((a) => a.category))).filter(Boolean);
    return ["Todas", ...cats];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    return articles.filter((article) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        article.title.toLowerCase().includes(q) ||
        article.description.toLowerCase().includes(q) ||
        article.category.toLowerCase().includes(q) ||
        article.code.toLowerCase().includes(q);

      const matchesCategory =
        selectedCategory === "Todas" ||
        article.category.toLowerCase() === selectedCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });
  }, [articles, searchQuery, selectedCategory]);

  return (
    <div
      className={`w-full md:w-[380px] lg:w-[420px] shrink-0 flex flex-col border-r border-slate-200/80 h-[calc(100vh-64px)] bg-slate-50/40 select-none ${className}`}
    >
      {/* Pinned Top Bar: Search, Category Pills & Status */}
      <div className="p-5 md:p-6 pb-3 shrink-0 flex flex-col gap-3.5 bg-slate-50/80 backdrop-blur-xs z-10 border-b border-slate-200/50">
        {/* Search Bar */}
        <div className="relative w-full shrink-0">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-slate-400" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar guías o palabras clave..."
            className="w-full pl-10 pr-9 py-2.5 bg-white border border-slate-200/90 rounded-2xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 shadow-2xs transition-all"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Categories Pills */}
        <div className="w-full shrink-0 overflow-x-auto py-1 no-scrollbar flex items-center gap-1.5">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            const count =
              cat === "Todas"
                ? articles.length
                : articles.filter(
                    (a) => a.category.toLowerCase() === cat.toLowerCase()
                  ).length;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer shrink-0 leading-normal ${
                  isActive
                    ? "bg-slate-900 text-white shadow-2xs"
                    : "bg-slate-100/90 hover:bg-slate-200/80 text-slate-600 border border-slate-200/60"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>

        {/* Counter and live status */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium px-1 shrink-0">
          <span>
            {filteredArticles.length}{" "}
            {filteredArticles.length === 1 ? "guía disponible" : "guías disponibles"}
            {searchQuery ? ` para "${searchQuery}"` : ""}
          </span>
          <span>Actualizado continuamente</span>
        </div>
      </div>

      {/* Scrollable Articles Cards Feed */}
      <div className="flex-1 overflow-y-auto p-5 md:p-6 pt-3 flex flex-col gap-3">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200/80 p-6">
            <p className="text-xs font-medium text-slate-600">
              No se encontraron guías para tu búsqueda.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("Todas");
              }}
              className="mt-3 text-xs text-slate-900 font-semibold underline underline-offset-2 cursor-pointer"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          filteredArticles.map((article) => (
            <ArticleCard
              key={article.id}
              article={article}
              isSelected={selectedArticle?.id === article.id}
              onSelect={onSelectArticle}
            />
          ))
        )}
      </div>
    </div>
  );
}
