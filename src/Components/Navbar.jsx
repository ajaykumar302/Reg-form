import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">
      <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg" alt="Logo" width="180px" height="105px" className="d-inline-block align-text-top"/>
     
    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                           
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Course
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" >Action</a></li>
                                    <li><a className="dropdown-item" >Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item">Something else here</a></li>
                                </ul>
                            </li>
                           
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar