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

  canFlip(numbers: number[], diceSum: number): boolean {
      if (numbers.length === 0) { return false; }
      const hasInvalidNumber = numbers.some(
        (number) => number < 1 || number > 9 
      );
      if (hasInvalidNumber) { return false; }
      const hasDuplicate = new Set(numbers).size !== numbers.length;
      if (hasDuplicate) { return false; }
      const hasAlreadyFlipped = numbers.some((number) => this.isFlipped(number));
      if (hasAlreadyFlipped) { return false; }
      const sum = numbers.reduce((total, number) => total + number, 0);
      return sum === diceSum;
}

flip(numbers: number[], diceSum: number): boolean {
  if ( !this.canFlip(numbers, diceSum)){ return false; }

this.flippedNumbers.push(...numbers);
this.flippedNumbers.sort((a, b) => a - b);
return true;

}
}

