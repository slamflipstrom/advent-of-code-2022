import { readFileSync } from "fs"
const input = readFileSync("./04/04-input.txt", "utf8")

const inputArray = input.split("\n")

const isInRange = (value: string, min: string, max: string): boolean => {
  if (Number(value) >= Number(min) && Number(value) <= Number(max)) {
    return true
  }
  return false
}

const checkOverlap = (
  firstMin: string,
  firstMax: string,
  secondMin: string,
  secondMax: string
): boolean => {
  if (isInRange(firstMin, secondMin, secondMax)) {
    return true
  }
  if (isInRange(firstMax, secondMin, secondMax)) {
    return true
  }
  if (isInRange(secondMin, firstMin, firstMax)) {
    return true
  }
  if (isInRange(secondMax, firstMin, firstMax)) {
    return true
  }
  return false
}

const checkRange = (
  firstMin: string,
  firstMax: string,
  secondMin: string,
  secondMax: string
): boolean => {
  //check if first is in second range
  if (isInRange(firstMin, secondMin, secondMax)) {
    if (isInRange(firstMax, secondMin, secondMax)) {
      return true
    }
  }

  //check if second is in first range
  if (isInRange(secondMin, firstMin, firstMax)) {
    if (isInRange(secondMax, firstMin, firstMax)) {
      return true
    }
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
    checkOverlap(firstMin, firstMax, secondMin, secondMax) && overlap++

    checkRange(firstMin, firstMax, secondMin, secondMax) && count++
  })
  console.log("count: ", count)
  console.log("overlap:", overlap)
}

processInput()
