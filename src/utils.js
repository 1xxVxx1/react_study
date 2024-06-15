const resultSelector = {
    rock: "scissor",
    scissor: "paper",
    paper: "rock"
}

const cardArray = ["rock", "scissor", "paper"];

const printResult = (myState, otherState) => {
    if (resultSelector[myState] === otherState) {
        return "승리"
    } else if (resultSelector[otherState] === myState) {
        return "패배"
    }
    return "무승부"
}

const randomSelector = () => {
    const inx = Math.floor(Math.random() * 3);
    return cardArray[inx];
}

export {printResult, randomSelector}