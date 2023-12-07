import { pipe } from 'fp-ts/function'
import fileReader from '../fileReader'

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

const data = await fileReader('src/day01/input.txt')

const allSummed = sumLines(pipe(data, removeCharacters)).reduce((a, b) => Number(a) + Number(b), 0)

console.log('part1:', allSummed)

// part 2
const foundNumbers = data.map((line) =>
  ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    .reduce((acc, word, index) => acc.replaceAll(word, word + (index + 1) + word), line)
    .split('')
    .map(Number)
    .filter(Boolean)
    .join('')
)

const allSummed2 = sumLines(foundNumbers).reduce((a, b) => Number(a) + Number(b), 0)

console.log('part2:', allSummed2)
