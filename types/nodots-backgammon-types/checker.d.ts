// Type definitions for nodots-backgammon-types
// Project: https://github.com/nodots/nodots-backgammon-types
// Definitions by: Ken Riley <https://github.com/nodots>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.5

import { BackgammonColor } from './game'
import { BackgammonPlayerCheckers } from './player'
import { BackgammonBoard } from './board'
export interface BackgammonChecker {
  id: string
  color: BackgammonColor
  checkercontainerId: string
  highlight?: boolean
}
export interface BackgammonCheckers {
  white: BackgammonPlayerCheckers
  black: BackgammonPlayerCheckers
}
export interface CheckerClass {
  getCheckers: (board: BackgammonBoard) => BackgammonChecker[]
  initialize: (
    color: BackgammonColor,
    checkercontainerId: string
  ) => BackgammonChecker
  buildCheckersForCheckercontainerId: (
    checkercontainerId: string,
    color: BackgammonColor,
    count: number
  ) => BackgammonChecker[]
  getChecker: (board: BackgammonBoard, id: string) => BackgammonChecker
}
