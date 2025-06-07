// Type definitions for nodots-backgammon-types
// Project: https://github.com/nodots/nodots-backgammon-types
// Definitions by: Ken Riley <https://github.com/nodots>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.5

import { BackgammonChecker } from './checker'
import {
  BackgammonBar,
  BackgammonOff,
  BackgammonPoints,
  BackgammonCheckercontainer,
  BackgammonPoint,
} from './checkercontainer'
import { BackgammonDieValue } from './dice'
import {
  BackgammonColor,
  BackgammonGame,
  BackgammonMoveDirection,
} from './game'
import { BackgammonCheckercontainerImport } from './import'
import { BackgammonMoveSkeleton } from './move'
import { BackgammonPlayer } from './player'
export interface BackgammonBoard {
  id: string
  BackgammonPoints: BackgammonPoints
  bar: {
    clockwise: BackgammonBar
    counterclockwise: BackgammonBar
  }
  off: {
    clockwise: BackgammonOff
    counterclockwise: BackgammonOff
  }
}
export type Quadrant = [
  BackgammonPoint,
  BackgammonPoint,
  BackgammonPoint,
  BackgammonPoint,
  BackgammonPoint,
  BackgammonPoint
]
export interface HomeBoard {
  BackgammonPoints: Quadrant
}
export interface BoardClass {
  id: string
  BackgammonPoints: BackgammonPoints
  bar: {
    clockwise: BackgammonBar
    counterclockwise: BackgammonBar
  }
  off: {
    clockwise: BackgammonOff
    counterclockwise: BackgammonOff
  }
  initialize: (
    boardImport?: BackgammonCheckercontainerImport[]
  ) => BackgammonBoard
  moveChecker: (
    board: BackgammonBoard,
    origin: BackgammonPoint | BackgammonBar,
    destination: BackgammonPoint | BackgammonOff,
    direction: BackgammonMoveDirection
  ) => BackgammonBoard
  getCheckers: (board: BackgammonBoard) => BackgammonChecker[]
  getCheckersForColor: (
    board: BackgammonBoard,
    color: BackgammonColor
  ) => BackgammonChecker[]
  getBackgammonPoints: (board: BackgammonBoard) => BackgammonPoint[]
  getBars: (board: BackgammonBoard) => BackgammonBar[]
  getOffs: (board: BackgammonBoard) => BackgammonOff[]
  getCheckercontainers: (board: BackgammonBoard) => BackgammonCheckercontainer[]
  getCheckercontainer: (
    board: BackgammonBoard,
    id: string
  ) => BackgammonCheckercontainer
  getPossibleMoves: (
    board: BackgammonBoard,
    player: BackgammonPlayer,
    dieValue: BackgammonDieValue
  ) => BackgammonMoveSkeleton[]
  getPipCounts: (game: BackgammonGame) => {
    black: number
    white: number
  }
  buildBoard: (
    boardImport: BackgammonCheckercontainerImport[]
  ) => BackgammonBoard
  generateRandomBoard: () => BackgammonBoard
  getAsciiBoard: (board: BackgammonBoard) => string
  displayAsciiBoard: (board: BackgammonBoard | undefined) => void
}
