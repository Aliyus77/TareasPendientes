import React from "react";
import { ReactComponets as checked} from './icono.svg';
import './TodoIcon.css';


function TodoIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {/* SVG */}
        </span>
    );
}

export { TodoIcon };