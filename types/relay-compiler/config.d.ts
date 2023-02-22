export type ConfigFile = SingleProjectConfigFile | MultiProjectConfigFile
export type CustomScalarType = StringKey | CustomScalarTypeImport
export type StringKey = string
export type FeatureFlag =
  | {
      kind: "disabled"
      [k: string]: unknown
    }
  | {
      kind: "enabled"
      [k: string]: unknown
    }
  | {
      allowlist: StringKey[]
      kind: "limited"
      [k: string]: unknown
    }
  | {
      kind: "rollout"
      rollout: Rollout
      [k: string]: unknown
    }
/**
 * A utility to enable gradual rollout of large codegen changes. Can be constructed as the Default which passes or a percentage between 0 and 100.
 */
export type Rollout = number | null
/**
 * Formatting style for generated files.
 */
export type JsModuleFormat = "commonjs" | "haste"
export type TypegenLanguage = "javascript" | "typescript" | "flow"
export type DynamicModuleProvider =
  | {
      mode: "JSResource"
      [k: string]: unknown
    }
  | {
      mode: "Custom"
      statement: StringKey
      [k: string]: unknown
    }
export type PersistConfig = RemotePersistConfig | LocalPersistConfig
export type LocalPersistAlgorithm = "MD5" | "SHA1" | "SHA256"
/**
 * Wrapper struct for clarity rather than having StringKey everywhere.
 */
export type DirectiveName = StringKey
/**
 * Levels for reporting errors in the compiler.
 */
export type DiagnosticLevel = "error" | "warning" | "info" | "hint"
/**
 * When set, enum values are imported from a module with this suffix. For example, an enum Foo and this property set to ".test" would be imported from "Foo.test". Note: an empty string is allowed and different from not setting the value, in the example above it would just import from "Foo".
 */
export type ForFlowTypeGeneration = string | null
/**
 * When set, generated input types will have the listed fields optional even if the schema defines them as required.
 */
export type ForFlowTypeGeneration1 = StringKey[]
/**
 * Whether to use the `import type` syntax introduced in Typescript version 3.8. This will prevent warnings from `importsNotUsedAsValues`.
 */
export type ForTypescriptTypeGeneration = boolean
/**
 * Set of project names.
 */
export type ProjectSet = StringKey[]

