import xcode = require("xcode");

// $ExpectType XcodeProject
const project = xcode.project("/path/to/MyApp.xcodeproj/project.pbxproj");

// Parse
// $ExpectType XcodeProject
project.parseSync();

project.parse((err, results) => {
    if (err) {
        const msg: string = err.message;
    }
});

// Write
// $ExpectType string
const output = project.writeSync();

const outputWithOptions = project.writeSync({ omitEmptyValues: true });

// Properties
// $ExpectType string
project.filepath;

// $ExpectType string | undefined
project.productName;

// Hash structure
// $ExpectType PbxprojHash
const hash = project.hash;

// $ExpectType PbxprojObjects
const objects = hash.project.objects;

// $ExpectType PbxprojSection
const buildFiles = objects.PBXBuildFile;

// $ExpectType UUID
const rootObject = hash.project.rootObject;

// UUID generation
// $ExpectType UUID[]
project.allUuids();

// $ExpectType UUID
project.generateUuid();

// File management
const sourceFile = project.addSourceFile("src/main.m");
if (sourceFile !== false) {
    // $ExpectType string
    sourceFile.basename;

    // $ExpectType string
    sourceFile.sourceTree;
}

const headerFile = project.addHeaderFile("include/header.h", { target: "MyTarget" }, "Headers");
if (headerFile !== null) {
    // $ExpectType string
    headerFile.basename;
}

const framework = project.addFramework("UIKit.framework", { weak: true, link: true });
if (framework !== false) {
    // $ExpectType string
    framework.basename;
}

const resourceFile = project.addResourceFile("Assets.xcassets");
if (resourceFile !== false) {
    // $ExpectType UUID | undefined
    resourceFile.uuid;
}

const pluginFile = project.addPluginFile("MyPlugin.m");
if (pluginFile !== null) {
    // $ExpectType UUID | undefined
    pluginFile.fileRef;
}

const staticLib = project.addStaticLibrary("libMyLib.a");
if (staticLib !== false) {
    // $ExpectType string
    staticLib.basename;
}

const dataModel = project.addDataModelDocument("Model.xcdatamodeld", "Resources");
if (dataModel !== null) {
    // $ExpectType PBXFile[] | undefined
    dataModel.models;

    // $ExpectType PBXFile | undefined
    dataModel.currentModel;
}

const hasIt = project.hasFile("src/main.m");
if (hasIt !== false) {
    // $ExpectType string
    hasIt.basename;
}

project.addFile("newfile.m", "Sources", { compilerFlags: "-fobjc-arc" });
project.removeFile("old.m", "Sources");
project.addCopyfile("resource.txt");
project.removeCopyfile("resource.txt");
project.addProductFile("MyApp.app");
project.removeProductFile("MyApp.app");
project.removeSourceFile("old.m");
// $ExpectType PBXFile
project.removeHeaderFile("old.h");
project.removeFramework("UIKit.framework");
project.removeResourceFile("old.xcassets");

// Section manipulation
const file: xcode.PBXFile = {
    basename: "test.m",
    sourceTree: '"<group>"',
    includeInIndex: 0,
};
project.addToPbxBuildFileSection(file);
project.removeFromPbxBuildFileSection(file);
project.addToPbxFileReferenceSection(file);

// $ExpectType PBXFile
project.removeFromPbxFileReferenceSection(file);
project.addToXcVersionGroupSection(file);

// Group management
const group = project.addPbxGroup(["file1.m", "file2.m"], "MyGroup", "src", '"<group>"');
// $ExpectType UUID
group.uuid;
// $ExpectType PBXGroup
group.pbxGroup;

project.removePbxGroup("MyGroup");
project.addToPluginsPbxGroup(file);
project.removeFromPluginsPbxGroup(file);
project.addToResourcesPbxGroup(file);
project.removeFromResourcesPbxGroup(file);
project.addToFrameworksPbxGroup(file);
project.removeFromFrameworksPbxGroup(file);
project.addToProductsPbxGroup(file);
project.removeFromProductsPbxGroup(file);

project.addToPbxGroupType(file, "ABC123", "PBXGroup");
project.addToPbxGroupType("filename.m", "ABC123", "PBXGroup");
project.addToPbxVariantGroup(file, "ABC123");
project.addToPbxGroup(file, "ABC123");
project.addToPbxGroup("filename.m", "ABC123");

