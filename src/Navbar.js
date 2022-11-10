import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar border border-primary">
            <h1 className='text-danger'>The Dojo Blog</h1>
            <div className="links">
                <button type="button" className="btn btn-danger me-2 p-1 text-decoration-none" href="/" >Home</button>
                <button type="button" className="btn btn-danger me-2 p-1 text-decoration-none" href="/create" >New Blog</button>

                {/* <a href="/" className='me-2 p-1 text-decoration-none border border-secondary '>Home</a>
                <a href="/create" className=' me-2 p-1 text-decoration-none border border-danger'>New Blog</a> */}
            </div>
        </nav>
    )
}

export default Navbar
