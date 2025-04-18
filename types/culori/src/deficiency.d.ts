import { Color } from "./common.js";

declare function filterDeficiencyProt(severity?: number): <C extends Color>(color: C) => C;
declare function filterDeficiencyDeuter(severity?: number): <C extends Color>(color: C) => C;
declare function filterDeficiencyTrit(severity?: number): <C extends Color>(color: C) => C;

export { filterDeficiencyDeuter, filterDeficiencyProt, filterDeficiencyTrit };
