import React from 'react'
import { Fa500Px } from 'react-icons/fa';
import { RiAccountCircleFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  const token=useSelector(state=>state?.amount?.authtoken)
  console.log(token,"kuhyjk");
  // console.log(isAthenticated);
  const logOut=(
    <nav class="navbar navbar-expand-lg Navbar navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/profile">Profile</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"to="/settings">Settings</Link>
        </li>        
        <li class="nav-item">
            <Link class="nav-link"to="/documnets">Report</Link>
          </li> 
          
      </ul>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <Link class="nav-link"to="/SingUP">Login</Link>
        </li> 
        <li class="nav-item">
          <Link class="nav-link" to="/creataccount">Create account</Link>
        </li>
        </ul>
      
    </div>
  </div>
</nav>

  )

  const loGin =(
    <nav class="navbar navbar-expand-lg Navbar navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" ><Fa500Px fontSize={"40px"}/></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/profile">Document</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link"to="/settings">Settings</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link"to="/edits">Remark</Link>
          </li>        
          <li class="nav-item">
            <Link class="nav-link"to="/edits">Prescription</Link>
          </li>   
          <li class="nav-item">
            <Link class="nav-link"to="/documnets">Report</Link>
          </li> 
          
        </ul>
        <ul class="navbar-nav me-0 mb-2 mb-lg-0">
      <li class="nav-item">
          <Link class="nav-link"to="/SignOut"><RiAccountCircleFill fontSize={"40px"}/> Profile</Link>
        </li> 
        </ul>
        
        
      </div>
    </div>
  </nav>

  )
  return (
    <div>
        
      {token?loGin:logOut}
    </div>
  )
}

export default Navbar
