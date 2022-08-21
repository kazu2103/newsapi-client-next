import { ListArticlesInteractor } from "../interactors/ListArticleInteractor";
import { ListArticlesInputData } from "../usecases/data/ListArticles";

export class ArticleController {
  listArticle(input: ListArticlesInputData) {
    console.log("controller")

    const useCase = new ListArticlesInteractor();
    return useCase.listArticles(input);
  }
}