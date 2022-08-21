import { ListArticlesInputData, ListArticlesOutputData } from "./data/ListArticles";

export interface ListArticlesUseCase {
  listArticles(data: ListArticlesInputData): Promise<ListArticlesOutputData> ;
}