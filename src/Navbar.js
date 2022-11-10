const Navbar = () => {
    return (
    
            <nav className="navbar border border-primary">
            <h1 className='text-danger'>ec-blog</h1>
            <div className="links">
            <button type="button" class="btn btn-danger me-2 p-1 text-decoration-none" href="/" >Home</button>
                <button type="button" class="btn btn-danger me-2 p-1 text-decoration-none" href="/create" >New Blog</button>
            </div>
            </nav>
        
    );
}

export default Navbar;