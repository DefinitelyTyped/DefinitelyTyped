import { YargArguments, InputConfigT, ConfigT } from './configTypes';

export function loadConfig(argv?: YargArguments, defaultConfigOverrides?: InputConfigT): Promise<ConfigT>;
