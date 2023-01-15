import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";
import { closeSpring } from "./animations";

interface ImageProps {
  id: string;
  isSelected: boolean;
  pointOfInterest?: number;
  backgroundColor: string;
}

export const Image = ({
  id,
  isSelected,
  pointOfInterest = 0,
  backgroundColor,
}: ImageProps) => {
  const inverted = useInvertedScale();

  return (
    <motion.div
      className="card-image-container"
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
      <motion.img
        className="card-image"
        src={`images/${id}.jpg`}
        alt=""
        initial={false}
        animate={
          isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }
        }
        transition={closeSpring}
      />
    </motion.div>
  );
};
