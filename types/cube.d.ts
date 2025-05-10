// Type definitions for nodots-backgammon-types
// Project: https://github.com/nodots/nodots-backgammon-types
// Definitions by: Ken Riley <https://github.com/nodots>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.5

import { BackgammonPlayer, BackgammonPlayers } from './player'
export type BackgammonCubeValue = undefined | 2 | 4 | 8 | 16 | 32 | 64
export declare const BackgammonCubeValues: BackgammonCubeValue[]
export type BackgammonCubeStateKind = 'initialized' | 'doubled' | 'maxxed'
type BaseCube = {
  id: string
  owner: BackgammonPlayer | undefined
  value: BackgammonPlayer | undefined
}
type Cube = BaseCube & {
  stateKind: BackgammonCubeStateKind
}
export type BackgammonCubeInitialized = Cube & {
  stateKind: 'initialized'
  owner: undefined
  value: undefined
}
export type BackgammonCubeDoubled = Cube & {
  stateKind: 'doubled'
  owner: BackgammonPlayer
  value: BackgammonCubeValue
}
export type BackgammonCubeMaxxed = Cube & {
  stateKind: 'maxxed'
  owner: undefined
  value: 64
}
export type BackgammonCube =
  | BackgammonCubeInitialized
  | BackgammonCubeDoubled
  | BackgammonCubeMaxxed
export interface CubeProps {
  id?: string
  stateKind?: BackgammonCubeStateKind
  value?: BackgammonCubeValue
  owner?: BackgammonPlayer
}
export interface CubeClass {
  id: string
  stateKind: BackgammonCubeStateKind
  value: BackgammonCubeValue | undefined
  owner: BackgammonPlayer | undefined
  initialize: (cube?: CubeProps) => Cube
  double: (
    cube: Cube,
    player: BackgammonPlayer,
    players: BackgammonPlayers
  ) => BackgammonCubeDoubled | BackgammonCubeMaxxed
}
export {}
