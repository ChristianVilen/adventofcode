import fs from 'fs'

const upperLimitsOfCubesPerGame: Record<string, number> = { red: 12, blue: 14, green: 13 }

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
    .reduce((curr, acc, i) => (acc ? curr + (i + 1) : curr), 0)

  console.log('Part1', result)
}

part1()

function part2() {
  const data = fs.readFileSync('src/day02/input.txt', 'utf8').trim().split('\n')

  const result = data.map((line: string) => {
    const maxCount: Record<string, number> = {
      red: 0,
      blue: 0,
      green: 0
    }
    line
      .split(': ')[1]
      .split('; ')
      .map((set) => {
        const cubes = set.split(', ')
        return cubes.forEach((cube) => {
          const [count, color] = cube.split(' ')

          if (maxCount[color] < Number(count)) {
            maxCount[color] = Number(count)
          }
        })
      })

    return maxCount.red * maxCount.blue * maxCount.green
  })

  console.log(
    'Part2',
    result.reduce((a, b) => a + b, 0)
  )
}

part2()
