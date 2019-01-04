import { Argv } from "./index";

declare function yargs(
  args?: ReadonlyArray<string>,
  cwd?: string,
  require?: any
): Argv;

export = yargs;
