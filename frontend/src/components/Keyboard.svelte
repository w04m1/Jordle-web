<script>
  import { currentGuess, guesses, gameStatus } from "../store.js";

  function handleKeyClick(key) {
    if (key === "Enter") {
      // TODO: handle the enter key press
      guesses.update((current) => [...current, $currentGuess]);
      currentGuess.set("");
    } else if (key === "Backspace") {
      currentGuess.update((value) => value.slice(0, -1));
    } else {
      currentGuess.update((value) => (value.length < 5 ? value + key : value));
    }
  }
</script>

<div class="keyboard">
  {#each "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("") as key}
    <button on:click={() => handleKeyClick(key)}>{key}</button>
  {/each}
  <button on:click={() => handleKeyClick("Enter")}>Enter</button>
  <button on:click={() => handleKeyClick("Backspace")}>Backspace</button>
</div>

<style>
  .keyboard {
    /* TODO: keyboard styles */
  }
  button {
    /* TODO: key styles */
  }
</style>
