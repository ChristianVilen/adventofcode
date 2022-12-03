const items: string[] = (await Deno.readTextFile("./input.txt")).split("\n")
const alphabet = "abcdefghijklmnopqrstuvwxyz"
const priorities = [...alphabet, ...alphabet.toUpperCase()]

const compartments = items.map(it => ({
	comp1: it.substring(0, it.length / 2),
	comp2: it.substring(it.length / 2)
}))

const findDuplicates = (({comp1, comp2}) => [...comp1].filter(it => [...comp2].includes(it)))
const res1 = compartments.map(findDuplicates).reduce((curr, acc) => curr + (priorities.indexOf(acc[0]) + 1), 0)

console.log("PART 1!", res1)

// PART 2!
const rucksacks: string[] = (await Deno.readTextFile("./input2.txt")).split("\n");

const chunkArray = (arr: string[], size: number): Array<string[]> => {
	if (arr.length > size) {
		return [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
	}
	return [arr];
}

const res2 = chunkArray(rucksacks, 3)
	.map(([str1, str2, str3]) => [...str1].filter((i) => [...str2].includes(i) && [...str3].includes(i)))
	.reduce((curr, acc) => curr + (priorities.indexOf(acc[0]) + 1), 0)

console.log("PART 2!", res2)

