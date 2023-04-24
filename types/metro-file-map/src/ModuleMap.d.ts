import type { HTypeValue, IModuleMap, Path, ReadOnlyRawModuleMap } from './flow-types';

export default class ModuleMap implements IModuleMap {
    getModule(
        name: string,
        platform?: string | null,
        supportsNativePlatform?: boolean | null,
        type?: HTypeValue | null,
    ): Path | null;
    getPackage(name: string, platform: string | null, _supportsNativePlatform?: boolean | null): Path | null;
    getMockModule(name: string): Path | null;
    getRawModuleMap(): ReadOnlyRawModuleMap;
    static create(rootDir: Path): ModuleMap;
}
