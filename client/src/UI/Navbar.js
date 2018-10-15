import React from 'react';
const Navbar =(props)=>{
    return(
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div id="navbar" className="navbar-collapse collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><p class="navbar-text navbar-right">Welcome {props.username} | <a href="/" class="navbar-link">Back to login</a></p></li>
          </ul>
        </div>
      </div>
    </nav>

    )
}
export default Navbar;