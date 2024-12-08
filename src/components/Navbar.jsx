import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between w-full'>
      <div className="logo py-2">
        <span className='font-bold text-xl mx-9'>Recipea</span>
      </div>
      <div className="add mx-5 py-2">
        <button>+</button>
      </div>
    </nav>
  )
}

export default Navbar 
