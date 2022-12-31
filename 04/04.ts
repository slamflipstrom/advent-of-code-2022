import { readFileSync } from "fs"
const input = readFileSync("./04/04-input.txt", "utf8")

const inputArray = input.split("\n")

const checkRange = (value: string, min: string, max: string): boolean => {
  if (Number(value) >= Number(min) && Number(value) <= Number(max)) {
    return true
  }
  return false
}

const processInput = () => {
  let count = 0
  inputArray.forEach((item) => {
    //split item by comma
    const [first, second] = item.split(",")
    const [firstMin, firstMax] = first.split("-")
    const [secondMin, secondMax] = second.split("-")

    //check if first is in second range
    if (checkRange(firstMin, secondMin, secondMax)) {
      if (checkRange(firstMax, secondMin, secondMax)) {
        count++
        return
      }
    }

    //check if second is in first range
    if (checkRange(secondMin, firstMin, firstMax)) {
      if (checkRange(secondMax, firstMin, firstMax)) {
        count++
      }
    }
  })
  console.log("count: ", count)
}

processInput()
