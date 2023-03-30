import { ModuleTransportLike } from '../../../shared/types';

export interface RamBundleInfo {
    getDependencies: (filePath: string) => Set<string>;
    startupModules: Readonly<ModuleTransportLike>;
    lazyModules: Readonly<ModuleTransportLike>;
    groups: Map<number, Set<number>>;
}
