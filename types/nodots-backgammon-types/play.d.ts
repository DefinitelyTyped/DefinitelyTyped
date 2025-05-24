// Project: https://github.com/nodots/nodots-backgammon-types
// Definitions by: Ken Riley <https://github.com/nodots>
// TypeScript Version: 4.5

import { BackgammonMoves, BackgammonMoveCompleted } from './move'
import {
  BackgammonPlayer,
  BackgammonPlayerMoving,
  BackgammonPlayerRolled,
  BackgammonPlayerRolling,
} from './player'
import { BackgammonBoard } from './board'
import { BackgammonCube } from './cube'
import { BackgammonMoveOrigin } from './checkercontainer'
export interface BackgammonPlayResult {
  board: BackgammonBoard
  play: BackgammonPlay
  move: BackgammonMoveCompleted
}
export type BackgammonPlayStateKind =
  | 'rolling'
  | 'rolled'
  | 'moving'
  | 'moved'
  | 'confirmed'
  | 'doubled'
interface BasePlay {
  id: string
  player: BackgammonPlayer
  board: BackgammonBoard
  moves?: BackgammonMoves
}
interface Play extends BasePlay {
  stateKind: BackgammonPlayStateKind
}
export interface BackgammonPlayRolling extends Play {
  stateKind: 'rolling'
  player: BackgammonPlayerRolling
}
export interface BackgammonPlayRolled extends Play {
  stateKind: 'rolled'
  player: BackgammonPlayerRolled
  moves: BackgammonMoves
}
export interface BackgammonPlayDoubled extends Play {
  stateKind: 'doubled'
}
export interface BackgammonPlayMoving extends Play {
  stateKind: 'moving'
  player: BackgammonPlayerMoving
  moves: BackgammonMoves
}
export interface BackgammonPlayMoved extends Play {
  stateKind: 'moved'
  player: BackgammonPlayer
}
export interface BackgammonPlayConfirmed extends Play {
  stateKind: 'confirmed'
  player: BackgammonPlayer
}
export type BackgammonPlay =
  | BackgammonPlayRolling
  | BackgammonPlayRolled
  | BackgammonPlayDoubled
  | BackgammonPlayMoving
  | BackgammonPlayMoved
  | BackgammonMoveCompleted
export interface BackgammonRollResults {
  player: BackgammonPlayerRolled
  activePlay: BackgammonPlayRolled
}
export interface BackgammonPlayResults {
  board: BackgammonBoard
  play: BackgammonPlay
}
export interface PlayProps {
  id?: string
  cube?: BackgammonCube
  stateKind?: BackgammonPlayStateKind
  moves?: BackgammonMoves
  board: BackgammonBoard
  player: BackgammonPlayerRolling | BackgammonPlayerMoving
}
export interface PlayClass {
  id?: string
  cube?: BackgammonCube
  stateKind?: BackgammonPlayStateKind
  moves?: BackgammonMoves
  board: BackgammonBoard
  player:
    | BackgammonPlayerRolling
    | BackgammonPlayerRolled
    | BackgammonPlayerMoving
  initialize: (
    board: BackgammonBoard,
    player: BackgammonPlayerRolled
  ) => BackgammonPlayRolled
  move: (
    board: BackgammonBoard,
    play: BackgammonPlayRolled | BackgammonPlayMoving,
    origin: BackgammonMoveOrigin
  ) => {
    play: BackgammonPlayMoving
    board: BackgammonBoard
    move: BackgammonMoveCompleted
  }
}
export {}
