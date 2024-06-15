import { useState } from "react";
import HandButton from "./HandButton";
import Button from "./Button";
import HandIcon from "./HandIcon";
import { printResult, randomSelector } from"./utils";



function App () {
    const [myState, setMystate] = useState("rock");
    const [otherState, setOtherState] = useState("rock");

    const handleButtonClick = (value) => {
        setOtherState(randomSelector());
        setMystate(value);
    }
    
    const handleClearClick = () => {
        setMystate("rock");
        setOtherState("rock");
    }

    return (
        <>  <div>
                <Button onClick={handleClearClick}>처음부터</Button>
            </div>
            <p>{printResult(myState, otherState)}</p>
            <div>
                <HandIcon value={myState}/>
                vs
                <HandIcon value={otherState}/>
            </div>
            <HandButton onClick={handleButtonClick}value="rock"/>
            <HandButton onClick={handleButtonClick}value="scissor"/>
            <HandButton onClick={handleButtonClick}value="paper"/>
        </>
    )
}

export default App;