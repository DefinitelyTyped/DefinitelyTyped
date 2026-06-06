import parse = require("parse-svg-path");

// Test basic parsing
const commands = parse("M0 0 L10 10 Z");

// Each command is an array with command letter and args
const firstCommand: [string, ...number[]] = commands[0];
const commandLetter: string = firstCommand[0];

// Test various SVG path commands
const moveAndLine = parse("M 10 20 L 30 40");
const curves = parse("M0 0 C10 10 20 20 30 30");
const arcs = parse("M0 0 A5 5 0 0 1 10 10");
const relative = parse("m10 10 l5 5 h10 v10");
const closePath = parse("M0 0 L10 0 L10 10 Z");

// Test that result is an array
const isArray: boolean = Array.isArray(commands);
const length: number = commands.length;

// Test iteration
for (const cmd of commands) {
    const letter: string = cmd[0];
    const args: number[] = cmd.slice(1) as number[];
}
