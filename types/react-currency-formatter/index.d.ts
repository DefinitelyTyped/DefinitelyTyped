// Type definitions for react-currency-formatter 1.1
// Project: https://github.com/xDae/react-currency-formatter;
// Definitions by: Yury Pastushenko <https://github.com/pastushenkoy>
//                 Evgeniy Vasiliev <https://github.com/Jeka-Vasiliev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

interface CurrencyFormatterProps {
	quantity: number;
	currency?: string;
	locale?: string;
	pattern?: string;
	decimal?: string;
	group?: string;
}

declare const reactCurrencyFormatter: React.ComponentClass<CurrencyFormatterProps>;
export = reactCurrencyFormatter;
