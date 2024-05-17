import { Chess,ChessFrontend } from "."; 
let backendgame = new Chess()
backendgame.makeMove("e2","e4")
let gamefen = backendgame.encodeBoard()
let ischeck = backendgame.isCheck("black",backendgame.board)

let front = new ChessFrontend(gamefen)
front.makeMove("e7","e5")