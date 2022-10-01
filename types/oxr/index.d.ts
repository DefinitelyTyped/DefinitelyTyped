// Type definitions for oxr 1.1
// Project: https://github.com/continuous-software/oxr
// Definitions by: LEEJUN KIM <https://github.com/hwanam1111>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface LatestInput {
  base?: string;
  symbol?: string;
  prettyprint?: boolean;
  show_alternative?: boolean;
}

export interface HistoricalInput {
  base?: string;
  symbol?: string;
  prettyprint?: boolean;
  show_alternative?: boolean;
}

export interface FetchRatesResultOutput {
  disclaimer: string;
  license: string;
  timestamp: number;
  base: string;
  rates: {
    [key: string]: number;
  };
}

export interface CurrenciesInput {
  prettyprint?: boolean;
  show_alternative?: boolean;
  show_inactive?: boolean;
}

export interface CurrenciesOutput {
  [key: string]: string;
}

export interface FactoryOutput {
  latest: (latestInput?: LatestInput, requestOptions?: any) => Promise<FetchRatesResultOutput>;
  historical: (date: string | Date, historicalInput?: HistoricalInput, requestOptions?: any) => Promise<FetchRatesResultOutput>;
  currencies: (currenciesInput?: CurrenciesInput, requestOptions?: any) => Promise<CurrenciesOutput>;
}

export interface OxrErrorOutput {
  status: number;
  message: string;
  description: string;
}

export function OxrError(
  status: number,
  message: string,
  description: string,
): OxrErrorOutput;

export function cache(cacheOptions: object, service: FactoryOutput['latest'] | FactoryOutput['historical']): Promise<FetchRatesResultOutput>;

export function factory({ appId }: { appId: string }): FactoryOutput;
