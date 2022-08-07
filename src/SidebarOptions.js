import React from 'react'
import './SideBarOptions.css'

function SidebarOptions({active,text,Icon}) {
  return (
    <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
        <Icon />
        <h2>{text}</h2>
    </div>
  )
}

export default SidebarOptions