// $ExpectType UUID
project.pbxCreateGroupWithType("NewGroup", "path/to", "PBXGroup");
project.pbxCreateGroupWithType("NewGroup", undefined, "PBXVariantGroup");

// $ExpectType UUID
project.pbxCreateVariantGroup("Localizable.strings");

// $ExpectType UUID
project.pbxCreateGroup("Sources", "src");

project.removeFromPbxGroupAndType(file, "ABC123", "PBXGroup");
project.removeFromPbxGroup(file, "ABC123");
project.removeFromPbxVariantGroup(file, "ABC123");

const pbxGroup = project.getPBXGroupByKey("ABC123");
if (pbxGroup !== undefined) {
    // $ExpectType string
    pbxGroup.isa;
    // $ExpectType Array<{ value: UUID; comment?: string | undefined; }>
    pbxGroup.children;
}

project.getPBXGroupByKeyAndType("ABC123", "PBXGroup");
project.getPBXVariantGroupByKey("ABC123");

const groupKey = project.findPBXGroupKey({ name: "Sources" });
project.findPBXGroupKeyAndType({ name: "Sources" }, "PBXGroup");
project.findPBXVariantGroupKey({ name: "Localizable.strings" });

const locGroup = project.addLocalizationVariantGroup("Localizable.strings");
// $ExpectType UUID
locGroup.uuid;
// $ExpectType UUID
locGroup.fileRef;
// $ExpectType string
locGroup.basename;

// Build phases
project.addToPbxSourcesBuildPhase(file);
project.removeFromPbxSourcesBuildPhase(file);
project.addToPbxResourcesBuildPhase(file);
project.removeFromPbxResourcesBuildPhase(file);
project.addToPbxFrameworksBuildPhase(file);
project.removeFromPbxFrameworksBuildPhase(file);
project.addToPbxEmbedFrameworksBuildPhase(file);
project.removeFromPbxEmbedFrameworksBuildPhase(file);
project.addToPbxCopyfilesBuildPhase(file);
project.removeFromPbxCopyfilesBuildPhase(file);

const buildPhase = project.addBuildPhase(["file.m"], "PBXSourcesBuildPhase", "Sources");
// $ExpectType UUID
buildPhase.uuid;
// $ExpectType BuildPhaseObject
buildPhase.buildPhase;

const buildPhaseWithTarget = project.addBuildPhase(
    ["script.sh"],
    "PBXShellScriptBuildPhase",
    "Run Script",
    "TARGET_UUID",
    { shellPath: "/bin/sh", shellScript: "echo hello" },
);

// Build phase accessors
const sourcesBP = project.pbxSourcesBuildPhaseObj();
if (sourcesBP != null) {
    // $ExpectType string
    sourcesBP.isa;
    // $ExpectType Array<{ value: UUID; comment: string; }>
    sourcesBP.files;
}

project.pbxResourcesBuildPhaseObj("TARGET_UUID");
project.pbxFrameworksBuildPhaseObj();
project.pbxEmbedFrameworksBuildPhaseObj();
project.pbxCopyfilesBuildPhaseObj();

const bpKey = project.buildPhase("PBXSourcesBuildPhase");
const bpObj = project.buildPhaseObject("PBXSourcesBuildPhase", "Sources");

// Target management
const target = project.addTarget("MyExtension", "app_extension", "Extensions", "com.example.ext");
// $ExpectType UUID
target.uuid;
// $ExpectType PBXNativeTarget
target.pbxNativeTarget;

project.addToPbxProjectSection(target);
project.addToPbxNativeTargetSection(target);

const dep = project.addTargetDependency("TARGET1", ["TARGET2"]);
if (dep !== undefined) {
    // $ExpectType UUID
    dep.uuid;
    // $ExpectType PBXNativeTarget
    dep.target;
}

const configList = project.addXCConfigurationList(
    [{ isa: "XCBuildConfiguration", buildSettings: { PRODUCT_NAME: "MyApp" }, name: "Release" }],
    "Release",
    "Build configuration list",
);
// $ExpectType UUID
configList.uuid;
// $ExpectType XCConfigurationList
configList.xcConfigurationList;

// Section accessors
const projectSection = project.pbxProjectSection();
const projectEntry = projectSection["ABC123"];
if (typeof projectEntry !== "string") {
    // $ExpectType PBXProject
    projectEntry;
}

