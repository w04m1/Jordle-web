import { writable } from 'svelte/store';

export const currentGuess = writable('');
export const attemptNumber = writable(0);
export const guesses = writable([]);
export const gameStatus = writable('playing');
