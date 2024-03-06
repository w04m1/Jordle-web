<script>
  import { guesses } from '../store.js';

  let rows = [];
  $: $guesses, rows = [...$guesses];
</script>

<div class="board">
  {#each rows as row, i}
    <div class="row">
      {#each row.split('') as letter, j}
        <div class="cell">{letter}</div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .board { /* TODO: board styles */ }
  .row { /* TODO: row styles */ }
  .cell { /* TODO: cell styles */ }
</style>
