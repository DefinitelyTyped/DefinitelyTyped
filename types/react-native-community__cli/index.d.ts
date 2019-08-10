// Type definitions for react-native-community__cli 2.0
// Project: https://github.com/react-native-community/cli
// Definitions by: agathekieny <https://github.com/agathekieny>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
export interface CommandT {
  name: string;
  description?: string;
  func: (argv: string[], ctx: ConfigT, args: Record<string, string>) => void;
  options?: Array<{
    name: string;
    description?: string;
    parse?: (val: string) => any;
    default?:
      | string
      | boolean
      | number
      | ((ctx: ConfigT) => string | boolean | number);
  }>;
  examples?: Array<{
    desc: string;
    cmd: string;
  }>;
}

/**
 * Opaque type that describes the Inquirer question format. Not typed, since we just
 * pass it directly to Inquirer.
 */
export type InquirerPromptT = any;

/**
 * Settings that a library author can define in the configuration bundled with
 * dependency for Android
 *
 * See UserDependencyConfigT for details
 */
export interface DependencyParamsAndroidT {
  sourceDir?: string;
  manifestPath?: string;
  packageImportPath?: string;
  packageInstance?: string;
}

/**
 * Settings that user can define in the project configuration for Android
 *
 * See UserConfigT for details
 */
export interface ProjectParamsAndroidT {
  sourceDir?: string;
  manifestPath?: string;
  packageName?: string;
  packageFolder?: string;
  mainFilePath?: string;
  stringsPath?: string;
  settingsGradlePath?: string;
  assetsPath?: string;
  buildGradlePath?: string;
}

/**
 * Settings that user can define in the project configuration for iOS.
 * Same for dependency - we share the type.
 *
 * See UserDependencyConfigT and UserConfigT for details
 */
export interface ProjectParamsIOST {
  project?: string;
  podspecPath?: string;
  sharedLibraries?: string[];
  libraryFolder?: string;
  plist: any[];
  scriptPhases: Record<string, string>;
}

export interface PlatformConfig<
  ProjectParams,
  DependencyParams,
  ProjectConfig,
  DependencyConfig
> {
  projectConfig: (
    projectRoot: string,
    projectParams: ProjectParams,
  ) => ProjectConfig;
  dependencyConfig: (
    dependency: string,
    params: DependencyParams,
  ) => DependencyConfig;
  linkConfig: () => {
    isInstalled: (
      projectConfig: ProjectConfig,
      name: string,
      dependencyConfig: DependencyConfig,
    ) => boolean;
    register: (
      name: string,
      dependencyConfig: DependencyConfig,
      params: Record<string, string>,
      projectConfig: ProjectConfig,
    ) => void;
    unregister: (
      packageName: string,
      dependencyConfig: DependencyConfig,
      projectConfig: ProjectConfig,
      otherDependencies: DependencyConfig[],
    ) => void;
    copyAssets: (assets: string[], projectConfig: ProjectConfig) => void;
    unlinkAssets: (assets: string[], projectConfig: ProjectConfig) => void;
  };
}

/**
 * Final configuration object
 */
export interface ConfigT {
  // Root where the configuration has been resolved from
  root: string;

  // Path to React Native source
  reactNativePath: string;

  // Object that contains configuration for a project (null, when platform not available)
  project: Record<string, any>;

  // An array of assets as defined by the user
  assets: string[];

  // Map of the dependencies that are present in the project
  dependencies: {
    [key: string]: {
      name: string;
      root: string;
      platforms: {
        android?: DependencyConfigAndroidT | null;
        ios?: DependencyConfigIOST | null;
        [key: string]: any;
      };
      assets: string[];
      hooks: Record<string, string>;
      params: any[];
    };
  };

  // Map of available platforms (built-ins and dynamically loaded)
  platforms: {
    [name: string]: PlatformConfig<any, any, any, any>;
  } & {
    ios?: PlatformConfig<
      ProjectParamsIOST,
      ProjectParamsIOST, // DependencyParams are the same as ProjectParams on iOS
      ProjectConfigIOST,
      DependencyConfigIOST
    >;
    android?: PlatformConfig<
      ProjectParamsAndroidT,
      DependencyParamsAndroidT,
      ProjectConfigAndroidT,
      DependencyConfigAndroidT
    >;
  };

  // An array of commands that are present in 3rd party packages
  commands: CommandT[];

  // Haste configuration resolved based on available plugins
  haste: {
    platforms: string[];
    providesModuleNodeModules: string[];
  };
}

/**
 * Aliases
 */
export let configT: ConfigT;
export type DependencyConfigT = typeof configT.dependencies['key'];

export let dependencyConfig: DependencyConfigT;
export type HooksT = typeof dependencyConfig.hooks;
export type ProjectConfigT = typeof configT.project;
export type PlatformsT = typeof configT.platforms;

/**
 * Config defined by a developer for a library
 */
export interface UserDependencyConfigT {
  // Additional dependency settings
  dependency?: {
    platforms: {
      android?: DependencyParamsAndroidT;
      ios?: ProjectParamsIOST;
      [key: string]: any;
    };
    assets: string[];
    hooks: HooksT;
    params: any[];
  };

  // An array of commands that ship with the dependency
  commands: CommandT[];

  // An array of extra platforms to load
  platforms?: {
    [name: string]: any;
  };

  // Haste config defined by legacy `rnpm`
  haste?: {
    platforms: string[];
    providesModuleNodeModules: string[];
  };
}

// The following types are used in untyped-parts of the codebase, so I am leaving them
// until we actually need them.
export interface ProjectConfigIOST {
  sourceDir: string;
  folder: string;
  pbxprojPath: string;
  podfile: null;
  podspecPath: null | string;
  projectPath: string;
  projectName: string;
  libraryFolder: string;
  sharedLibraries: any[];
  plist: any[];
}

export type DependencyConfigIOST = ProjectConfigIOST;
export interface ProjectConfigAndroidT {
  sourceDir: string;
  isFlat: boolean;
  folder: string;
  stringsPath: string;
  manifestPath: string;
  buildGradlePath: string;
  settingsGradlePath: string;
  assetsPath: string;
  mainFilePath: string;
  packageName: string;
}
export interface DependencyConfigAndroidT {
  sourceDir: string;
  folder: string;
  packageImportPath: string;
  packageInstance: string;
}
