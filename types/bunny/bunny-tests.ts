import { cells, positions } from "bunny";

cells; // $ExpectType [number, number, number][]
cells[0]; // $ExpectType [number, number, number]

positions; // $ExpectType [number, number, number][]
positions[0]; // $ExpectType [number, number, number]
