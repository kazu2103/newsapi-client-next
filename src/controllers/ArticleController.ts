import { ListArticlesInteractor } from "../interactors/ListArticleInteractor";
import { ListArticlesInputData } from "../usecases/data/ListArticles";

export class ArticleController {
  listArticle(input: ListArticlesInputData) {
    const useCase = new ListArticlesInteractor();
    return useCase.listArticles(input);
  }
}