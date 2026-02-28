export type UUID = string;

/**
 * A section within the pbxproj objects dict.
 * Keys are UUIDs mapping to object records, or `${uuid}_comment` keys mapping to strings.
 */
export type PbxprojSection = Record<string, Record<string, unknown> | string>;

/** Known section names within `hash.project.objects`. */
export interface PbxprojObjects {
    PBXBuildFile: PbxprojSection;
    PBXFileReference: PbxprojSection;
    PBXGroup: PbxprojSection;
    PBXNativeTarget: PbxprojSection;
    PBXProject: PbxprojSection;
    XCBuildConfiguration: PbxprojSection;
    XCConfigurationList: PbxprojSection;
    PBXSourcesBuildPhase?: PbxprojSection;
    PBXResourcesBuildPhase?: PbxprojSection;
    PBXFrameworksBuildPhase?: PbxprojSection;
    PBXVariantGroup?: PbxprojSection;
    XCVersionGroup?: PbxprojSection;
    PBXCopyFilesBuildPhase?: PbxprojSection;
    PBXShellScriptBuildPhase?: PbxprojSection;
    PBXContainerItemProxy?: PbxprojSection;
    PBXTargetDependency?: PbxprojSection;
    [sectionName: string]: PbxprojSection | undefined;
}

/** The full parsed .pbxproj structure, stored as `XcodeProject.hash`. */
export interface PbxprojHash {
    headComment?: string;
    project: {
        archiveVersion: string;
        objectVersion: string;
        rootObject: UUID;
        rootObject_comment?: string;
        classes: Record<string, never>;
        objects: PbxprojObjects;
    };
}

export interface PBXFile {
    basename: string;
    lastKnownFileType?: string;
    group?: string;
    customFramework?: boolean;
    dirname?: string;
    path?: string;
    fileEncoding?: number;
    defaultEncoding?: number;
    explicitFileType?: string;
    sourceTree: string;
    includeInIndex: number;
    settings?: { ATTRIBUTES?: string[]; COMPILER_FLAGS?: string };
    plugin?: boolean;
    uuid?: UUID;
    fileRef?: UUID;
    target?: string;
    /** Child model files, set by addDataModelDocument. */
    models?: PBXFile[];
    /** Current version model file, set by addDataModelDocument. */
    currentModel?: PBXFile;
    [key: string]: unknown;
}

export interface PBXGroup {
    isa: string;
    children: Array<{ value: UUID; comment?: string }>;
    name?: string;
    path?: string;
    sourceTree: string;
    [key: string]: unknown;
}

export interface PBXNativeTarget {
    isa: string;
    buildConfigurationList: UUID;
    buildPhases: Array<{ value: UUID; comment?: string }>;
    buildRules: unknown[];
    dependencies: Array<{ value: UUID; comment?: string }>;
    name: string;
    productName: string;
    productReference: UUID;
    productType: string;
    [key: string]: unknown;
}

export interface PBXProject {
    isa: string;
    attributes: Record<string, unknown>;
    buildConfigurationList: UUID;
    compatibilityVersion: string;
    developmentRegion: string;
    hasScannedForEncodings: number;
    knownRegions: string[];
    mainGroup: UUID;
    productRefGroup: UUID;
    projectDirPath: string;
    projectRoot: string;
    targets: Array<{ value: UUID; comment?: string }>;
    [key: string]: unknown;
}

export interface XCBuildConfiguration {
    isa: string;
    baseConfigurationReference?: UUID;
    buildSettings: Record<string, string | string[] | number>;
    name: string;
    [key: string]: unknown;
}

export interface XCConfigurationList {
    isa: string;
    buildConfigurations: Array<{ value: UUID; comment?: string }>;
    defaultConfigurationIsVisible: number;
    defaultConfigurationName: string;
    [key: string]: unknown;
}

export interface BuildPhaseObject {
    isa: string;
    buildActionMask: number;
    files: Array<{ value: UUID; comment: string }>;
    runOnlyForDeploymentPostprocessing: number;
    name?: string;
    /** PBXShellScriptBuildPhase */
    inputPaths?: string[];
    /** PBXShellScriptBuildPhase */
    outputPaths?: string[];
    /** PBXShellScriptBuildPhase */
    shellPath?: string;
    /** PBXShellScriptBuildPhase */
    shellScript?: string;
    /** PBXCopyFilesBuildPhase */
    dstPath?: string;
    /** PBXCopyFilesBuildPhase */
    dstSubfolderSpec?: number;
    [key: string]: unknown;
}

export interface PBXFileOptions {
    lastKnownFileType?: string;
    defaultEncoding?: number;
    customFramework?: boolean;
    explicitFileType?: string;
    weak?: boolean;
    compilerFlags?: string;
    embed?: boolean;
    sign?: boolean;
    link?: boolean;
    sourceTree?: string;
    target?: string;
    group?: string;
    plugin?: boolean;
    variantGroup?: boolean;
}

