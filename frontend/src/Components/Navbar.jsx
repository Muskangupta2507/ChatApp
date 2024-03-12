import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <span className='logo'>Lana Chat</span>
        <div className='user'>
            <img src=""></img>
            <span>Priya</span>
            <button>LogOut</button>
        </div>
    </div>
  )
}

export default Navbar