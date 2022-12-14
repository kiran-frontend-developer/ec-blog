import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar border border-primary">
            <h1 className='text-danger'>The Ecounter Blog</h1>
            <div className="links">
                <Link type="button" className="btn btn-danger me-2 p-1 text-decoration-none" to="/" >Home</Link>
                <Link type="button" className="btn btn-danger me-2 p-1 text-decoration-none" to="/create" >New Blog</Link>

                {/* <a href="/" className='me-2 p-1 text-decoration-none border border-secondary '>Home</a>
                <a href="/create" className=' me-2 p-1 text-decoration-none border border-danger'>New Blog</a> */}
            </div>
        </nav>
    )
}

export default Navbar
