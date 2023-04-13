import React from "react";
import Mylink from "./Mylink"

function MainMenu(){
    return(
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" 
             data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    NUU
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <Mylink to="/" text="Home"></Mylink>
                        <Mylink to="/about" text="about"></Mylink>
                        <Mylink to="/Users" text="Users"></Mylink>
                
                    </ul>
                </div>
            </div>
        </nav>
      </div>  
    )
}

export default MainMenu;