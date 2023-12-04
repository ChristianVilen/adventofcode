import fs from 'fs'

const upperLimitsOfCubesPerGame = { red: 12, blue: 14, green: 13 }

function part1() {
  const data = fs.readFileSync('src/day02/input.txt', 'utf8').trim().split('\n')
  const result = data
    .map((line: string) =>
      line
        .split(': ')[1]
        .split('; ')
        .map((set) => {
          const cubes = set.split(', ')

          return cubes.every((cube) => {
            const [count, color] = cube.split(' ')

            return upperLimitsOfCubesPerGame[color] >= Number(count)
          })
        })
        .every((it) => it)
    )

    .reduce((curr, acc, i) => {
      return acc ? curr + (i + 1) : curr
    }, 0)

  console.log('Part1', result)
}

part1()
