import {
  BackgammonGame,
  BackgammonPlayerInactive,
  BackgammonBoard,
  BackgammonCube,
} from './index'

// Example usage to verify types
const player: BackgammonPlayerInactive = {
  id: 'p1',
  color: 'white',
  direction: 'clockwise',
  dice: {
    id: 'd1',
    color: 'white',
    stateKind: 'inactive',
  },
  pipCount: 0,
  stateKind: 'inactive',
}

const board: BackgammonBoard = {} as BackgammonBoard
const cube: BackgammonCube = {} as BackgammonCube

const game: BackgammonGame = {
  id: 'g1',
  players: [player, player],
  board,
  cube,
  stateKind: 'rolling-for-start',
  // ...other required properties
}

// Type assertions to ensure types are correct
;(game.players[0] as BackgammonPlayerInactive).id
