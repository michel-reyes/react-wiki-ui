import * as React from 'react'
import {motion, useInvertedScale} from 'framer-motion'
import {closeSpring, openSpring} from './animations'

interface TitleProps {
  title: string
  category: string
  isSelected: boolean
}

export const Title = ({title, category, isSelected}: TitleProps) => {
  const inverted = useInvertedScale()
  const x = isSelected ? 30 : 15
  const y = x

  return (
    <motion.div
      className="title-container"
      initial={false}
      animate={{x, y}}
      transition={isSelected ? openSpring : closeSpring}
      transformTemplate={scaleTranslate}
      style={{...inverted, originX: 0, originY: 0}}
    >
      <span className="category">{category}</span>
      <h2>{title}</h2>
    </motion.div>
  )
}

type ScaleTranslate = {
  x: number
  y: number
  scaleX: number
  scaleY: number
}

const scaleTranslate = ({x, y, scaleX, scaleY}: ScaleTranslate) =>
  `scaleX(${scaleX}) scaleY(${scaleY}) translate(${x}, ${y}) translateZ(0)`
