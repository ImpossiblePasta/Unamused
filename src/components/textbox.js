import React, {useState} from 'react';
import './textbox.css';
import exandImg from '../assets/icons/expand.png';


export const Collapse = ({ heading, children }) => {

  // Hold the boolean isExpanded
  const [isExpanded, setIsExpanded] = useState(!new Boolean());

  // Hold the toggle function
  function ToggleBox(){
    // Simply toggle isExpanded
    setIsExpanded(!isExpanded);
  }

  // The body
  return (
    <div class="box">
      <button
        onClick={() => ToggleBox()}
      >
        {heading}
        <img 
          src={exandImg} 
          class={isExpanded ? "expanded" : ''}
        />
      </button>
      <div
        class='body'
        style={{
          maxHeight: isExpanded ? 'none' : 0
        }}
      >
        {children}
      </div>
    </div>
    
  );
};

export default Collapse