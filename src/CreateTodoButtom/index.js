import react from 'react';
import './CreateTodoButton.css'

function CreateTodoButtom(props) {
    const onClickButton = (msg) => {
        alert(msg);
    }
    
    return(
        <button 
            className="CreateTodoButton"
            onClick={() => onClickButton('Aquí va a estar el modal')}
        >
            +
        </button>
    );
}

export { CreateTodoButtom };