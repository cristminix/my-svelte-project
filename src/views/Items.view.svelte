<script lang="ts">
  import { onMount } from "svelte"
  import type { ItemInterface } from "@/models/items/Item.interface"
  import ItemsListComponent from "@/components/items/ItemsList.component.svelte"
  import { useAppStore } from "@/store"
  const { itemsStore } = useAppStore()
  const { loading, items } = itemsStore.getters
  function onSelectItem(event: CustomEvent<{ item: ItemInterface }>) {
    const item = event.detail.item
    itemsStore.actions.toggleItemSelected(item)
  }

  onMount(async () => {
    itemsStore.actions.loadItems()
  })
</script>

<div>
  <ItemsListComponent loading={$loading} items={$items} selectItem={onSelectItem} />
</div>
