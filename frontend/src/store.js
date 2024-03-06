import { writable } from "svelte/store";

export const currentGuess = writable("");
export const guesses = writable([]);
export const gameStatus = writable("playing");
