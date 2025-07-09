import { BackgammonBoard } from './board'
import { BackgammonColor } from './game'
import { BackgammonPlayerCheckers } from './player'

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
