import fs from 'fs/promises'
import { pipe } from 'fp-ts/function'

const readFile = (path: string): Promise<string> => fs.readFile(path, 'utf8')

const splitLines = (data: string): string[] => data.split('\n')
const removeCharacters = (data: string[]): string[] => data.map((line) => line.replace(/\D/g, ''))

const sumLines = (arr: string[]) =>
  arr.map((line) => {
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

async function part1() {
  const data = pipe(await readFile('src/day01/input.txt'), splitLines, removeCharacters)

  const allSummed = sumLines(data).reduce((a, b) => Number(a) + Number(b), 0)

  console.log('part1:', allSummed)
}

await part1()
// part 2
const foundNumbers = pipe(await readFile('./src/day01/input.txt'), splitLines).map((line) =>
  ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    .reduce((acc, word, index) => acc.replaceAll(word, word + (index + 1) + word), line)
    .split('')
    .map(Number)
    .filter(Boolean)
    .join('')
)

const allSummed2 = sumLines(foundNumbers).reduce((a, b) => Number(a) + Number(b), 0)

console.log('part2:', allSummed2)
