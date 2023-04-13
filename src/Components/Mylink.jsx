import React from "react";
import {Link} from "react-router-dom"

function Mylink(props) {
    return(
        <div>
            <li className="nav-item">
                            <Link className="nav-link" to={props.to}>
                                {props.text}
                            </Link>
            </li>
        </div>
    )
}

export default Mylink;