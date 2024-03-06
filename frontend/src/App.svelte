<script>
  import Board from "./components/Board.svelte";
  import Keyboard from "./components/Keyboard.svelte";
</script>

<main>
  <h1>Jordle</h1>
  <Board />
  <Keyboard />
</main>

<style>
  h1:hover {
    color: red;
    text-shadow: 0 0 100px red;
    transition:
      text-shadow 1s,
      color 1s;
  }
</style>
