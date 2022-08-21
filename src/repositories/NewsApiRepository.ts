import { EverythingRequest, EverythingResponse } from "../interfaces/api/Everything";
import { INewsApiRepository } from "./INewsApiRepository";

const axios = require('axios').default;
export class NewsApiRepository implements INewsApiRepository{
  // シングルトンインスタンスを入れておく箱
  private static _repository: NewsApiRepository;
  private URL = "http://localhost:5999/article";

  public static get repository(): NewsApiRepository {
    if(!this._repository) {
      console.log("create NewsApiClientRepository");
      this._repository = new NewsApiRepository();
    }

    return this._repository
  }
  
  everything = async (request: EverythingRequest): Promise<EverythingResponse> => {
    const result = axios.get(this.URL)
      .then((res: any) => {
        return res.data as EverythingResponse;
      })
      .catch((err: any) => {
        throw Error(err);
      });
    console.log(result);
    return result;
  }
}