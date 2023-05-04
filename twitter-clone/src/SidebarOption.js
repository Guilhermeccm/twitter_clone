import React from 'react'
import './SidebarOption.css';




function SidebarOption({active, text, Icon }) {
  return (
    <div className={`sidebarOption ${active //makes something active (when you are in the button)
    && 'sidebarOption--active'}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption