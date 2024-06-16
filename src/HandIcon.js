import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";


const IMG = {
    rock: rockImg,
    scissor: scissorImg,
    paper: paperImg
}

function HandIcon ({ value, className = "" }) {
    const src = IMG[value];

    return <img src={src} alt={value} className={className}></img>
}

export default HandIcon;