export interface SingleProjectConfigFile {
  /**
   * A specific directory to output all artifacts to. When enabling this ' the babel plugin needs `artifactDirectory` set as well.
   */
  artifactDirectory?: string | null
  /**
   * Name of the command that runs the relay compiler
   */
  codegenCommand?: string | null
  /**
   * Mappings from custom scalars in your schema to built-in GraphQL types, for type emission purposes.
   */
  customScalars?: {
    [k: string]: CustomScalarType
  }
  /**
   * This option enables emitting es modules artifacts.
   */
  eagerEsModules?: boolean
  /**
   * Directories to ignore under src default: ['** /node_modules/**', '** /__mocks__/**', '** /__generated__/**'],
   */
  excludes?: string[]
  /**
   * [DEPRECATED] This is deprecated field, we're not using it in the V13. Adding to the config, to show the warning, and not a parse error.
   */
  extensions?: string[]
  featureFlags?: FeatureFlags | null
  /**
   * [DEPRECATED] This is deprecated field, we're not using it in the V13. Adding to the config, to show the warning, and not a parse error.
   */
  include?: string[]
  /**
   * We may generate some content in the artifacts that's stripped in production if __DEV__ variable is set This config option is here to define the name of that special variable
   */
  isDevVariableName?: string | null
  /**
   * Formatting style for generated files.
   */
  jsModuleFormat?: JsModuleFormat & string
  /**
   * The name of the language plugin (?) used for input files and artifacts
   */
  language?: TypegenLanguage | null
  /**
   * Configuration for @module
   */
  moduleImportConfig?: ModuleImportConfig
  /**
   * This option controls whether or not a catch-all entry is added to enum type definitions for values that may be added in the future. Enabling this means you will have to update your application whenever the GraphQL server schema adds new enum values to prevent it from breaking.
   */
  noFutureProofEnums?: boolean
  /**
   * Query Persist Configuration It contains URL and addition parameters that will be included with the request (think API_KEY, APP_ID, etc...)
   */
  persistConfig?: PersistConfig | null
  /**
   * Path to schema.graphql
   */
  schema: string
  /**
   * Extra configuration for the schema itself.
   */
  schemaConfig?: SchemaConfig
  /**
   * List of directories with schema extensions.
   */
  schemaExtensions?: string[]
  /**
   * Root directory of application code
   */
  src: string
  /**
   * Added in 13.1.1 to customize Final/Compat mode in the single project config file Removed in 14.0.0
   */
  typegenPhase?: {
    [k: string]: unknown
  }
}
export interface CustomScalarTypeImport {
  name: StringKey
  path: string
  [k: string]: unknown
}
export interface FeatureFlags {
  actor_change_support?: FeatureFlag
  /**
   * Print queries in compact form
   */
  compact_query_text?: FeatureFlag
  /**
   * Create normalization nodes for client edges to client objects
   */
  emit_normalization_nodes_for_client_edges?: boolean
  enable_3d_branch_arg_generation?: boolean
  enable_client_edges?: FeatureFlag
  enable_flight_transform?: boolean
  /**
   * Enable support for the experimental `@alias` directive on fragment spreads.
   */
  enable_fragment_aliases?: FeatureFlag
  enable_relay_resolver_transform?: boolean
  /**
   * Enable hashing of the `supported` argument of 3D fields. Partial enabling of the feature flag checks the name based on the field type.
   */
  hash_supported_argument?: FeatureFlag
  /**
   * For now, this also disallows fragments with variable definitions This also makes @module to opt in using @no_inline internally NOTE that the presence of a fragment in this list only controls whether a fragment is *allowed* to use @no_inline: whether the fragment is inlined or not depends on whether it actually uses that directive.
   */
  no_inline?: FeatureFlag
  /**
   * Enable deprecated `@outputType` on Relay Resolvers.
   */
  relay_resolver_enable_output_type?: FeatureFlag
  /**
   * Use `@RelayResolver ModelName` syntax in Relay resolvers.
   */
  relay_resolver_model_syntax_enabled?: boolean
  skip_printing_nulls?: FeatureFlag
  /**
   * Enable generation of text artifacts used to generate full query strings later.
   */
  text_artifacts?: FeatureFlag
}
/**
 * Configuration for @module.
 */
export interface ModuleImportConfig {
  /**
   * Defines the custom import statement to be generated on the `ModuleImport` node in ASTs, used for dynamically loading components at runtime.
   */
  dynamicModuleProvider?: DynamicModuleProvider | null
}
export interface RemotePersistConfig {
  concurrency?: number | null
  /**
   * Additional headers to send
   */
  headers?: {
    [k: string]: string
  }
  /**
   * The document will be in a POST parameter `text`. This map can contain additional parameters to send.
   */
  params?: {
    [k: string]: string
  }
  /**
   * URL to send a POST request to to persist.
   */
  url: string
}
export interface LocalPersistConfig {
  algorithm?: LocalPersistAlgorithm & string
  file: string
}
export interface SchemaConfig {
  connectionInterface?: ConnectionInterface
  /**
   * The name of the `id` field that exists on the `Node` interface.
   */
  nodeInterfaceIdField?: StringKey & string
  nonNodeIdFields?: NonNodeIdFieldsConfig | null
  /**
   * The name of the directive indicating fields that cannot be selected
   */
  unselectableDirectiveName?: DirectiveName & string
  [k: string]: unknown
}
/**
 * Configuration where Relay should expect some fields in the schema.
 */
export interface ConnectionInterface {
  cursor: StringKey
  edges: StringKey
  endCursor: StringKey
  hasNextPage: StringKey
  hasPreviousPage: StringKey
  node: StringKey
  pageInfo: StringKey
  startCursor: StringKey
}
/**
 * Configuration of Relay's validation for `id` fields outside of the `Node` interface.
 */
export interface NonNodeIdFieldsConfig {
  /**
   * A map of parent type names to allowed type names for fields named `id`
   */
  allowedIdTypes?: {
    [k: string]: StringKey
  }
}
/**
 * Schema of the compiler configuration JSON file.
 */
