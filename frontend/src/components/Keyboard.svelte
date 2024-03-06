<script>
  import { currentGuess, guesses, gameStatus } from "../store.js";

  const rows = ["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"];

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
  {#each rows as row}
    <div class="row">
      {#if row === "ZXCVBNM"}
        <button class="function" on:click={() => handleKeyClick("Backspace")}
          >&#x232B;</button
        >
      {/if}
      {#each row.split("") as letter}
        <button class="letter" on:click={() => handleKeyClick(letter)}
          >{letter}</button
        >
      {/each}
      {#if row === "ZXCVBNM"}
        <button
          class="function"
          style="font-weight: bold"
          on:click={() => handleKeyClick("Enter")}>&crarr;</button
        >
      {/if}
    </div>
  {/each}
</div>

<style>
  .keyboard {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .row {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .letter,
  .function {
    margin: 5px;
    padding: 10px 15px;
    flex-grow: 1;
    min-width: 40px;
    max-width: 60px;
  }

  @media (max-width: 590px) {
    .letter,
    .function {
      padding: 5px 10px;
      min-width: 20px;
    }
  }
</style>
