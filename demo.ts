export function rollDie(): number {
  return Math.floor(Math.random() * 6) + 1;
}

export function rollDice(): [number, number] {
    return [rollDie(), rollDie()];
}

export function diceSum(dice: [number, number]): number {
    return dice[0] + dice[1];
}

export class Knobelscheit {
  private flippedNumbers: number[] =[];
  getNumbers(): number[] {
    return [1,2,3,4,5,6,7,8,9];
  }
  getFlippedNumbers(): number[] {
    return [...this.flippedNumbers];
  }
  getOpenNumbers(): number[] {
    return this.getNumbers().filter(
      (number) => !this.flippedNumbers.includes(number)
    );
  }
  isFlipped(number: number): boolean {
    return this.flippedNumbers.includes(number);
  }
}