import { input } from "./input"

const pointMap = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
  LOSE: 0,
  DRAW: 3,
  WIN: 6
}

const meMap = {
  X: "ROCK",
  Y: "PAPER",
  Z: "SCISSORS"
}

const opponentMap = {
  A: "ROCK",
  B: "PAPER",
  C: "SCISSORS"
}

const meMapSecond = {
	X: "LOSE",
  Y: "DRAW",
  Z: "WIN"
}

const results = (battle) => input.split("\n").map((inputPair) => {
  const [opponent, me] = inputPair.split(" ")
  const opponentSelect = opponentMap[opponent]
  return battle(opponentSelect, me)
}).reduce((a, b) => a + b, 0)

const sum = results(battle1)
console.log("first", sum)


const sum2 = results(battle2)
console.log("second",sum2)

function battle2(a, me) {
	const b = meMapSecond[me]

  if (a === "ROCK") {
    if (b === "WIN") return pointMap.WIN + pointMap.PAPER
    if (b === "DRAW") return pointMap.DRAW + pointMap.ROCK
    if (b === "LOSE") return pointMap.LOSE + pointMap.SCISSORS
  }

  if (a === "PAPER") {
    if (b === "DRAW") return pointMap.DRAW + pointMap.PAPER
    if (b === "LOSE") return pointMap.LOSE + pointMap.ROCK
    if (b === "WIN") return pointMap.WIN + pointMap.SCISSORS
  }

  if (a === "SCISSORS") {
    if (b === "LOSE") return pointMap.LOSE + pointMap.PAPER
    if (b === "WIN") return pointMap.WIN + pointMap.ROCK
    if (b === "DRAW") return pointMap.DRAW + pointMap.SCISSORS
  }
}

function battle1(a, me) {
  const b = meMap[me]

  if (a === "ROCK") {
    if (b === "PAPER") return pointMap.WIN + pointMap[b]
    if (b === "ROCK") return pointMap.DRAW + pointMap[b]
    if (b === "SCISSORS") return pointMap.LOSE + pointMap[b]
  }

  if (a === "PAPER") {
    if (b === "PAPER") return pointMap.DRAW + pointMap[b]
    if (b === "ROCK") return pointMap.LOSE + pointMap[b]
    if (b === "SCISSORS") return pointMap.WIN + pointMap[b]
  }

  if (a === "SCISSORS") {
    if (b === "PAPER") return pointMap.LOSE + pointMap[b]
    if (b === "ROCK") return pointMap.WIN + pointMap[b]
    if (b === "SCISSORS") return pointMap.DRAW + pointMap[b]
  }
}
