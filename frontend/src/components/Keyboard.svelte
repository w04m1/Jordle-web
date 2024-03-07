<script>
  import {
    currentGuess,
    guesses,
    gameStatus,
    attemptNumber,
  } from '../store.js';

  const rows = ['QWERTYUIOP', 'ASDFGHJKL', 'ZXCVBNM'];

  function handleKeyClick(key) {
    if (key === 'Enter' && $currentGuess.length === 5) {
      guesses.update(n => [...n, $currentGuess]);
      currentGuess.set('');
      attemptNumber.update(n => n + 1);
    } else if (key === 'Backspace') {
      currentGuess.update(c => c.slice(0, -1));
    } else if ($currentGuess.length < 5) {
      currentGuess.update(c => c + key);
    }
  }
</script>

<div class="keyboard">
  {#each rows as row}
    <div class="row">
      {#if row === 'ZXCVBNM'}
        <button class="function" on:click={() => handleKeyClick('Backspace')}
          >&#x232B;</button
        >
      {/if}
      {#each row.split('') as letter}
        <button class="letter" on:click={() => handleKeyClick(letter)}
          >{letter}</button
        >
      {/each}
      {#if row === 'ZXCVBNM'}
        <button
          class="function"
          style="font-weight: bold"
          on:click={() => handleKeyClick('Enter')}>&crarr;</button
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
    font-size: 1.5rem;
    margin: 0.5vh;
    padding: 1.5vh 2vh;
    flex-grow: 1;
    min-width: 3vb;
    max-width: 6vh;
  }

  @media (max-width: 590px) {
  }
</style>
