import { SearchIn, Language } from "../../interfaces/api/Everything"
import { Article } from "../../interfaces/VO/Article"

export interface ListArticlesInputData {
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

export interface ListArticlesOutputData {
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