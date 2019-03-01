import React from 'react';

const LoggedOutNav = ({handleResponse, openModal}) =>{
  return(
    <div className="nav-bar-links">
      <label className="nav-link" >List Your Car</label>
      <label className="nav-link" >Learn More</label>

      <a
        className='nav-link'
        href=''
        onClick={(e) => {
          handleResponse(e);
          openModal("Log in")
        }}
      >Login</a>

        <a
          className='nav-link'
          href=''
          onClick={(e) => {
            handleResponse(e);
            openModal("Sign up")
          }}
        >Signup</a>
    </div >
  )
}

export default LoggedOutNav;