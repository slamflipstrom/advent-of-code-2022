import { readFileSync } from "fs"
const input = readFileSync("./01-puzzle-input.txt", "utf8")

const inputArray = input.split("\n")

// iterate through inputArray until we find an empty string
let largestVal = 0
let sum = 0

inputArray.forEach((item: string, index) => {
  if (item !== "") {
    sum += parseInt(item)
  }

  if (item === "") {
    if (sum > largestVal) {
      largestVal = sum
    }
    sum = 0
  }
})
console.log("largestVal:", largestVal)
