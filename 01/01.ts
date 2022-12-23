import { readFileSync } from "fs"
const input = readFileSync("./01-puzzle-input.txt", "utf8")

const inputArray = input.split("\n")

let first = 0
let second = 0
let third = 0

let sum = 0

inputArray.forEach((item: string) => {
  // if item is not an empty string, add to sum
  if (item !== "") {
    sum += parseInt(item)
  }

  // if item is an empty string, check if sum is larger than first
  if (item === "") {
    if (sum > first) {
      third = second
      second = first
      first = sum
    } else if (sum > second) {
      third = second
      second = sum
    } else if (sum > third) {
      third = sum
    }

    // reset sum
    sum = 0
  }
})

console.log("Largest: ", first)
console.log("Top 3 Sum: ", first + second + third)
