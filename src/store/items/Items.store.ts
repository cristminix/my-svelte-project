import * as SvelteStore from "svelte/store"
import type { ItemsStateInterface, ItemsStoreInterface, ItemsStoreActionsInterface, ItemsStoreGettersInterface } from "./models"
import type { ItemInterface } from "@/models/items/Item.interface"
import { apiClient } from "@/api-client"
const writableItemsStore = SvelteStore.writable<ItemsStateInterface>({
  loading: false,
  items: [],
})

export function useItemsStore(): ItemsStoreInterface {
  const actions: ItemsStoreActionsInterface = {
    loadItems: async () => {
      writableItemsStore.update((state) => {
        state.loading = true
        state.items = []
        return state
      })
      const data = await apiClient.items.fetchItems()
      writableItemsStore.update((state) => {
        state.items = data
        state.loading = false
        return state
      })
    },
    toggleItemSelected: async (item: ItemInterface) => {
      writableItemsStore.update((state) => {
        const itemIndex = (state.items || []).findIndex((a) => a.id === item.id)
        if (itemIndex < 0) {
          console.warn(`ItemsStore: action: toggleItemSelected: Couldnt find item in our state`)
          return state
        }
        state.items[itemIndex].selected = !state.items[itemIndex].selected
        state.loading = state.loading
        return state
      })
    },
  }

  const loading = SvelteStore.derived(writableItemsStore, ($state) => $state.loading)
  const items = SvelteStore.derived(writableItemsStore, ($state) => $state.items)

  const getters: ItemsStoreGettersInterface = {
    loading,
    items,
  }

  return {
    getters,
    actions,
  }
}
