import { EverythingRequest } from "../interfaces/api/Everything";
import { INewsApiRepository } from "../repositories/INewsApiRepository";
import { NewsApiRepository } from "../repositories/NewsApiRepository";
import { ListArticlesInputData, ListArticlesOutputData } from "../usecases/data/ListArticles";
import { ListArticlesUseCase } from "../usecases/ListArticlesUseCase";

export class ListArticlesInteractor implements ListArticlesUseCase {

  private repository: INewsApiRepository;

  constructor() {
    this.repository = NewsApiRepository.repository
  }

  async listArticles(data: ListArticlesInputData): Promise<ListArticlesOutputData> {
    const request = data as EverythingRequest;
    console.log(request)
    console.log(this.repository.everything)
    const result = await this.repository.everything(request);
    return result;
  }
  
}