import { TTTGraph } from "./TTTGraph";

let player: number;
let graph: TTTGraph;
let fin = false;

function initGame() {
    // create game state graph
    graph = new TTTGraph(player);
    // let the ai make its first move
    if (player === 2) {
        graph.aiTurn();
        updateUI();
    }
}

function onButtonClick(playerNumber: number) {
    player = playerNumber;
    initGame();
}

function onCellClick(cellid: number) {
    if (!fin) {
        graph.turn(cellid, graph.currentPlayer);
        evaluate();
        if (!fin) {
            graph.aiTurn();
            evaluate();
        }
        updateUI();
    }
}

function evaluate() {
    const board = graph.getNode(graph.currentNode);
    if (board.win || board.finished) {
        fin = true;
    }
}

function updateUI() {
    const node = graph.getNode(graph.currentNode);
    const board = node.board;
    const cells = document.querySelectorAll<HTMLButtonElement>(".cell");
    cells.forEach(cell => {
        const cellid: number = parseInt(cell.dataset.cellid || "", 10);
        const status = board[cellid];
        switch (status) {
            case 1:
                cell.textContent = "X";
                break;
            case 2:
                cell.textContent = "O";
                break;
            default:
                cell.textContent = "";
                break;
        }
    });

    if (fin) {
        const intro = document.getElementById("intro");
        if (intro) {
            intro.classList.remove("hidden");
        }
        const startSection = document.getElementById("startSection");
        if (startSection) {
            startSection.style.display = "none";
        }
        const endSection = document.getElementById("endSection");
        if (endSection) {
            endSection.style.display = "flex";
        }
        const result = document.getElementById("result");
        if (!result) {
            return;
        }

        result.textContent = (node.win)
            ? ((node.winPlayer === player) ? "You win the game!" : "The AI wins the game!")
            : "Draw!";
    }
}
