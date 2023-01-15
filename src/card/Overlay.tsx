import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const Overlay = ({isSelected}) => (
  <motion.div
    initial={false}
    animate={{opacity: isSelected ? 1 : 0}}
    transition={{duration: 0.2}}
    style={{pointerEvents: isSelected ? 'auto' : 'none'}}
    className="overlay"
  >
    <Link to="/" />
  </motion.div>
)

export {Overlay}
