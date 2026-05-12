import { assert } from "node:console";
import { rollDie } from "./demo.ts";

Deno.test("rollDie gibt eine Zahl zwischen 1 und 6 zurück", () => {
  for (let i = 0; i < 100; i++) {
    const result = rollDie();
  
    assert(result >= 1);
    assert(result <= 6);
    assert(Number.isInteger(result));
  }
});