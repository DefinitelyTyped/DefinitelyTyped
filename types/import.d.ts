// Type definitions for nodots-backgammon-types
// Project: https://github.com/nodots/nodots-backgammon-types
// Definitions by: Ken Riley <https://github.com/nodots>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.5

import { BackgammonColor } from '.'
import { BackgammonCheckercontainerPosition } from './checkercontainer'
export interface BackgammonCheckercontainerImport {
  position: BackgammonCheckercontainerPosition
  direction?: 'clockwise' | 'counterclockwise'
  checkers: {
    qty: number
    color: BackgammonColor
  }
}
export interface BackgammonBoardImports {
  clockwise: BackgammonCheckercontainerImport[]
  counterclockwise: BackgammonCheckercontainerImport[]
}
