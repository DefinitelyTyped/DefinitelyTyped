import { Color } from './common';

type FilterDeficiencyFactory = (severity: number) => <C extends Color>(color: C) => C;

const filterDeficiencyProt: FilterDeficiencyFactory;
const filterDeficiencyDeuter: FilterDeficiencyFactory;
const filterDeficiencyTrit: FilterDeficiencyFactory;

export { filterDeficiencyProt, filterDeficiencyDeuter, filterDeficiencyTrit };
