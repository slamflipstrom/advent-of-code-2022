import { readFileSync } from "fs"
const input = readFileSync("./03/03-input.txt", "utf8")

const inputArray = input.split("\n")

const buildPriorityScale = (): string[] => {
  // inspired by https://javascript.plainenglish.io/create-an-array-of-alphabet-characters-in-javascript-with-this-simple-trick-930033079dd3

  const lowercase = [...Array(26).keys()].map((i) => i + 97)
  const caps = [...Array(26).keys()].map((i) => i + 65)
  const combinedArray = [...lowercase, ...caps]

  const alphabet = combinedArray.map((x) => String.fromCharCode(x))
  return alphabet
}

const priorityScale = buildPriorityScale()

const splitLine = (line: string): string[] => {
  const first = line.slice(0, line.length / 2)
  const second = line.slice(line.length / 2, line.length)
  return [first, second]
}

// todo: refactor the findMatch functions to handle n lines instead of fixed length
const findLineMatch = (first: string, second: string): string | void => {
  const secondArray = second.split("")
  return secondArray.find((char) => first.includes(char))
}

const findGroupMatch = (group: string[]): string | void => {
  const [first, second, third] = group

  const firstArray = first.split("")
  return firstArray.find(
    (char) => second.includes(char) && third.includes(char)
  )
}

const findPriorityValue = (char: string): number => {
  const idx = priorityScale.findIndex((c) => c === char)
  return idx + 1
}

const prioritizeItems = (): void => {
  let itemSum = 0
  let badgeSum = 0

  let groupValue: string[] = [] // group = 3 lines
  let groupMatch: string | void | null = null

  inputArray.forEach((line, idx) => {
    groupValue.push(line)

    //on every 3rd line, evaluate the grouping
    if ((idx + 1) % 3 === 0) {
      groupMatch = findGroupMatch(groupValue)
      const groupPriority = groupMatch ? findPriorityValue(groupMatch) : 0
      badgeSum += groupPriority
      groupValue = []
    }

    const [first, second] = splitLine(line)
    const lineMatch = findLineMatch(first, second)

    const itemPriority = lineMatch ? findPriorityValue(lineMatch) : 0

    itemSum += itemPriority
  })

  // console.log('itemSum:', itemSum)
  // console.log("badgeSum:", badgeSum)
}

prioritizeItems()
