import type { RootStoreInterface } from "./models"
import { useItemsStore } from "../items"

export function useAppStore(): RootStoreInterface {
  return {
    itemsStore: useItemsStore(),
  }
}
