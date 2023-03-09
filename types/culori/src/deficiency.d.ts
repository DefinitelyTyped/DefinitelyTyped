import { Color } from './common';

type FilterDeficiencyFactory = (
	severity: number
) => <C extends Color>(color: C) => C;

export const filterDeficiencyProt: FilterDeficiencyFactory;
export const filterDeficiencyDeuter: FilterDeficiencyFactory;
export const filterDeficiencyTrit: FilterDeficiencyFactory;
