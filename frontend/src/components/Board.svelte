<script>
  import { currentGuess, guesses, attemptNumber } from '../store.js';

  let displayRows = Array(5)
    .fill(null)
    .map(() => Array(5).fill(''));

  $: $guesses.forEach((guess, index) => {
    displayRows[index] = guess.padEnd(5, ' ').split('');
  });

  $: if ($attemptNumber < 5) {
    displayRows[$attemptNumber] = $currentGuess.padEnd(5, ' ').split('');
  }
</script>

<div class="board">
  {#each displayRows as row, i}
    <div class="row">
      {#each row as letter, j}
        <div class="cell">{letter}</div>
      {/each}
    </div>
  {/each}
</div>

<style>
  .board {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 3vh;
  }
  .row {
    display: flex;
    justify-content: center;
    padding: 0.5vh 0;
  }
  .cell {
    width: 7vh;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5vh 0.5vh;
    border: 0.3vh solid #ccc;
    border-radius: 2vh;
    font-size: 2rem;
    background-color: #1a1a1a;
  }
</style>
