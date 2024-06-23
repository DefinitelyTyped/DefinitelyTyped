/**
 * This class represents an implementation of the MinMax algorithm for Tic-Tac-Toe. It is based
 * on the generic graph class of Yuka and enables an optimal play behavior of the AI.
 *
 * More information about MinMax right here: https://www.youtube.com/watch?v=5oXyibEgJr0
 *
 * @author robp94 / https://github.com/robp94
 */

import { Graph } from "yuka";
import { TTTEdge } from "./TTTEdge";
import { TTTNode } from "./TTTNode";

const arrayTurn: TTTEdge[] = [];

export class TTTGraph extends Graph<TTTNode, TTTEdge> {
    nodeMap: Map<number, number>;
    currentNode: number;
    nextNode: number;
    currentPlayer: number;
    aiPlayer: number;

    constructor(humanPlayer = 1) {
        super();
        this.digraph = true;

        this.nodeMap = new Map(); // used for fast lookup, [node.value, node.index]
        this.currentNode = -1;
        this.nextNode = 0;

        this.currentPlayer = 1;
        this.aiPlayer = this.nextPlayer(humanPlayer);

        this.init();
    }

    init(): void {
        const node = new TTTNode(this.nextNode++);

        this.addNode(node);
        this.currentNode = node.index;

        // start generation of game state graph

        this.generate(node.index, this.currentPlayer);
    }

    addNode(node: TTTNode): this {
        this.nodeMap.set(node.value, node.index);
        return super.addNode(node);
    }

    generate(nodeIndex: number, activePlayer: number): number {
        const node = this.getNode(nodeIndex);
        const weights: number[] = [];

        for (let i = 0; i < 9; i++) {
            if (node.board[i] === 9) {
                // determine the next board and check if there is already a
                // respective node
                const nextBoard = this.getNextBoard(node, i, activePlayer);
                let activeNodeIndex = this.findNode(nextBoard);

                if (activeNodeIndex === -1) {
                    // there is no node representing the next board so let's create
                    // a new one

                    const nextNode = new TTTNode(this.nextNode++, nextBoard);
                    this.addNode(nextNode);
                    activeNodeIndex = nextNode.index;

                    // link the current node to the next one

                    const edge = new TTTEdge(nodeIndex, activeNodeIndex, i, activePlayer);
                    this.addEdge(edge);
                    // check if the next node represents a finished game
                    if (nextNode.finished) {
                        // if so, then compute the weight for this node and store it
                        // in the current weights array
                        this.computeWeight(nextNode);
                        weights.push(nextNode.weight);
                    } else {
                        // if not, recursively call "generate()" to continue the build of the graph
                        weights.push(this.generate(activeNodeIndex, this.nextPlayer(activePlayer)));
                    }
                } else {
                    // there is already a node representing the next board
                    // in this case we should link to it with a new edge and update the weights

                    const edge = new TTTEdge(nodeIndex, activeNodeIndex, i, activePlayer);
                    this.addEdge(edge);

                    const nextNode = this.getNode(activeNodeIndex);
                    weights.push(nextNode.weight);
                }
            }
        }

        // update weight for the current node
        if (activePlayer === this.aiPlayer) {
            node.weight = Math.max(...weights);
            return node.weight;
        } else {
            node.weight = Math.min(...weights);
            return node.weight;
        }
    }

    aiTurn() {
        const currentWeight = this.getNode(this.currentNode).weight;

        // perform best possible move
        const possibleMoves: TTTEdge[] = [];
        this.getEdgesOfNode(this.currentNode, possibleMoves);
        let bestMove;

        for (let i = 0, l = possibleMoves.length; i < l; i++) {
            const move = possibleMoves[i];
            const node = this.getNode(move.to);
            if (node.weight === currentWeight) {
                // check if the AI can immediately finish the game
                if (node.finished) {
                    // if so, perform the move
                    this.turn(move.cell, this.aiPlayer);
                    return;
                } else if (bestMove === undefined) {
                    // otherwise save it if no better move is found
                    bestMove = move;
                }
            }
        }
        if (!bestMove) {
            throw new Error("Failed to select move");
        }
        this.turn(bestMove.cell, this.aiPlayer);
    }

    getNextBoard(node: TTTNode, cell: number, player: number): number[] {
        const board = node.board.slice();
        board[cell] = player;

        return board;
    }

    nextPlayer(currentPlayer: number) {
        return (currentPlayer % 2) + 1;
    }

    findNode(board: number[]) {
        const value = parseInt(board.join(""), 10);
        const node = this.nodeMap.get(value);

        return node ? node : -1;
    }

    turn(cell: number, player: number) {
        arrayTurn.length = 0;
        this.getEdgesOfNode(this.currentNode, arrayTurn);
        for (let i = 0, l = arrayTurn.length; i < l; i++) {
            const edge = arrayTurn[i];
            if (edge.cell === cell && edge.player === player) {
                this.currentNode = edge.to;
                this.currentPlayer = this.nextPlayer(player);
                break;
            }
        }
    }

    // called for node that represents an end of the game (win/draw)

    computeWeight(node: TTTNode) {
        node.weight = node.win ? ((node.winPlayer === this.aiPlayer) ? 100 : -100) : 0;
    }
}
