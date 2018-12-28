import bunny from "bunny";

bunny.cells; // $ExpectType [number, number, number][]
bunny.cells[0]; // $ExpectType [number, number, number]

bunny.positions; // $ExpectType [number, number, number][]
bunny.positions[0]; // $ExpectType [number, number, number]
