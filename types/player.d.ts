// Type definitions for nodots-backgammon-types
// Project: https://github.com/nodots/nodots-backgammon-types
// Definitions by: Ken Riley <https://github.com/nodots>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.5

import { BackgammonChecker } from './checker'
import {
  BackgammonDice,
  BackgammonDiceInactive,
  BackgammonDiceRolling,
  BackgammonDiceRolled,
} from './dice'
import { BackgammonPips } from './pip'
import { BackgammonMoveDirection, BackgammonColor } from './game'
import { BackgammonBoard } from './board'
import { BackgammonPlayMoving } from './play'
import { BackgammonMoveResult } from './move'
import { BackgammonMoveOrigin, BackgammonPoint } from './checkercontainer'
export type BackgammonPlayerStateKind =
  | 'inactive'
  | 'rolling-for-start'
  | 'rolled-for-start'
  | 'rolling'
  | 'rolled'
  | 'moving'
  | 'moved'
  | 'winner'
type BasePlayer = {
  id?: string
  color: BackgammonColor
  direction: BackgammonMoveDirection
  dice: BackgammonDice
  pipCount: BackgammonPips
}
type Player = BasePlayer & {
  stateKind: BackgammonPlayerStateKind
}
export type BackgammonPlayerInitializing = Player & {
  stateKind: 'initializing'
}
export type BackgammonPlayerInactive = Player & {
  id: string
  stateKind: 'inactive'
  dice: BackgammonDiceInactive
}
export type BackgammonPlayerRollingForStart = Player & {
  id: string
  stateKind: 'rolling-for-start'
  dice: BackgammonDiceInactive
}
export type BackgammonPlayerRolledForStart = Player & {
  id: string
  stateKind: 'rolled-for-start'
  dice: BackgammonDiceInactive
}
export type BackgammonPlayerRolling = Player & {
  id: string
  stateKind: 'rolling'
  dice: BackgammonDiceRolling
}
export type BackgammonPlayerRolled = Player & {
  id: string
  stateKind: 'rolled'
  dice: BackgammonDiceRolled
}
export type BackgammonPlayerMoving = Player & {
  id: string
  stateKind: 'moving'
  dice: BackgammonDiceRolled
}
export type BackgammonPlayerMoved = Player & {
  id: string
  stateKind: 'moved'
  dice: BackgammonDiceRolled
}
export type BackgammonPlayerWinner = Player & {
  id: string
  stateKind: 'winner'
  dice: BackgammonDiceRolled
}
export type BackgammonPlayer =
  | BackgammonPlayerInactive
  | BackgammonPlayerRollingForStart
  | BackgammonPlayerRolledForStart
  | BackgammonPlayerRolling
  | BackgammonPlayerRolled
  | BackgammonPlayerMoving
  | BackgammonPlayerMoved
  | BackgammonPlayerWinner
export type BackgammonPlayerActive =
  | BackgammonPlayerRollingForStart
  | BackgammonPlayerRolledForStart
  | BackgammonPlayerRolling
  | BackgammonPlayerRolled
  | BackgammonPlayerMoving
  | BackgammonPlayerMoved
export type BackgammonPlayers = [BackgammonPlayer, BackgammonPlayer]
export type BackgammonPlayerCheckers<
  T extends BackgammonChecker = BackgammonChecker
> = [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T]
export interface PlayerClass {
  id: string
  stateKind: BackgammonPlayerStateKind
  dice: BackgammonDice
  pipCount: number
  initialize: (
    color: BackgammonColor,
    direction: BackgammonMoveDirection,
    dice?: BackgammonDice,
    id?: string,
    stateKind?: BackgammonPlayerStateKind
  ) => BackgammonPlayer
  roll: (player: BackgammonPlayerRolling) => BackgammonPlayerRolled
  move: (
    board: BackgammonBoard,
    play: BackgammonPlayMoving,
    origin: BackgammonMoveOrigin
  ) => BackgammonMoveResult
  getHomeBoard: (
    board: BackgammonBoard,
    player: BackgammonPlayer
  ) => BackgammonPoint[]
  getOpponentBoard: (
    board: BackgammonBoard,
    player: BackgammonPlayer
  ) => BackgammonPoint[]
}
export {}
