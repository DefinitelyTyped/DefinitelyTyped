// Type definitions for react-stars 2.2
// Project: https://github.com/n49/react-stars
// Definitions by: TingYuLC <https://github.com/TingYuLC>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import * as React from "react";

interface ReactStarsProps {
  /** Name of parent class */
  className?: string;

  /** How many total stars you want */
  count?: number;

  /** Set rating value */
  value?: number;

  /** Which character you want to use as a star */
  char?: string;

  /** Color of inactive star (this supports any CSS valid value) */
  color1?: string;

  /** Color of selected or active star */
  color2?: string;

  /** Size of stars (in px) */
  size?: number;

  /** Should you be able to select rating or just see rating (for reusability) */
  edit?: boolean;

  /** Should component use half stars, if not the decimal part will be dropped otherwise normal algebra rools will apply to round to half stars */
  half?: boolean;

  /** Will be invoked any time the rating is changed */
  onChange?: (new_rating: number) => void;
}

declare class ReactStars extends React.Component<ReactStarsProps> {}

export default ReactStars;