const buildFileSection = project.pbxBuildFileSection();
const configSection = project.pbxXCBuildConfigurationSection();
const configEntry = configSection["ABC123"];
if (typeof configEntry !== "string") {
    // $ExpectType XCBuildConfiguration
    configEntry;
}

const fileRefSection = project.pbxFileReferenceSection();
const nativeTargetSection = project.pbxNativeTargetSection();
const nativeTargetEntry = nativeTargetSection["ABC123"];
if (typeof nativeTargetEntry !== "string") {
    // $ExpectType PBXNativeTarget
    nativeTargetEntry;
}

const versionGroupSection = project.xcVersionGroupSection();
const configListSection = project.pbxXCConfigurationList();
const customSection = project.getPBXObject("PBXCustomSection");

// Section lookups
const foundGroup = project.pbxGroupByName("Sources");
if (foundGroup !== null) {
    // $ExpectType string
    foundGroup.isa;
}
const foundTarget = project.pbxTargetByName("MyApp");
if (foundTarget !== null) {
    // $ExpectType string
    foundTarget.name;
}
const targetKey = project.findTargetKey("MyApp");
const item = project.pbxItemByComment("main.m", "PBXBuildFile");

// Build settings
project.addBuildProperty("SWIFT_VERSION", "5.0");
project.addBuildProperty("SWIFT_VERSION", "5.0", "Release");
project.addBuildProperty("HEADER_SEARCH_PATHS", ["$(inherited)", "src/include"]);
project.addBuildProperty("IPHONEOS_DEPLOYMENT_TARGET", 15);
project.removeBuildProperty("SWIFT_VERSION");
project.removeBuildProperty("SWIFT_VERSION", "Release");
project.updateBuildProperty("PRODUCT_NAME", "MyApp");
project.updateBuildProperty("PRODUCT_NAME", "MyApp", "Release");
project.updateBuildProperty("PRODUCT_NAME", "MyApp", "Release", "MyTarget");
project.updateBuildProperty("HEADER_SEARCH_PATHS", ["$(inherited)", "src/include"]);
project.updateBuildProperty("IPHONEOS_DEPLOYMENT_TARGET", 15);
project.updateProductName("NewAppName");

const buildProp = project.getBuildProperty("PRODUCT_NAME");
const buildPropForConfig = project.getBuildProperty("PRODUCT_NAME", "Release");
const buildPropForTarget = project.getBuildProperty("PRODUCT_NAME", "Release", "MyTarget");

const configByName = project.getBuildConfigByName("Release");

project.addToFrameworkSearchPaths(file);
project.removeFromFrameworkSearchPaths(file);
project.addToLibrarySearchPaths(file);
project.addToLibrarySearchPaths("/usr/local/lib");
project.removeFromLibrarySearchPaths(file);
project.addToHeaderSearchPaths(file);
project.addToHeaderSearchPaths("$(SRCROOT)/include");
project.removeFromHeaderSearchPaths(file);
project.addToOtherLinkerFlags("-lz");
project.removeFromOtherLinkerFlags("-lz");
project.addToBuildSettings("CUSTOM_SETTING", "value");
project.addToBuildSettings("CUSTOM_SETTING", 42);
project.removeFromBuildSettings("CUSTOM_SETTING");

// Project queries
const firstProject = project.getFirstProject();
// $ExpectType UUID
firstProject.uuid;
// $ExpectType PBXProject
firstProject.firstProject;

const firstTarget = project.getFirstTarget();
// $ExpectType UUID
firstTarget.uuid;
// $ExpectType PBXNativeTarget
firstTarget.firstTarget;

const appTarget = project.getTarget("com.apple.product-type.application");
if (appTarget !== null) {
    // $ExpectType UUID
    appTarget.uuid;
    // $ExpectType PBXNativeTarget
    appTarget.target;
}

// Known regions
project.addKnownRegion("fr");
project.removeKnownRegion("fr");
// $ExpectType boolean
project.hasKnownRegion("en");

// Target attributes
project.addTargetAttribute("SystemCapabilities", { "com.apple.Push": { enabled: 1 } });
project.addTargetAttribute("DevelopmentTeam", "ABC123", project.getFirstTarget());
project.removeTargetAttribute("SystemCapabilities");
project.removeTargetAttribute("SystemCapabilities", project.getFirstTarget());
