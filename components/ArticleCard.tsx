"use client";

import React from "react";
import { Clock, ArrowRight, ChevronRight } from "lucide-react";
import { Article } from "@/types";

interface ArticleCardProps {
  article: Article;
  isSelected: boolean;
  onSelect: (article: Article) => void;
}

export function ArticleCard({ article, isSelected, onSelect }: ArticleCardProps) {
  return (
    <div
      onClick={() => onSelect(article)}
      className={`rounded-2xl p-5 bg-white transition-all cursor-pointer select-none text-left relative ${
        isSelected
          ? "border-2 border-slate-900 shadow-xs"
          : "border border-slate-200/90 hover:border-slate-300 hover:shadow-2xs"
      }`}
    >
      {/* Top Meta Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          {/* Badge Number */}
          {isSelected ? (
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold">
              {article.number}
            </span>
          ) : (
            <span className="w-6 h-6 flex items-center justify-center text-xs font-semibold text-slate-400">
              {article.number}
            </span>
          )}

          {/* Category Tag */}
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
            {article.category}
          </span>

          {/* Reading Time */}
          <span className="flex items-center gap-1 text-[11px] text-slate-400 font-normal">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>{article.readTime}</span>
          </span>
        </div>

        {/* Right Arrow Icon */}
        <div className="text-slate-400">
          {isSelected ? (
            <ArrowRight className="w-4 h-4 text-slate-900" />
          ) : (
            <ChevronRight className="w-4 h-4 text-slate-400" />
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm font-bold text-slate-900 mt-2.5 leading-snug">
        {article.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-slate-500 mt-1.5 leading-relaxed font-normal">
        {article.description}
      </p>

      {/* Bottom status badge */}
      {isSelected ? (
        <div className="flex items-center justify-end mt-4 pt-1 text-[11px]">
          <span className="text-emerald-600 font-medium text-[11px]">
            {article.updatedStatus}
          </span>
        </div>
      ) : null}
    </div>
  );
}
