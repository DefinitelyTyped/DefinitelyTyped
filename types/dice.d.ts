// Type definitions for nodots-backgammon-types
// Project: https://github.com/nodots/nodots-backgammon-types
// Definitions by: Ken Riley <https://github.com/nodots>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.5

import { BackgammonColor } from './game'
export type BackgammonDieValue = 1 | 2 | 3 | 4 | 5 | 6
export type BackgammonDieOrder = 0 | 1
export type BackgammonRoll = [BackgammonDieValue, BackgammonDieValue]
export type BackgammonDiceStateKind = 'inactive' | 'rolling' | 'rolled'
type BaseDice = {
  id: string
  color: BackgammonColor
  currentRoll?: BackgammonRoll | undefined
  total?: number
}
type Dice = BaseDice & {
  stateKind: BackgammonDiceStateKind
}
export type BackgammonDiceInactive = Dice & {
  stateKind: 'inactive'
}
export type BackgammonDiceRolling = Dice & {
  stateKind: 'rolling'
}
export type BackgammonDiceRolled = Dice & {
  stateKind: 'rolled'
  currentRoll: BackgammonRoll
  total: number
}
export type BackgammonDice =
  | BackgammonDiceInactive
  | BackgammonDiceRolling
  | BackgammonDiceRolled
export interface DiceClass {
  id: string
  stateKind: BackgammonDiceStateKind
  color: BackgammonColor | undefined
  currentRoll: BackgammonRoll | undefined
  initialize: (
    color: BackgammonColor,
    stateKind?: BackgammonDiceStateKind,
    id?: string,
    currentRoll?: BackgammonRoll
  ) => BackgammonDiceInactive
  roll: (dice: BackgammonDiceInactive) => BackgammonDiceRolled
  switchDice: (dice: BackgammonDiceRolled) => BackgammonDiceRolled
  isDouble: (dice: BackgammonDiceRolled) => boolean
  rollDie: () => BackgammonDieValue
  _RandomRoll: BackgammonRoll
}
export {}
