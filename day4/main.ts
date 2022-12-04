const items = (await Deno.readTextFile("./input.txt")).split("\n").map(it => it.split(","))

const doesContain = (a: { start: number, end: number }, b: { start: number, end: number }) => a.start >= b.start && a.end <= b.end || b.start >= a.start && b.end <= a.end
const doesOverlap = (a: { start: number, end: number }, b: { start: number, end: number }) => a.start >= b.start && a.start <= b.end || a.end >= b.start && a.end <= b.end

const firstResult = items.filter(([first, second]) => {
	const a = first.split("-")
	const b = second.split("-")
	return doesContain({start: Number(a[0]), end: Number(a[1])}, {start: Number(b[0]), end: Number(b[1])})
})

const secondResult = items.filter(([first, second]) => {
	const a = first.split("-")
	const b = second.split("-")

	const inputA = {start: Number(a[0]), end: Number(a[1])}
	const inputB = {start: Number(b[0]), end: Number(b[1])}

	return doesContain(inputA, inputB) || doesOverlap(inputA, inputB)
})

console.log("PART 1!", firstResult.length)
console.log("PART 2!", secondResult.length)