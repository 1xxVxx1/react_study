import HandIcon from "./HandIcon";

function HandButton ({ value, onClick }) {
    const handleButtonClick = () => {onClick(value)}
    return (
        <button onClick={handleButtonClick}>
            <HandIcon value={value}/>
        </button>
)
}

export default HandButton;