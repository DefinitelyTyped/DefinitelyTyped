import { array, capabilities, concat, fn, get, hash, invokeHelper, setHelperManager, uniqueId } from "@ember/helper";

array; // $ExpectType ArrayHelper
concat; // $ExpectType ConcatHelper
fn; // $ExpectType FnHelper
get; // $ExpectType GetHelper
hash; // $ExpectType HashHelper
uniqueId; // $ExpectType UniqueIdHelper
invokeHelper; // $ExpectType (context: object, definition: object, computeArgs?: ((context: object) => Partial<Arguments>) | undefined) => Cache<unknown>
capabilities; // $ExpectType <Version extends "3.23">(managerAPI: Version, options?: Partial<HelperCapabilities> | undefined) => HelperCapabilities || <Version extends keyof HelperCapabilitiesVersions>(managerAPI: Version, options?: Partial<HelperCapabilities> | undefined) => HelperCapabilities
setHelperManager; // $ExpectType <O extends object, T extends object>(factory: ManagerFactory<O | undefined, HelperManager<unknown>>, obj: T) => T || <O extends Owner, T extends object>(factory: ManagerFactory<O | undefined, HelperManager<unknown>>, obj: T) => T
