import { array, capabilities, concat, fn, get, hash, invokeHelper, setHelperManager, uniqueId } from "@ember/helper";

array; // $ExpectType ArrayHelper
concat; // $ExpectType ConcatHelper
fn; // $ExpectType FnHelper
get; // $ExpectType GetHelper
hash; // $ExpectType HashHelper
uniqueId; // $ExpectType UniqueIdHelper
invokeHelper; // $ExpectType (context: object, definition: object, computeArgs?: ((context: object) => Partial<Arguments>) | undefined) => Cache<unknown>
capabilities; //  $ExpectType <O extends object, T extends object>(factory: ManagerFactory<O | undefined, HelperManager<unknown>>, obj: T) => T
setHelperManager; // $ExpectType <O extends object, T extends object>(factory: ManagerFactory<O | undefined, HelperManager<unknown>>, obj: T) => T
