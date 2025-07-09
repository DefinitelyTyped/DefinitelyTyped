import { BackgammonChecker } from './checker'
import {
  BackgammonBar,
  BackgammonCheckerContainer,
  BackgammonOff,
  BackgammonPoint,
  BackgammonPoints,
} from './checkercontainer'
import { BackgammonDieValue } from './dice'
import {
  BackgammonColor,
  BackgammonGame,
  BackgammonMoveDirection,
} from './game'
import { BackgammonCheckerContainerImport } from './import'
import { BackgammonMoveSkeleton } from './move'
import { BackgammonPlayer } from './player'

export interface BackgammonBoard {
  id: string
  gnuPositionId: string
  asciiBoard?: string
  points: BackgammonPoints
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
  points: Quadrant
}

export interface BoardClass {
  id: string
  points: BackgammonPoints
  bar: {
    clockwise: BackgammonBar
    counterclockwise: BackgammonBar
  }
  off: {
    clockwise: BackgammonOff
    counterclockwise: BackgammonOff
  }

  initialize: (
    boardImport?: BackgammonCheckerContainerImport[]
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
  getCheckercontainers: (board: BackgammonBoard) => BackgammonCheckerContainer[]
  getCheckercontainer: (
    board: BackgammonBoard,
    id: string
  ) => BackgammonCheckerContainer
  getPossibleMoves: (
    board: BackgammonBoard,
    player: BackgammonPlayer,
    dieValue: BackgammonDieValue
  ) => BackgammonMoveSkeleton[]
  getPipCounts: (game: BackgammonGame) => { black: number; white: number }
  buildBoard: (
    boardImport: BackgammonCheckerContainerImport[]
  ) => BackgammonBoard
  generateRandomBoard: () => BackgammonBoard
  getAsciiBoard: (board: BackgammonBoard) => string
  displayAsciiBoard: (board: BackgammonBoard | undefined) => void
}
