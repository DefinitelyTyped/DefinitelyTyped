import { Color } from "./common";

type FilterDeficiencyFactory = (severity: number) => <C extends Color>(color: C) => C;

declare const filterDeficiencyProt: FilterDeficiencyFactory;
declare const filterDeficiencyDeuter: FilterDeficiencyFactory;
declare const filterDeficiencyTrit: FilterDeficiencyFactory;

export { filterDeficiencyDeuter, filterDeficiencyProt, filterDeficiencyTrit };
