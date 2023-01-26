import React from 'react'

const Navbar = () => {
  return (
    <header>
        <div className="flex flex-col p-3 border-b-2 bg-slate-800 text-white">
           <h4 className="m-auto">
            <a href="/" className="no-underline text-white uppercase">Books</a>
           </h4>
        </div>
        {/* MENU */}
    </header>
  )
}

export default Navbar