import type { ApiClientInterface } from "./models/ApiClient.interface"
import { apiMockClient } from "./mock"
import { apiLiveClient } from "./live"

let env: string = "mock"

if (import.meta.env && import.meta.env.VITE_API_CLENT) {
  env = import.meta.env.VITE_API_CLENT.trim()
}

let apiClient: ApiClientInterface

if (env === "live") {
  apiClient = apiLiveClient
} else {
  apiClient = apiMockClient
}

export { apiClient }
