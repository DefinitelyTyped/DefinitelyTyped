// Type definitions for react-alice-carousel 1.13
// Project: https://github.com/maxmarinich/react-alice-carousel
// Definitions by: endigo <https://github.com/endigo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react'

export interface EventObject {
  item: number
  slide: number
  itemsInSlide: number
}

export interface Props {
  items?: Array<{}>
  onSlideChange?: (e: EventObject) => void
  onSlideChanged?: (e: EventObject) => void
  onInitialized?: (e: EventObject) => void
  onResized?: (e: EventObject) => void
  keysControlDisabled?: boolean
  playButtonEnabled?: boolean
  buttonsDisabled?: boolean
  dotsDisabled?: boolean
  swipeDisabled?: boolean
  responsive?: {}
  stagePadding?: {}
  duration?: number
  startIndex?: number
  slideToIndex?: number
  autoPlay?: boolean
  infinite?: boolean
  mouseDragEnabled?: boolean
  fadeOutAnimation?: boolean
  autoPlayInterval?: number
  autoPlayDirection?: string
  disableAutoPlayOnAction?: boolean
  stopAutoPlayOnHover?: boolean
  showSlideInfo?: false
  preventEventOnTouchMove?: false
}

export default class Carousel extends React.PureComponent<Props> {}
