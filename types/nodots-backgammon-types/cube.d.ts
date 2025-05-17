// Project: https://github.com/nodots/nodots-backgammon-types
// Definitions by: Ken Riley <https://github.com/nodots>
// TypeScript Version: 4.5

import { BackgammonPlayer, BackgammonPlayers } from './player'
export type BackgammonCubeValue = undefined | 2 | 4 | 8 | 16 | 32 | 64
export const BackgammonCubeValues: BackgammonCubeValue[]
export type BackgammonCubeStateKind = 'initialized' | 'doubled' | 'maxxed'
interface BaseCube {
  id: string
  owner: BackgammonPlayer | undefined
  value: BackgammonCubeValue | undefined
}
interface Cube extends BaseCube {
  stateKind: BackgammonCubeStateKind
}
export interface BackgammonCubeInitialized extends Cube {
  stateKind: 'initialized'
  owner: undefined
  value: undefined
}
export interface BackgammonCubeDoubled extends Cube {
  stateKind: 'doubled'
  owner: BackgammonPlayer
  value: BackgammonCubeValue
}
export interface BackgammonCubeMaxxed extends Cube {
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
