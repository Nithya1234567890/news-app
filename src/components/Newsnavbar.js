import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
const Newsnavbar=()=>{
  const loc=useLocation();
  useEffect(()=>{
    console.log(loc.pathname)
  },[loc]);
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News Today</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className={`nav-link ${(loc.pathname==='/general' || loc.pathname==='/')?"text-white":""}`} to="">General</Link></li>
          <li className="nav-item"><Link className={`nav-link ${loc.pathname==='/business'?"text-white":""}`} to="/business">Business</Link></li>
          <li className="nav-item"><Link className={`nav-link ${loc.pathname==='/entertainment'?"text-white":""}`} to="/entertainment">Entertainment</Link></li>
          <li className="nav-item"><Link className={`nav-link ${loc.pathname==='/health'?"text-white":""}`} to="/health">Health</Link></li>
          <li className="nav-item"><Link className={`nav-link ${loc.pathname==='/science'?"text-white":""}`} to="/science">Science</Link></li>
          <li className="nav-item"><Link className={`nav-link ${loc.pathname==='/sports'?"text-white":""}`} to="/sports">Sports</Link></li>
          <li className="nav-item"><Link className={`nav-link ${loc.pathname==='/technology'?"text-white":""}`} to="/technology">Technology</Link></li>
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }

export default Newsnavbar
