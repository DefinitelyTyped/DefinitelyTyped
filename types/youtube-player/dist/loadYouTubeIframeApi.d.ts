import { EmitterType, IframeApiType } from './types';

declare function Loader(emitter: EmitterType): Promise<IframeApiType>;
export default Loader;
