import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar(props) {
  return (
    //  <nav className={`navbar navbar-expand-lg bg-{props.mode} border-bottom border-body`}  data-bs-theme="dark">
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    {/* <a className="navbar-brand text-warning bg-dark" href="/">{props.title}</a> */}
    <a className="navbar-brand text-warning fs-2 " href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active"  aria-current="page" to="/">Home</Link> */}
          <a className="nav-link active"  aria-current="page" href="#">Home</a>
        </li>
        {/* <li className="nav-item"> */}
          {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}
          {/* <a className="nav-link" href="/about">{props.aboutText}</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-warning" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className='form-check-input' onClick={props.toggleMode}  type="checkbox" id="flexSwitchCheckDefault" />
        <label className='form-check-label' htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>
      </div>
  </div>
    </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string,
    aboutText : PropTypes.string
}

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "About Text here"
}