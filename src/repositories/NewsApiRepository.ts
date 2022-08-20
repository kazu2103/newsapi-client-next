import { Axios } from "axios";
import { EverythingResponse } from "../interfaces/api/Everything";

export class NewsApiRepository {
  // シングルトンインスタンスを入れておく箱
  private static _client: NewsApiRepository;
  private URL = "http://localhost:5999/article";

  public static get client(): NewsApiRepository {
    if(!this._client) {
      console.log("create NewsApiClient");
      this._client = new NewsApiRepository();
    }

    return this._client
  }
  
  everything = () => {
    const axios = new Axios();
    return axios.get(this.URL)
      .then((res) => {
        return res.data as EverythingResponse
      })
    }
}