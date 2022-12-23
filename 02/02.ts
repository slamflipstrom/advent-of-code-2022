import { readFileSync } from "fs"
const input = readFileSync("./02/02-input.txt", "utf8")

const inputArray = input.split("\n")

type Player1Choice = "A" | "B" | "C"
type Player2Choice = "X" | "Y" | "Z"

const VALUES = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
}

const outcomeMap = {
  loss: 0,
  draw: 3,
  win: 6,
}

const compareChoicesPart1 = (
  opponent: Player1Choice,
  me: Player2Choice
): number => {
  const valueMap = {
    A: 1,
    B: 2,
    C: 3,
    X: 1,
    Y: 2,
    Z: 3,
  }

  // draw
  if (valueMap[opponent] === valueMap[me]) {
    return outcomeMap.draw + valueMap[me]
  }

  // player 1 selects ROCK
  if (valueMap[opponent] === VALUES.ROCK) {
    if (valueMap[me] === VALUES.SCISSORS) {
      return outcomeMap.loss + valueMap[me]
    }
    if (valueMap[me] === VALUES.PAPER) {
      return outcomeMap.win + valueMap[me]
    }
  }

  // player 1 selects PAPER
  if (valueMap[opponent] === VALUES.PAPER) {
    if (valueMap[me] === VALUES.ROCK) {
      return outcomeMap.loss + valueMap[me]
    }
    if (valueMap[me] === VALUES.SCISSORS) {
      return outcomeMap.win + valueMap[me]
    }
  }

  // player 1 selects SCISSORS
  if (valueMap[opponent] === VALUES.SCISSORS) {
    if (valueMap[me] === VALUES.PAPER) {
      return outcomeMap.loss + valueMap[me]
    }
    if (valueMap[me] === VALUES.ROCK) {
      return outcomeMap.win + valueMap[me]
    }
  }

  return 0
}

const compareChoicesPart2 = (
  opponent: Player1Choice,
  desiredOutcome: Player2Choice
): number => {
  const valueMap = {
    A: 1,
    B: 2,
    C: 3,
    X: outcomeMap.loss,
    Y: outcomeMap.draw,
    Z: outcomeMap.win,
  }

  // desiredOutcome === draw
  if (valueMap[desiredOutcome] === outcomeMap.draw) {
    return valueMap[opponent] + outcomeMap.draw
  }

  // desiredOutcome === loss
  if (valueMap[desiredOutcome] === outcomeMap.loss) {
    if (valueMap[opponent] === VALUES.ROCK) {
      return VALUES.SCISSORS + outcomeMap.loss
    }
    if (valueMap[opponent] === VALUES.PAPER) {
      return VALUES.ROCK + outcomeMap.loss
    }
    if (valueMap[opponent] === VALUES.SCISSORS) {
      return VALUES.PAPER + outcomeMap.loss
    }
  }

  // desiredOutcome === win
  if (valueMap[desiredOutcome] === outcomeMap.win) {
    if (valueMap[opponent] === VALUES.ROCK) {
      return VALUES.PAPER + outcomeMap.win
    }
    if (valueMap[opponent] === VALUES.PAPER) {
      return VALUES.SCISSORS + outcomeMap.win
    }
    if (valueMap[opponent] === VALUES.SCISSORS) {
      return VALUES.ROCK + outcomeMap.win
    }
  }

  return 0
}

const analyzeStrategyGuide = () => {
  let totalScore = 0

  inputArray.forEach((item) => {
    const itemArray = item.split(" ")

    // const [opponent, me] = itemArray
    // const roundResult = compareChoicesPart1(
    //   opponent as Player1Choice,
    //   me as Player2Choice
    // )

    const [opponent, desiredOutcome] = itemArray
    const roundResult = compareChoicesPart2(
      opponent as Player1Choice,
      desiredOutcome as Player2Choice
    )

    totalScore += roundResult
  })

  console.log("totalScore:", totalScore)
}

analyzeStrategyGuide()
