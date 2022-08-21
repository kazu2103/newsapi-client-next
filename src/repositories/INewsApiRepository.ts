import { EverythingRequest, EverythingResponse } from "../interfaces/api/Everything";

export interface INewsApiRepository {
  everything(request: EverythingRequest): Promise<EverythingResponse>
}