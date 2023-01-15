import * as React from "react";
import { motion, useInvertedScale } from "framer-motion";

export const ContentPlaceholder = React.memo(() => {
  const inverted = useInvertedScale();
  return (
    <motion.div
      className="content-container"
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
        consequatur facere expedita mollitia. Autem minus blanditiis similique
        eveniet quam totam praesentium. Itaque omnis tenetur ad illo ipsa sequi
        ipsam ab.
      </p>
    </motion.div>
  );
});
