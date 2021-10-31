import yargs = require("./index.js");
interface RequireType {
  (path: string): Function;
  main: MainType;
}

interface MainType {
  filename: string;
  children: MainType[];
}
declare const _instanceFactory: (processArgs: string[], cwd?: string, parentRequire?: RequireType) => yargs.Argv;
export default _instanceFactory;
