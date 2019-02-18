// Type definitions for monome-grid 1.0
// Project: https://github.com/dinchak/node-monome-grid
// Definitions by: Arlan Jaska <https://github.com/ajaska>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

export interface MonomeGrid {
  refresh(leds: number[][]): void;
  key(keyHandler: (x: number, y: number, s: number) => void): void;
}

export default function monomeGrid(serialNumber?: string): Promise<MonomeGrid>;