export interface MultiProjectConfigFile {
  codegenCommand?: string | null
  /**
   * Glob patterns that should not be part of the sources even if they are in the source set directories.
   */
  excludes?: string[]
  featureFlags?: FeatureFlags
  header?: string[]
  /**
   * Then name of the global __DEV__ variable to use in generated artifacts
   */
  isDevVariableName?: string | null
  /**
   * Optional name for this config, might be used for logging or custom extra artifact generator code.
   */
  name?: string | null
  /**
   * Configuration of projects to compile.
   */
  projects: {
    [k: string]: ConfigFileProject
  }
  /**
   * Root directory relative to the config file. Defaults to the directory where the config is located.
   */
  root?: string | null
  /**
   * A mapping from directory paths (relative to the root) to a source set. If a path is a subdirectory of another path, the more specific path wins.
   */
  sources: {
    [k: string]: ProjectSet
  }
}
export interface ConfigFileProject {
  /**
   * If a base project is set, the documents of that project can be referenced, but won't produce output artifacts. Extensions from the base project will be added as well and the schema of the base project should be a subset of the schema of this project.
   */
  base?: StringKey | null
  /**
   * A map from GraphQL scalar types to a custom JS type, example: { "Url": "String" } { "Url": {"name:: "MyURL", "path": "../src/MyUrlTypes"} }
   */
  customScalarTypes?: {
    [k: string]: CustomScalarType
  }
  diagnosticReportConfig?: DiagnosticReportConfig
  /**
   * This option enables emitting es modules artifacts.
   */
  eagerEsModules?: boolean
  enumModuleSuffix?: ForFlowTypeGeneration
  /**
   * A placeholder for allowing extra information in the config file
   */
  extra?: {
    [k: string]: unknown
  }
  /**
   * Some projects may need to generate extra artifacts. For those, we may need to provide an additional directory to put them. By default the will use `output` *if available
   */
  extraArtifactsOutput?: string | null
  featureFlags?: FeatureFlags | null
  /**
   * Work in progress new Flow type definitions
   */
  flowTypegen?: FlowTypegenConfig
  jsModuleFormat?: JsModuleFormat & string
  /**
   * The desired output language, "flow" or "typescript".
   */
  language: TypegenLanguage
  moduleImportConfig?: ModuleImportConfig
  optionalInputFields?: ForFlowTypeGeneration1
  /**
   * A project without an output directory will put the generated files in a __generated__ directory next to the input file. All files in these directories should be generated by the Relay compiler, so that the compiler can cleanup extra files.
   */
  output?: string | null
  /**
   * If this option is set, the compiler will persist queries using this config.
   */
  persist?: PersistConfig | null
  /**
   * Require all GraphQL scalar types mapping to be defined, will throw if a GraphQL scalar type doesn't have a JS type
   */
  requireCustomScalarTypes?: boolean
  /**
   * A generic rollout state for larger codegen changes. The default is to pass, otherwise it should be a number between 0 and 100 as a percentage.
   */
  rollout?: Rollout
  /**
   * Path to the schema.graphql or a directory containing a schema broken up in multiple *.graphql files. Exactly 1 of these options needs to be defined.
   */
  schema?: string | null
  schemaConfig?: SchemaConfig
  schemaDir?: string | null
  /**
   * Directory containing *.graphql files with schema extensions.
   */
  schemaExtensions?: string[]
  /**
   * If `output` is provided and `shard_output` is `true`, shard the files by putting them under `{output_dir}/{source_relative_path}`
   */
  shardOutput?: boolean
  /**
   * Regex to match and strip parts of the `source_relative_path`
   */
  shardStripRegex?: string | null
  /**
   * Optional regex to restrict @relay_test_operation to directories matching this regex. Defaults to no limitations.
   */
  testPathRegex?: string | null
  useImportTypeSyntax?: ForTypescriptTypeGeneration
  /**
   * Generates a `// @relayVariables name1 name2` header in generated operation files
   */
  variableNamesComment?: boolean
}
/**
 * Configuration for all diagnostic reporting in the compiler
 */
export interface DiagnosticReportConfig {
  /**
   * Threshold for diagnostics to be critical to the compiler's execution. All diagnostic with severities at and below this level will cause the compiler to fatally exit.
   */
  criticalLevel: DiagnosticLevel
  [k: string]: unknown
}
export interface FlowTypegenConfig {
  /**
   * This option controls whether or not a catch-all entry is added to enum type definitions for values that may be added in the future. Enabling this means you will have to update your application whenever the GraphQL server schema adds new enum values to prevent it from breaking.
   */
  no_future_proof_enums?: boolean
}
