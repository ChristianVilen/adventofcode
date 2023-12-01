const commandData = (await Deno.readTextFile("./input.txt")).split("\n")
const stackData = (await Deno.readTextFile("./crates.txt")).split("\n").map(it => it.split("] ["))

const stacks = new Map<number, string[]>()

const crates = stackData.map((it) => it.map(it => it.replace(/[\[\]']+/g, '').trim()))

crates.forEach((it, i) => {
	it.forEach((a) => {
		const index = i + 1
		if (!stacks.has(index)) {
			stacks.set(index, [a])
		} else {
			const curr = stacks.get(index)!
			curr.unshift(a)
			stacks.set(index, curr)
		}
	})
})

const commands = commandData.map(it => it.replace("move", '').replace("from", "").replace("to", "").split(" ").filter(it => it.length))

commands.forEach(([amount, loc, dest]) => {
	const getLocData = stacks.get(Number(loc))!
	const dataToPutBack = getLocData.slice(0, Number(amount))
	console.log({dataToPutBack})
	const dataToMove = getLocData.slice(Number(amount), getLocData.length)
	console.log({dataToMove})
	stacks.set(Number(loc), dataToPutBack)
	const getDestData = stacks.get(Number(dest))!
	dataToMove.forEach(it => getDestData.push(it))
	stacks.set(Number(dest), getDestData)
})

const res = [...stacks.values()]
const joined = res.map(it => it[0]).join()
console.log("stacks", res);
console.log("stacks", joined.replace(/,/g,''));
// BGGRFHTF
// HJSDTDRG