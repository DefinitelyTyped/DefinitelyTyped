// Type definitions for enzyme-to-json 1.5
// Project: https://github.com/adriantoine/enzyme-to-json#readme
// Definitions by: Joscha Feth <https://github.com/joscha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

import { ReactWrapper, ShallowWrapper } from 'enzyme';

export default function toJson<P, S>(wrapper: ShallowWrapper<P, S> | ReactWrapper<P, S> | Cheerio): object;
