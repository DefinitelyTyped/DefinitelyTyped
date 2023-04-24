import type { ConfigT } from '../configTypes';

export default interface getDefaultConfig {
    (rootPath: string | null): Promise<ConfigT>;
    getDefaultValues: (rootPath: string | null) => ConfigT;
}
