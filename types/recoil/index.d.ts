// Type definitions for recoil 0.0
// Project: https://github.com/facebookexperimental/recoil#readme
// Definitions by: Christian Santos <https://github.com/csantos42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7

// Nominal Classes
export { DefaultValue } from './lib/core/node';

// Components
export { RecoilRoot } from './lib/core/RecoilRoot';

// Recoil state
export { atom } from './lib/core/atom';
export { selector } from './lib/core/selector';

// Hooks
export {
    useRecoilValue,
    useRecoilValueLoadable,
    useRecoilState,
    useRecoilStateLoadable,
    useSetRecoilState,
    useResetRecoilState,
    useRecoilCallback,
} from './lib/core/hooks';

// Other
export { isRecoilValue } from './lib/core/recoilValue';

// Types
export { Loadable } from './lib/core/loadable';
export { RecoilValue, RecoilValueReadOnly, RecoilState } from './lib/core/recoilValue';
