import { assert, assertEquals } from "@std/assert";
import { rollDie, rollDice, diceSum, Knobelscheit } from "./demo.ts";

Deno.test("rollDie gibt eine Zahl zwischen 1 und 6 zurück", () => {
  for (let i = 0; i < 100; i++) {
    const result = rollDie();
  
    assert(result >= 1);
    assert(result <= 6);
    assert(Number.isInteger(result));
  }
});

Deno.test("rollDie gibt zwei Würfel zurück", () => {
    const dice = rollDice();
    assertEquals(dice.length, 2);
    assert(dice[0] >= 1);
    assert(dice[0] <= 6);
    assert(dice[1] >= 1);
    assert(dice[1] <= 6);
});

Deno.test("diceSum berechnet Augensumme korrekt", () => {
    const result = diceSum([3, 4]);
    assertEquals(result, 7);
});

Deno.test("Knobelscheit startet mit allen offenen Zahlen", () => {
  const game = new Knobelscheit();
  assertEquals(game.getNumbers(), [1,2,3,4,5,6,7,8,9]);
  assertEquals(game.getOpenNumbers(), [1,2,3,4,5,6,7,8,9]);
  assertEquals(game.getFlippedNumbers(), []);
});