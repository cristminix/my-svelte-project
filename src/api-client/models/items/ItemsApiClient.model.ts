// import axios, { type AxiosRequestConfig, AxiosError, type AxiosResponse } from "axios"
import { useHttpClient, HttpRequestType, type HttpRequestParamsInterface } from "@/http-client"
import type { ItemsApiClientOptions, ItemsApiClientEndpoints } from "./ItemsApiClientOptions.interface"
import type { ItemsApiClientInterface } from "./ItemsApiClient.interface"
import type { ItemInterface } from "@/models"

/**
 * @Name ItemsApiClientModel
 * @description
 * Implements the ItemsApiClientInterface interface
 */
export class ItemsApiClientModel implements ItemsApiClientInterface {
  private readonly endpoints!: ItemsApiClientEndpoints
  private readonly mockDelay: number = 0
  constructor(options: ItemsApiClientOptions) {
    this.endpoints = options.endpoints
    if (options.mockDelay) {
      this.mockDelay = options.mockDelay
    }
  }
  fetchItems(): Promise<ItemInterface[]> {
    return new Promise<ItemInterface[]>((resolve) => {
      const requestParameters: HttpRequestParamsInterface = {
        requestType: HttpRequestType.get,
        endpoint: this.endpoints.fetchItems,
        requiresToken: false,
        mockDelay: this.mockDelay,
      }
      resolve(useHttpClient().request<ItemInterface[]>(requestParameters))
    })
  }
}
