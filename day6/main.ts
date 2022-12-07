const chars = (await Deno.readTextFile("./input.txt")).split("")

function getAnswer(num: number) {
	let res = 0

	for (let i = 0; i < chars.length; i++) {
		if (res !== 0) break
		if (new Set(chars.slice(i, i + num)).size === num) {
			res = i + num
		}
	}

	return res
}

console.log("Part 1:", getAnswer(4))
console.log("Part 2:", getAnswer(14))
