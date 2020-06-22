import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

import { motion } from "framer-motion"


function Title(props) {
    if (props.location === undefined) {
        return(
            <div className="container title">
                <h1>{props.type} Jobs</h1>
            </div>
        )
    }
    else {
        return(
            <div className="container title">
                <h1>{props.type} Jobs in {props.location}</h1>
            </div>
        )
    }

}

export default Title