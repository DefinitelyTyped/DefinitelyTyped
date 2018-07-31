// Type definitions for pathfinding
// Project: https://github.com/qiao/PathFinding.js
// Definitions by: BNedry <https://github.com/BNedry>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "pathfinding" {
    namespace Pathfinding {
        export namespace Heuristic {
            function manhattan(dx: number, dy: number): number;
            function euclidean(dx: number, dy: number): number;
            function octile(dx: number, dy: number): number;
            function chebyshev(dx: number, dy: number): number;
        }

        export namespace Util {
            function smoothenPath(grid: Grid, path: number[][]): number[][];
            function compressPath(path: number[][]): number[][];
            function expandPath(path: number[][]): number[][];
        }

        export enum DiagonalMovement {
            Always = 1,
            Never = 2,
            IfAtMostOneObstacle = 3,
            OnlyWhenNoObstacle = 4
        }

        interface Node {
            x: number;
            y: number;
            walkable: boolean;
        }

        interface Heuristic {
            heuristic?: (dx: number, dy: number) => number;
        }

        interface FinderOptions extends Heuristic {
            diagonalMovement?: DiagonalMovement;
            weight?: number;
        }

        interface IDAStarFinderOptions extends FinderOptions {
            trackRecursion?: boolean;
            timeLimit?: number;
        }

        interface JumpPointFinderBaseOptions extends Heuristic {
            trackJumpRecursion?: boolean;
        }

        interface JumpPointFinderOptions extends Heuristic {
            diagonalMovement?: DiagonalMovement;
        }

        interface BiBreadthFirstFinderOptions {
            diagonalMovement?: DiagonalMovement;
        }

        interface Grid {
            new (width: number, height: number): Grid;
            new (matrix: number[][]): Grid;

            setWalkableAt(x: number, y: number, walkable: boolean): void;

            clone(): Grid;

            getNodeAt(): Pathfinding.Node;
            getNeighbors(node: Pathfinding.Node, diagonalMovement: DiagonalMovement): Pathfinding.Node[];
            isWalkableAt(x: number, y: number): boolean;
            isInside(x: number, y: number): boolean;

            width: number;
            height: number;
        }

        interface Finder {
            findPath(startX: number, startY: number, endX: number, endY: number, matrix: Grid): number[][];
        }

        interface AStarFinder extends Finder {
            new (): AStarFinder;
            new (opt: FinderOptions): AStarFinder;
        }

        interface BestFirstFinder extends AStarFinder {
            new (): BestFirstFinder;
            new (opt: JumpPointFinderOptions): BestFirstFinder;
        }

        interface BiAStarFinder extends Finder {
            new (): BiAStarFinder;
            new (opt: JumpPointFinderOptions): BiAStarFinder;
        }

        interface BiBestFirstFinder extends BiAStarFinder {
            new (): BiBestFirstFinder;
            new (opt: JumpPointFinderOptions): BiBestFirstFinder;
        }

        interface BiBreadthFirstFinder extends Finder {
            new (): BiBreadthFirstFinder;
            new (opt: BiBreadthFirstFinderOptions): BiBreadthFirstFinder;
        }

        interface BiDijkstraFinder extends BiAStarFinder {
            new (): BiDijkstraFinder;
            new (opt: BiBreadthFirstFinderOptions): BiDijkstraFinder;
        }

        interface BreadthFirstFinder extends Finder {
            new (): BreadthFirstFinder;
            new (opt: BiBreadthFirstFinderOptions): BreadthFirstFinder;
        }

        interface DijkstraFinder extends AStarFinder {
            new (): DijkstraFinder;
            new (opt: BiBreadthFirstFinderOptions): DijkstraFinder;
        }

        interface IDAStarFinder extends Finder {
            new (): IDAStarFinder;
            new (opt: IDAStarFinderOptions): IDAStarFinder;
        }

        interface JumpPointFinderBase extends Finder {
            new (): JumpPointFinderBase;
            new (opt: JumpPointFinderBaseOptions): JumpPointFinderBase;
        }

        interface JPFAlwaysMoveDiagonally extends JumpPointFinderBase {
            new (): JPFAlwaysMoveDiagonally;
            new (opt: JumpPointFinderBaseOptions): JPFAlwaysMoveDiagonally;
        }

        interface JPFMoveDiagonallyIfAtMostOneObstacle extends JumpPointFinderBase {
            new (): JPFMoveDiagonallyIfAtMostOneObstacle;
            new (opt: JumpPointFinderBaseOptions): JPFMoveDiagonallyIfAtMostOneObstacle;
        }

        interface JPFMoveDiagonallyIfNoObstacles extends JumpPointFinderBase {
            new (): JPFMoveDiagonallyIfNoObstacles;
            new (opt: JumpPointFinderBaseOptions): JPFMoveDiagonallyIfNoObstacles;
        }

        interface JPFNeverMoveDiagonally extends JumpPointFinderBase {
            new (): JPFNeverMoveDiagonally;
            new (opt: JumpPointFinderBaseOptions): JPFNeverMoveDiagonally;
        }

        interface JumpPointFinder {
            (opt: JumpPointFinderOptions): JPFNeverMoveDiagonally | JPFAlwaysMoveDiagonally | JPFMoveDiagonallyIfNoObstacles | JPFMoveDiagonallyIfAtMostOneObstacle;
        }

        export var Grid: Grid;
        export var AStarFinder: AStarFinder;
        export var BestFirstFinder: BestFirstFinder;
        export var BiAStarFinder: BiAStarFinder;
        export var BiBestFirstFinder: BiBestFirstFinder;
        export var BiBreadthFirstFinder: BiBreadthFirstFinder;
        export var BiDijkstraFinder: BiDijkstraFinder;
        export var BreadthFirstFinder: BreadthFirstFinder;
        export var DijkstraFinder: DijkstraFinder;
        export var IDAStarFinder: IDAStarFinder;
        export var JPFAlwaysMoveDiagonally: JPFAlwaysMoveDiagonally;
        export var JPFMoveDiagonallyIfAtMostOneObstacle: JPFMoveDiagonallyIfAtMostOneObstacle;
        export var JPFMoveDiagonallyIfNoObstacles: JPFMoveDiagonallyIfNoObstacles;
        export var JPFNeverMoveDiagonally: JPFNeverMoveDiagonally;
        export var JumpPointFinder: JumpPointFinder;
    }
    export = Pathfinding;
}