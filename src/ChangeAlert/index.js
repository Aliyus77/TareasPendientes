// basado en HOC de withStorageListener

import React from 'react';
import { withStorageListener } from './withStorageListener';
import './ChangeAlert.css';

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Hubo cambios en el listado!</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Refresh
          </button>
        </div>

      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };

// con React Hooks

// import React from 'react';
// import { useStorageListener } from './useStorageListener';
// import './ChangeAlert.css';

// function ChangeAlert({ sincronize }) {
//   const { show, toggleShow } = useStorageListener(sincronize);
  
//   if (show) {
//     return (
//       <div className="ChangeAlert-bg">
//         <div className="ChangeAlert-container">
//           <p>Parece que cambiaste tus TODOs en otra pestaÃ±a o ventana del navegador.</p>
//           <p>Â¿Quieres sincronizar tus TODOs?</p>
//           <button
//             className="TodoForm-button TodoForm-button--add"
//             onClick={toggleShow}
//           >
//             Yes!
//           </button>
//         </div>
//       </div>
//     );
//   } else {
//     return null;
//   }
// }

// export { ChangeAlert };