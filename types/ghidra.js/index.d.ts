export * from "./AbortedTransactionListener";
export * from "./Address";
export * from "./AddressFactory";
export * from "./AddressMap";
export * from "./AddressRange";
export * from "./AddressRangeIterator";
export * from "./AddressSetPropertyMap";
export * from "./AddressSetView";
export * from "./BookmarkManager";
export * from "./CheckinHandler";
export * from "./CodeManager";
export * from "./CompilerSpec";
export * from "./Consumer";
export * from "./DataTypeManager";
export * from "./DataTypeManagerDomainObject";
export * from "./DomainFile";
export * from "./DomainFolder";
export * from "./DomainObject";
export * from "./EquateTable";
export * from "./ExternalManager";
export * from "./GhidraFunctionManager";
export * from "./IntPropertyMap";
export * from "./IntRangeMap";
export * from "./ItemCheckoutStatus";
export * from "./JavaClass";
export * from "./Language";
export * from "./Listing";
export * from "./LongPropertyMap";
export * from "./Memory";
export * from "./MemoryBlock";
export * from "./Namespace";
export * from "./NamespaceManager";
export * from "./ObjectPropertyMap";
export * from "./Options";
export * from "./Program";
export * from "./ProgramChangeSet";
export * from "./ProgramContext";
export * from "./ProgramTreeManager";
export * from "./ProgramUserData";
export * from "./ProjectLocator";
export * from "./PropertyMap";
export * from "./PropertyMapManager";
export * from "./ReferenceManager";
export * from "./Register";
export * from "./RegisterValue";
export * from "./RelocationTable";
export * from "./Saveable";
export * from "./StringPropertyMap";
export * from "./SymbolTable";
export * from "./TaskMonitor";
export * from "./Transaction";
export * from "./TransactionInfo";
export * from "./TransactionListener";
export * from "./Varnode";
export * from "./Version";
export * from "./VoidPropertyMap";

import type { Address } from "./Address";
import type { JavaClass } from "./JavaClass";
import type { Program } from "./Program";

interface JavaHelper {
    /* eslint-disable-next-line @definitelytyped/no-unnecessary-generics */
    getClass<T extends JavaClass>(className: string): T;
}

declare global {
    var currentProgram: Program;
    var currentAddress: Address;
    var JavaHelper: JavaHelper;
}