export interface WriteOptions {
    omitEmptyValues?: boolean;
}

export interface XcodeProject {
    filepath: string;
    hash: PbxprojHash;
    readonly productName: string | undefined;

    parse(callback?: (err: Error | null, results?: unknown) => void): this;
    parseSync(): this;
    writeSync(options?: WriteOptions): string;
    allUuids(): UUID[];
    generateUuid(): UUID;

    // File management
    addPluginFile(path: string, opt?: PBXFileOptions): PBXFile | null;
    removePluginFile(path: string, opt?: PBXFileOptions): PBXFile;
    addProductFile(targetPath: string, opt?: PBXFileOptions): PBXFile;
    removeProductFile(path: string, opt?: PBXFileOptions): PBXFile;
    addSourceFile(path: string, opt?: PBXFileOptions, group?: string): PBXFile | false;
    removeSourceFile(path: string, opt?: PBXFileOptions, group?: string): PBXFile;
    addHeaderFile(path: string, opt?: PBXFileOptions, group?: string): PBXFile | null;
    removeHeaderFile(path: string, opt?: PBXFileOptions, group?: string): PBXFile;
    addResourceFile(path: string, opt?: PBXFileOptions, group?: string): PBXFile | false;
    removeResourceFile(path: string, opt?: PBXFileOptions, group?: string): PBXFile;
    addFramework(path: string, opt?: PBXFileOptions): PBXFile | false;
    removeFramework(path: string, opt?: PBXFileOptions): PBXFile;
    addCopyfile(path: string, opt?: PBXFileOptions): PBXFile;
    removeCopyfile(path: string, opt?: PBXFileOptions): PBXFile;
    addStaticLibrary(path: string, opt?: PBXFileOptions): PBXFile | false;
    hasFile(filePath: string): PBXFile | false;
    addFile(path: string, group?: string, opt?: PBXFileOptions): PBXFile | null;
    removeFile(path: string, group?: string, opt?: PBXFileOptions): PBXFile;
    addDataModelDocument(filePath: string, group?: string, opt?: PBXFileOptions): PBXFile | null;

    // Section manipulation
    addToPbxBuildFileSection(file: PBXFile): void;
    removeFromPbxBuildFileSection(file: PBXFile): void;
    addToPbxFileReferenceSection(file: PBXFile): void;
    removeFromPbxFileReferenceSection(file: PBXFile): PBXFile;
    addToXcVersionGroupSection(file: PBXFile): void;

    // Group management
    addPbxGroup(
        filePathsArray: string[],
        name: string,
        path: string,
        sourceTree?: string,
    ): { uuid: UUID; pbxGroup: PBXGroup };
    removePbxGroup(groupName: string): void;
    addToPluginsPbxGroup(file: PBXFile): void;
    removeFromPluginsPbxGroup(file: PBXFile): void;
    addToResourcesPbxGroup(file: PBXFile): void;
    removeFromResourcesPbxGroup(file: PBXFile): void;
    addToFrameworksPbxGroup(file: PBXFile): void;
    removeFromFrameworksPbxGroup(file: PBXFile): void;
    addToProductsPbxGroup(file: PBXFile): void;
    removeFromProductsPbxGroup(file: PBXFile): void;
    addToPbxGroupType(file: PBXFile | string, groupKey: string, groupType: string): void;
    addToPbxVariantGroup(file: PBXFile | string, groupKey: string): void;
    addToPbxGroup(file: PBXFile | string, groupKey: string): void;
    pbxCreateGroupWithType(name: string, pathName: string | undefined, groupType: string): UUID;
    pbxCreateVariantGroup(name: string): UUID;
    pbxCreateGroup(name: string, pathName: string): UUID;
    removeFromPbxGroupAndType(file: PBXFile, groupKey: string, groupType: string): void;
    removeFromPbxGroup(file: PBXFile, groupKey: string): void;
    removeFromPbxVariantGroup(file: PBXFile, groupKey: string): void;
    getPBXGroupByKeyAndType(key: string, groupType: string): PBXGroup | undefined;
    getPBXGroupByKey(key: string): PBXGroup | undefined;
    getPBXVariantGroupByKey(key: string): PBXGroup | undefined;
    findPBXGroupKeyAndType(criteria: Record<string, string>, groupType: string): string | undefined;
    findPBXGroupKey(criteria: Record<string, string>): string | undefined;
    findPBXVariantGroupKey(criteria: Record<string, string>): string | undefined;
    addLocalizationVariantGroup(name: string): { uuid: UUID; fileRef: UUID; basename: string };

