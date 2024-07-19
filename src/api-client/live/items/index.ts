import { type ItemsApiClientEndpoints, type ItemsApiClientOptions, ItemsApiClientModel, type ItemsApiClientInterface } from "@/api-client/models/items"

const options: ItemsApiClientOptions = {
  endpoints: {
    fetchItems: "/path/to/your/real/api/endpoint",
  },
}

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(options)

export { itemsApiClient }
