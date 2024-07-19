<script lang="ts">
  import type { ItemInterface } from "@/models/items/Item.interface"
  import ItemComponent from "./children/Item.component.svelte"
  import Loader from "../shared/Loader.component.svelte"
  // expose a property called items with a default value of a blank array
  export let loading = false

  export let items: ItemInterface[] = []
  type SelectItemCallbackInterface = (event: CustomEvent<{ item: ItemInterface }>) => void
  export let selectItem: SelectItemCallbackInterface = (event: CustomEvent<{ item: ItemInterface }>) => {}
</script>

<div>
  <h3>My Items - loading: {loading}</h3>
  {#if loading}
    <Loader />
  {/if}
  {#if !loading}
    <ul>
      {#each items as item}
        <!-- <li on:click={() => handleClick(item)}>
        {item.name}[{item.selected}]
      </li> -->
        <ItemComponent {item} on:selectItem={selectItem} />
      {/each}
    </ul>
  {/if}
</div>

<style>
  ul {
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }
</style>
