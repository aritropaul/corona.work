import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'
import { motion } from "framer-motion"

function Card(props) {

    const variants = {
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: i * 0.1,
              duration: 0.5,
              ease: "easeIn",
              type: "spring",
              stiffness: 50
            },
          }),
        hidden: { opacity: 0, y: 200}
    }

    return (
        <motion.div className = "Card four columns"
            initial="hidden"
            animate="visible"
            custom={props.i}
            variants={variants}>
            <div className="data">
                <h4>{props.title}</h4>
                <p>{props.role}</p>
            </div>
            <a href={props.link} className="linker">
                Apply Here
            </a>
        </motion.div>
    )
}

export default Card