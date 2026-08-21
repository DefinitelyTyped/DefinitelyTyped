import { Command } from "commander";

declare function getRemainingArgs(cli: Command): string[];

export = getRemainingArgs;
