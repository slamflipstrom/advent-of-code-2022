import { readFileSync } from "fs"
const input = readFileSync("./04/04-input.txt", "utf8")

const inputArray = input.split("\n")

const isInRange = (value: string, min: string, max: string): boolean => {
  if (Number(value) >= Number(min) && Number(value) <= Number(max)) {
    return true
  }
  return false
}

const hasOverlap = (value: string, min: string, max: string): boolean => {
  if (Number(value) >= Number(min) && Number(value) <= Number(max)) {
    return true
  }
  return false
}

const processInput = () => {
  let count = 0
  let overlap = 0

  inputArray.forEach((item) => {
    //split item by comma
    const [first, second] = item.split(",")
    const [firstMin, firstMax] = first.split("-")
    const [secondMin, secondMax] = second.split("-")

    //check for overlap
    if (isInRange(firstMin, secondMin, secondMax)) {
      overlap++
    } else if (isInRange(firstMax, secondMin, secondMax)) {
      overlap++
    } else if (isInRange(secondMin, firstMin, firstMax)) {
      overlap++
    } else if (isInRange(secondMax, firstMin, firstMax)) {
      overlap++
    }

    //check if first is in second range
    if (isInRange(firstMin, secondMin, secondMax)) {
      if (isInRange(firstMax, secondMin, secondMax)) {
        count++
        return
      }
    }

    //check if second is in first range
    if (isInRange(secondMin, firstMin, firstMax)) {
      if (isInRange(secondMax, firstMin, firstMax)) {
        count++
      }
    }
  })
  console.log("count: ", count)
  console.log("overlap:", overlap)
}

processInput()
