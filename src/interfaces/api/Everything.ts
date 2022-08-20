import { Article } from "../VO/Article"

export interface EverythingRequest {
  apiKey: string,
  q?: string,
  searchIn?: SearchIn,
  sources?: string,
  domain?: string,
  excludeDomain?: string,
  from?: string,
  to?: string,
  language?: Language,
  sortBy?: string,
  page?: string
}

export interface EverythingResponse {
  status: string,
  totalResult: number,
  articles: Article[],
  source: object,
  author: string,
  title: string,
  description: string,
  publishedAt: string,
  content: string,
}

export type SearchIn = "title" | "description" | "content"
export type Language = "ar" | "de" | "en" | "es" | "fr" | "he" | "it" | "nl" | "no" | "pt" | "ru" | "sv" | "ud" | "zh"