    // Build phase management
    addToPbxEmbedFrameworksBuildPhase(file: PBXFile): void;
    removeFromPbxEmbedFrameworksBuildPhase(file: PBXFile): void;
    addToPbxSourcesBuildPhase(file: PBXFile): void;
    removeFromPbxSourcesBuildPhase(file: PBXFile): void;
    addToPbxResourcesBuildPhase(file: PBXFile): void;
    removeFromPbxResourcesBuildPhase(file: PBXFile): void;
    addToPbxFrameworksBuildPhase(file: PBXFile): void;
    removeFromPbxFrameworksBuildPhase(file: PBXFile): void;
    addToPbxCopyfilesBuildPhase(file: PBXFile): void;
    removeFromPbxCopyfilesBuildPhase(file: PBXFile): void;
    addBuildPhase(
        filePathsArray: string[],
        buildPhaseType: string,
        comment: string,
        target?: UUID,
        optionsOrFolderType?: string | Record<string, unknown>,
        subfolderPath?: string,
    ): { uuid: UUID; buildPhase: BuildPhaseObject };

    // Target management
    addToPbxProjectSection(target: { uuid: UUID; pbxNativeTarget: PBXNativeTarget }): void;
    addToPbxNativeTargetSection(target: { uuid: UUID; pbxNativeTarget: PBXNativeTarget }): void;
    addXCConfigurationList(
        configurationObjectsArray: XCBuildConfiguration[],
        defaultConfigurationName: string,
        comment?: string,
    ): { uuid: UUID; xcConfigurationList: XCConfigurationList };
    addTargetDependency(
        target: UUID,
        dependencyTargets: UUID[],
    ): { uuid: UUID; target: PBXNativeTarget } | undefined;
    addTarget(
        name: string,
        type: string,
        subfolder?: string,
        bundleId?: string,
    ): { uuid: UUID; pbxNativeTarget: PBXNativeTarget };

    // Section accessors
    pbxProjectSection(): Record<string, PBXProject | string>;
    pbxBuildFileSection(): PbxprojSection;
    pbxXCBuildConfigurationSection(): Record<string, XCBuildConfiguration | string>;
    pbxFileReferenceSection(): PbxprojSection;
    pbxNativeTargetSection(): Record<string, PBXNativeTarget | string>;
    xcVersionGroupSection(): PbxprojSection;
    pbxXCConfigurationList(): Record<string, XCConfigurationList | string>;
    getPBXObject(name: string): PbxprojSection | undefined;

    // Section lookups
    pbxGroupByName(name: string): PBXGroup | null;
    pbxTargetByName(name: string): PBXNativeTarget | null;
    findTargetKey(name: string): string | null;
    pbxItemByComment(name: string, pbxSectionName: string): Record<string, unknown> | null;
    pbxSourcesBuildPhaseObj(target?: UUID): BuildPhaseObject | null;
    pbxResourcesBuildPhaseObj(target?: UUID): BuildPhaseObject | null;
    pbxFrameworksBuildPhaseObj(target?: UUID): BuildPhaseObject | null;
    pbxEmbedFrameworksBuildPhaseObj(target?: UUID): BuildPhaseObject | null;
    pbxCopyfilesBuildPhaseObj(target?: UUID): BuildPhaseObject | null;
    buildPhase(group: string, target?: UUID): string | undefined;
    buildPhaseObject(name: string, group: string, target?: UUID): BuildPhaseObject | null;

    // Build settings
    addBuildProperty(prop: string, value: string | string[] | number, buildName?: string): void;
    removeBuildProperty(prop: string, buildName?: string): void;
    updateBuildProperty(prop: string, value: string | string[] | number, build?: string, targetName?: string): void;
    updateProductName(name: string): void;
    getBuildProperty(prop: string, build?: string, targetName?: string): string | string[] | number | undefined;
    getBuildConfigByName(name: string): Record<string, XCBuildConfiguration>;
    addToFrameworkSearchPaths(file: PBXFile): void;
    removeFromFrameworkSearchPaths(file: PBXFile): void;
    addToLibrarySearchPaths(file: PBXFile | string): void;
    removeFromLibrarySearchPaths(file: PBXFile): void;
    addToHeaderSearchPaths(file: PBXFile | string): void;
    removeFromHeaderSearchPaths(file: PBXFile): void;
    addToOtherLinkerFlags(flag: string): void;
    removeFromOtherLinkerFlags(flag: string): void;
    addToBuildSettings(buildSetting: string, value: unknown): void;
    removeFromBuildSettings(buildSetting: string): void;

    // Project queries
    getFirstProject(): { uuid: UUID; firstProject: PBXProject };
    getFirstTarget(): { uuid: UUID; firstTarget: PBXNativeTarget };
    getTarget(productType: string): { uuid: UUID; target: PBXNativeTarget } | null;

    // Known regions
    addKnownRegion(name: string): void;
    removeKnownRegion(name: string): void;
    hasKnownRegion(name: string): boolean;

    // Target attributes
    addTargetAttribute(prop: string, value: unknown, target?: { uuid: UUID }): void;
    removeTargetAttribute(prop: string, target?: { uuid: UUID }): void;
}

export function project(projectPath: string): XcodeProject;
