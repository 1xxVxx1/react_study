import { useState } from "react";
import HandButton from "./HandButton";
import Button from "./Button";
import HandIcon from "./HandIcon";
import { printResult, randomSelector } from"./utils";



function App () {
    const [myState, setMystate] = useState("rock");
    const [otherState, setOtherState] = useState("rock");
    const [gameHistory, setGameHistory] = useState([]);
    const [myScore, setMyScore] = useState(0);
    const [otherScore, setOtherScore] = useState(0);
    const [bet, setBet] = useState(1);

    const handleButtonClick = (value) => {
        const nextMystate = value;
        const nextOtherState = randomSelector();
        const nowResult = printResult(nextMystate, nextOtherState);

        setMystate(nextMystate);
        setOtherState(nextOtherState);
        setGameHistory([...gameHistory, nowResult])
        if (nowResult === "승리") {
            setMyScore(myScore + bet);
        } else if (nowResult === "패배") {
            setOtherScore(otherScore + bet);
        }
    }
    
    const handleClearClick = () => {
        setMystate("rock");
        setOtherState("rock");
        setGameHistory([]);
        setMyScore(0);
        setOtherScore(0);
        setBet(1);
    }

    const handleBetChange = (e) => {
        let inputNum = Math.floor(+e.target.value);

        if (inputNum <= 0) {
            alert("1~9사이의 정수를 입력하세요")
            return setBet(1);
        } else if (inputNum <= 9) {
            return setBet(inputNum);
        } else if (Number.isNaN(inputNum)) {
            alert("1~9사이의 정수를 입력하세요");
            return setBet(1)
        }
    }

    return (
        <>  
            <div>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <p>{myScore} : {otherScore}</p>
            <div>
                <HandIcon value={myState}/>
                vs
                <HandIcon value={otherState}/>
            </div>
            <input type="number" value={bet} min={1} max={9} step={1} onChange={handleBetChange}/>
            <p>승부기록: {gameHistory.join(", ")}</p>
            <div>
                <HandButton onClick={handleButtonClick}value="rock"/>
                <HandButton onClick={handleButtonClick}value="scissor"/>
                <HandButton onClick={handleButtonClick}value="paper"/>
            </div>
        </>
        )
}

export default App;