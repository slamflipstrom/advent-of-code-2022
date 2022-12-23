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

const findMatch = (firstHalf: string, secondHalf: string): string | void => {
  const secondHalfArray = secondHalf.split("")
  return secondHalfArray.find((char) => firstHalf.includes(char))
}

const findPriorityValue = (char: string): number => {
  const idx = priorityScale.findIndex((c) => c === char)
  return idx + 1
}

const prioritizeItems = (): void => {
  let sum = 0

  inputArray.forEach((line) => {
    const [first, second] = splitLine(line)
    const match = findMatch(first, second)
    const priority = match ? findPriorityValue(match) : 0
    sum += priority
  })

  console.log("sum:", sum)
}

prioritizeItems()
