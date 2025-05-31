// Type definitions for nodots-backgammon-types
// Project: https://github.com/nodots/nodots-backgammon-types
// Definitions by: Ken Riley <https://github.com/nodots>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.5

import { BackgammonBoard } from './board'
import { BackgammonCube } from './cube'
import { IntegerRange } from './generics'
import {
  BackgammonPlay,
  BackgammonPlayMoving,
  BackgammonPlayRolled,
} from './play'
import {
  BackgammonPlayerActive,
  BackgammonPlayers,
  BackgammonPlayerWinner,
  BackgammonPlayerInactive,
  BackgammonPlayerRolling,
  BackgammonPlayer,
} from './player'
import { BackgammonMoveOrigin } from './checkercontainer'
export type Latitude = 'north' | 'south'
export type Longitude = 'east' | 'west'
export type BackgammonColor = 'black' | 'white'
export type BackgammonMoveDirection = 'clockwise' | 'counterclockwise'
export type BackgammonPips = IntegerRange<1, 167>
export declare const MAX_PIP_COUNT = 167
export declare const CHECKERS_PER_PLAYER = 15
export type BackgammonGameStateKind =
  | 'rolling-for-start'
  | 'rolled-for-start'
  | 'rolling'
  | 'moving'
  | 'completed'
type BaseGame = {
  id: string
  players: BackgammonPlayers
  board: BackgammonBoard
  cube: BackgammonCube
  winner?: BackgammonPlayer
  activeColor?: BackgammonColor
  activePlay?: BackgammonPlay
  activePlayer?: BackgammonPlayer
  inactivePlayer?: BackgammonPlayer
}
type Game = BaseGame & {
  stateKind: BackgammonGameStateKind
}
export type BackgammonGameRollingForStart = Game & {
  stateKind: 'rolling-for-start'
}
export type BackgammonGameRolledForStart = Game & {
  stateKind: 'rolled-for-start'
  activeColor: BackgammonColor
  activePlayer: BackgammonPlayerRolling
  inactivePlayer: BackgammonPlayerInactive
}
export type BackgammonGameRolling = Game & {
  stateKind: 'rolling'
  activeColor: BackgammonColor
  activePlayer: BackgammonPlayerActive
  inactivePlayer: BackgammonPlayerInactive
}
export type BackgammonGameRolled = Game & {
  stateKind: 'rolled'
  activeColor: BackgammonColor
  activePlayer: BackgammonPlayerActive
  inactivePlayer: BackgammonPlayerInactive
  activePlay: BackgammonPlayRolled
}
export type BackgammonGameMoving = Game & {
  stateKind: 'moving'
  activeColor: BackgammonColor
  activePlay: BackgammonPlayMoving
  activePlayer: BackgammonPlayerActive
  inactivePlayer: BackgammonPlayerInactive
}
export type BackgammonGameCompleted = Game & {
  stateKind: 'completed'
  winner: BackgammonPlayerWinner
}
export type BackgammonGame =
  | BackgammonGameRollingForStart
  | BackgammonGameRolledForStart
  | BackgammonGameRolling
  | BackgammonGameMoving
  | BackgammonGameCompleted
export interface GameProps {
  players: BackgammonPlayers
  board?: BackgammonBoard
  cube?: BackgammonCube
}
export interface GameClass {
  id: string
  stateKind: BackgammonGameStateKind
  players: BackgammonPlayers
  board: BackgammonBoard
  cube: BackgammonCube
  activeColor: BackgammonColor
  activePlay: BackgammonPlay
  activePlayer: BackgammonPlayerActive
  inactivePlayer: BackgammonPlayerInactive
  initialize: (
    players: BackgammonPlayers,
    id?: string,
    stateKind?: BackgammonGameStateKind,
    board?: BackgammonBoard,
    cube?: BackgammonCube,
    activePlay?: BackgammonPlay,
    activeColor?: BackgammonColor,
    activePlayer?: BackgammonPlayerActive,
    inactivePlayer?: BackgammonPlayerInactive,
    origin?: BackgammonMoveOrigin
  ) => BackgammonGame
  rollForStart: (game: BackgammonGameRollingForStart) => BackgammonGameRolling
  roll: (game: BackgammonGameRolledForStart) => BackgammonGameRolled
  move: (
    game: BackgammonGameMoving | BackgammonGameRolled,
    origin: BackgammonMoveOrigin
  ) => BackgammonGameMoving
  getActivePlayer: (game: BackgammonGame) => BackgammonPlayerActive
  getInactivePlayer: (game: BackgammonGame) => BackgammonPlayerInactive
  getPlayersForColor: (
    players: BackgammonPlayers,
    color: BackgammonColor
  ) => [BackgammonPlayerActive, BackgammonPlayerInactive]
  sanityCheckMovingGame: (game: BackgammonGame) => BackgammonGameMoving | false
}
export {}
