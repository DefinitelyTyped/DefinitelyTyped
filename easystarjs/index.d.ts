// Type definitions for EasyStar.js 0.1.6
// Project: http://easystarjs.com/
// Definitions by: Magnus Gustafsson <https://github.com/borundin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped  

/*
 easystarjs.d.ts may be freely distributed under the MIT license.
 */

export = easystarjs;

declare namespace easystarjs
{
    class js
    {
        new (): js;
        setGrid(grid: number[][]): void;
        setAcceptableTiles(tiles: number[]): void;
        findPath(startX: number, startY: number, endX: number, endY: number, callback: (path: Position[]) => void): void;
        calculate(): void;
        setIterationsPerCalculation(iterations: number): void;
        avoidAdditionalPoint(x: number, y: number): void;
        stopAvoidingAdditionalPoint(x: number, y: number): void;
        stopAvoidingAllAdditionalPoints(): void;
        enableDiagonals(): void;
        disableDiagonals(): void;
        setTileCost(tileType: number, multiplicativeCost: number): void;
    }

    interface Position
    {
        x: number;
        y: number;
    }
}