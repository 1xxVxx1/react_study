import HandIcon from "./HandIcon";
import './Button.css';

function HandButton ({ value, onClick }) {
    const handleButtonClick = () => {onClick(value)}
    return (
        <button onClick={handleButtonClick} className="button">
            <HandIcon value={value} className="button-icon"/>
        </button>
)
}

export default HandButton;