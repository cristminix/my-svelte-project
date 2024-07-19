import { type HttpClientConfigInterface, HttpClientAxios, HttpClientFetch, type HttpClientInterface } from "./models"

export * from "./models"

let _httpClient: HttpClientInterface | undefined = undefined
export const useHttpClient = () => {
  if (!_httpClient) {
    const clientType = "fetch"
    if (clientType === "fetch") {
      _httpClient = new HttpClientFetch()
    } else if (clientType === "axios") {
      _httpClient = new HttpClientAxios()
    } else {
      throw new Error("http client not found")
    }
  }
  return _httpClient as HttpClientInterface
}
