// https://ghidra.re/ghidra_docs/api/ghidra/program/model/data/DataType.html

export interface DataType {
  addParent(dt: DataType): void;
  clone(dtm: DataTypeManager): DataType;
  copy(dtm: DataTypeManager): DataType;
  dataTypeAlignmentChanged(dt: DataType): void;
  dataTypeDeleted(dt: DataType): void;
  dataTypeNameChanged(dt: DataType, oldName: string): void;
  dataTypeReplaced(oldDt: DataType, newDt: DataType): void;
  dataTypeSizeChanged(dt: DataType): void;
  dependsOn(dt: DataType): boolean;
  /*encodeRepresentation(repr: string, buf: MemBuffer, settings: Settings, length: number): byte[];
  encodeValue(value: java.lang.Object, buf: MemBuffer, settings: Settings, length: number): byte[];
  getAlignment(): number;
  getCategoryPath(): CategoryPath;
  getDataOrganization(): DataOrganization;
  getDataTypeManager(): DataTypeManager;
  getDataTypePath(): DataTypePath;
  getDefaultAbbreviatedLabelPrefix(): string;
  getDefaultLabelPrefix(): string;
  getDefaultLabelPrefix(buf: MemBuffer, settings: Settings, len: number, options: DataTypeDisplayOptions): string;
  getDefaultOffcutLabelPrefix(buf: MemBuffer, settings: Settings, len: number, options: DataTypeDisplayOptions, offcutOffset: number): string;
  getDefaultSettings(): Settings;
  getDescription(): string;
  getDisplayName(): string;
  getDocs(): java.net.URL;
  getLastChangeTime(): number;
  getLastChangeTimeInSourceArchive(): number;
  getLength(): number;
  getMnemonic(settings: Settings): string;
  getName(): string;
  getParents(): DataType[];
  getPathName(): string;
  getRepresentation(buf: MemBuffer, settings: Settings, length: number): string;
  getSettingsDefinitions(): SettingsDefinition[];
  getSourceArchive(): SourceArchive;
  getUniversalID(): UniversalID;
  getValue(buf: MemBuffer, settings: Settings, length: number): java.lang.Object;
  getValueClass(settings: Settings): java.lang.Class<?>;
  hasLanguageDependantLength(): boolean;
  isDeleted(): boolean;
  isEncodable(): boolean;
  isEquivalent(dt: DataType): boolean;
  isNotYetDefined(): boolean;
  isZeroLength(): boolean;
  removeParent(dt: DataType): void;
  replaceWith(dataType: DataType): void;
  setCategoryPath(path: CategoryPath): void;
  setDefaultSettings(settings: Settings): void;
  setDescription(description: string): void;
  setLastChangeTime(lastChangeTime: number): void;
  setLastChangeTimeInSourceArchive(lastChangeTimeInSourceArchive: number): void;
  setName(name: string): void;
  setNameAndCategory(path: CategoryPath, name: string): void;
  setSourceArchive(archive: SourceArchive): void;*/
}

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/data/DataTypeManager.html

export interface DataTypeManager {
  addDataType(dataType: DataType, handler: DataTypeConflictHandler): DataType;
  close(): void;
  contains(dataType: DataType): boolean;
  dataTypeChanged(dataType: DataType, isAutoChange: boolean): void;
  disassociate(datatype: DataType): void;
  endTransaction(transactionID: number, commit: boolean): void;
  findDataType(dataTypePath: string): DataType;
  /*addDataTypes(dataTypes: java.util.Collection<DataType>, handler: DataTypeConflictHandler, monitor: TaskMonitor): void;
  addDataTypeManagerListener(l: DataTypeManagerChangeListener): void;
  addInvalidatedListener(listener: InvalidatedListener): void;
  associateDataTypeWithArchive(datatype: DataType, archive: SourceArchive): void;
  containsCategory(path: CategoryPath): boolean;
  eateCategory(path: CategoryPath): Category;
  findDataTypeForID(datatypeID: UniversalID): DataType;
  findDataTypes(name: string, list: java.util.List<DataType>): void;
  findDataTypes(name: string, list: java.util.List<DataType>, caseSensitive: boolean, monitor: TaskMonitor): void;
  findEnumValueNames(value: number, enumValueNames: java.util.Set<java.lang.String>): void;
  flushEvents(): void;
  getAllComposites(): java.util.Iterator<Composite>;
  getAllDataTypes(): java.util.Iterator<DataType>;
  getAllDataTypes(list: java.util.List<DataType>): void;
  getAllStructures(): java.util.Iterator<Structure>;
  getCategory(categoryID: number): Category;
  getCategory(path: CategoryPath): Category;
  getCategoryCount(): number;
  getDataOrganization(): DataOrganization;
  getDataType(dataTypeID: number): DataType;
  getDataType(path: CategoryPath, name: string): DataType;
  getDataType(dataTypePath: DataTypePath): DataType;
  getDataType(sourceArchive: SourceArchive, datatypeID: UniversalID): DataType;
  getDataType(dataTypePath: string): DataType;
  getDataTypeCount(includePointersAndArrays: boolean): number;
  getDataTypes(sourceArchive: SourceArchive): java.util.List<DataType>;
  getDataTypesContaining(dataType: DataType): java.util.Set<DataType>;
  getFavorites(): java.util.List<DataType>;
  getID(dt: DataType): number;
  getLastChangeTimeForMyManager(): number;
  getLocalSourceArchive(): SourceArchive;
  getName(): string;
  getPointer(datatype: DataType): Pointer;
  getPointer(datatype: DataType, size: number): Pointer;
  getResolvedID(dt: DataType): number;
  getRootCategory(): Category;
  getSourceArchive(sourceID: UniversalID): SourceArchive;
  getSourceArchives(): java.util.List<SourceArchive>;
  getType(): ArchiveType;
  getUniqueName(path: CategoryPath, baseName: string): string;
  getUniversalID(): UniversalID;
  isFavorite(datatype: DataType): boolean;
  isUpdatable(): boolean;
  remove(dataType: DataType, monitor: TaskMonitor): boolean;
  removeDataTypeManagerListener(l: DataTypeManagerChangeListener): void;
  removeInvalidatedListener(listener: InvalidatedListener): void;
  removeSourceArchive(sourceArchive: SourceArchive): void;
  replaceDataType(existingDt: DataType, replacementDt: DataType, updateCategoryPath: boolean): DataType;
  resolve(dataType: DataType, handler: DataTypeConflictHandler): DataType;
  resolveSourceArchive(sourceArchive: SourceArchive): SourceArchive;
  setFavorite(datatype: DataType, isFavorite: boolean): void;
  setName(name: string): void;
  startTransaction(description: string): number;
  updateSourceArchiveName(sourceID: UniversalID, name: string): boolean;
  updateSourceArchiveName(archiveFileID: string, name: string): boolean;*/
}

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/data/DataTypeConflictHandler.html

export interface DataTypeConflictHandler {
  resolveConflict(addedDataType: DataType, existingDataType: DataType): void;
  shouldUpdate(sourceDataType: DataType, localDataType: DataType): boolean;
}
