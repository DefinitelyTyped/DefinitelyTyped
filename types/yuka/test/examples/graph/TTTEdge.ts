/**
 * @author robp94 / https://github.com/robp94
 */

import { Edge } from "yuka";

export class TTTEdge extends Edge {
    cell: number;
    player: number;

    constructor(from: number, to: number, cell: number, player: number) {
        super(from, to);

        // the following properties represent the move which
        // transitions from one board to the next one

        this.cell = cell; // the chosen cell/field
        this.player = player; // this player made the move
    }
}
