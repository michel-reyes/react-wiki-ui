import React, {memo, useRef} from 'react'
import {CardData} from '../CardList'
import {motion, useMotionValue} from 'framer-motion'
import {Link} from 'react-router-dom'
import {useInvertedBorderRadius} from '../utils/use-inverted-border-radius'
import {ContentPlaceholder} from './ContentPlaceholder'
import {Title} from './Title'
import {Overlay} from './Overlay'
import {useOnClickOutside} from '../hooks/useClickOutside'
// import {Image} from './Image'
import {openSpring, closeSpring} from './animations'

interface Props extends CardData {
  isSelected: boolean
  history: {
    push: (route: string) => void
  }
}

// eslint-disable-next-line react/display-name
export const Card = memo(
  ({
    isSelected,
    id,
    title,
    category,
    history,
  }: // pointOfInterest,
  // backgroundColor,
  Props) => {
    const y = useMotionValue(0)
    const zIndex = useMotionValue(isSelected ? 2 : 0)

    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20)

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef(null)
    useOnClickOutside(cardRef, () => {
      isSelected && history.push('/')
    })

    function checkZIndex(latest: any) {
      if (isSelected) {
        zIndex.set(2)
      } else if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0)
      }
    }

    return (
      <li className={`card`}>
        <Overlay isSelected={isSelected} />
        <div className={`card-content-container ${isSelected && 'open'}`}>
          <motion.div
            ref={cardRef}
            className="card-content"
            style={{...inverted, zIndex, y}}
            layoutTransition={isSelected ? openSpring : closeSpring}
            onUpdate={checkZIndex}
          >
            {/* <Image
              id={id}
              isSelected={isSelected}
              pointOfInterest={pointOfInterest}
              backgroundColor={backgroundColor}
            /> */}
            <Title title={title} category={category} isSelected={isSelected} />
            <ContentPlaceholder />
          </motion.div>
        </div>
        {!isSelected && <Link to={id} className={`card-open-link`} />}
      </li>
    )
  },
  (prev, next) => prev.isSelected === next.isSelected,
)
