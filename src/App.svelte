<script lang="ts">
  import ItemsView from "./views/Items.view.svelte"
</script>

<main>
  <div class="home">
    <!-- [{JSON.stringify(import.meta.env)}] -->
    <ItemsView />
  </div>
</main>

<style>
  .home {
    padding: 20px;
  }
</style>
