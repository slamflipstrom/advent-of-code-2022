import { readFileSync } from "fs"
const input = readFileSync("./04/04-input.txt", "utf8")

const inputArray = input.split("\n")

const checkRange = (mins: string[], maxs: string[]) => {
  let count = 0
}

const processInput = () => {
  inputArray.forEach((item) => {
    //split item by comma
    const [first, second] = item.split(",")
    const [firstMin, firstMax] = first.split("-")
    const [secondMin, secondMax] = second.split("-")
    checkRange([firstMin, secondMin], [firstMax, secondMax])
  })
}

processInput()
