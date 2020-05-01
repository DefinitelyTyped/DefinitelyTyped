// Type definitions for react-fade-in 0.1.8
// Project: github.com/gkaemmer/react-fade-in
// Definitions by: Barry Michael Doyle <https://github.com/barrymichaeldoyle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { ComponentClass, ReactNode } from 'react';

/**
 * Props for a FadeIn component.
 */
export interface FadeInProps {
  children?: ReactNode;
  className?: string;
  /**
   * No default. Adds a `className` prop to each child div, allowing
   * you to style the direct children of the `FadeIn` component.
   */
  childClassName?: string;
  /**
   * Default: 50. Delay between each child's animation in milliseconds.
   */
  delay?: number;
  /**
   * Default: 400. Duration of each child's animation in milliseconds.
   */
  transitionDuration?: number;
}

/**
 * Visually animates content on render with FadeIn.js
 */
declare const FadeIn: ComponentClass<FadeInProps>;
declare module 'react-fade-in';

export default FadeIn;
