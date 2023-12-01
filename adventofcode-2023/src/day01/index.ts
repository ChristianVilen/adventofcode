import fs from 'fs/promises';

const data = await fs.readFile("src/day01/input.txt", 'utf8').then(data => data.split('\n'));

function sumLines(arr: string[]) {
    return arr.map(line => {
      const firstNumber = line.at(0)

      if (line.length === 1 && firstNumber) {
        return `${firstNumber}${firstNumber}`
      }

      const secondNumber = line.at(-1)

      if (!firstNumber || !secondNumber) {
        throw Error('no numbers')
      }

      return `${firstNumber + secondNumber}`
    })
}

// Part 1
const noCharacters = data.map((line) => line.replace(/\D/g, ""));
const allSummed = sumLines(noCharacters).reduce((a, b) => Number(a) + Number(b), 0)

console.log("part1:", allSummed)

// part 2
const foundNumbers = data.map((line) => {
  const digits = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ]
    .reduce(
      (acc, word, index) => acc.replaceAll(word, word + (index + 1) + word),
      line
    )
    .split("")
    .map(Number)
    .filter(Boolean);

  return digits.join("")
});

const allSummed2 = sumLines(foundNumbers).reduce((a, b) => Number(a) + Number(b), 0)

console.log("part2:", allSummed2)
