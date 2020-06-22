import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className = "Header container">
            <Link to="/">
            <div className = "ten columns">
                covid19india.work
            </div>
            </Link>
        </div>
    )
}

export default Header