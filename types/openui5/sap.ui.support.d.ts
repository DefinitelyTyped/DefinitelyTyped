// For Library Version: 1.124.0

declare module "sap/ui/support/library" {
  /**
   * Defines the Audiences.
   *
   * This enum is part of the 'sap/ui/support/library' module export and must be accessed by the property
   * 'Audiences'.
   *
   * @since 1.50
   */
  export enum Audiences {
    /**
     * Audience just on Application level.
     */
    Application = "Application",
    /**
     * Audience just on Control level.
     */
    Control = "Control",
    /**
     * Audience just on Internal level.
     */
    Internal = "Internal",
  }
  /**
   * Issue Categories.
   *
   * This enum is part of the 'sap/ui/support/library' module export and must be accessed by the property
   * 'Categories'.
   *
   * @since 1.50
   */
  export enum Categories {
    /**
     * Accessibility issue category.
     */
    Accessibility = "Accessibility",
    /**
     * Binding issue category.
     */
    Bindings = "Bindings",
    /**
     * Consistency issue category.
     */
    Consistency = "Consistency",
    /**
     * DataModel issue category.
     */
    DataModel = "DataModel",
    /**
     * Fiori Guidelines issue category.
     *
     * @since 1.58
     */
    FioriGuidelines = "FioriGuidelines",
    /**
     * Functionality issue category.
     */
    Functionality = "Functionality",
    /**
     * Memory issue category.
     */
    Memory = "Memory",
    /**
     * Modularization issue category.
     *
     * @since 1.60
     */
    Modularization = "Modularization",
    /**
     * Other issue category.
     */
    Other = "Other",
    /**
     * Performance issue category.
     */
    Performance = "Performance",
    /**
     * Usability issue category.
     */
    Usability = "Usability",
    /**
     * Usage issue category.
     */
    Usage = "Usage",
  }
  /**
   * Analysis history formats.
   *
   * This enum is part of the 'sap/ui/support/library' module export and must be accessed by the property
   * 'HistoryFormats'.
   *
   * @since 1.58
   */
  export enum HistoryFormats {
    /**
     * ABAP history format.
     */
    Abap = "Abap",
    /**
     * String history format.
     */
    String = "String",
  }
  /**
   * Support Assistant rule configuration
   */
  export type RuleConfiguration = {
    id: string;

    async: boolean;

    title: string;

    resolution: string;

    minversion: string;

    categories: Array<Categories | keyof typeof Categories>;

    audiences: Array<Audiences | keyof typeof Audiences>;

    description: string;

    resolutionurls: string;

    check: string;
  };

  /**
   * Defines severity types.
   *
   * This enum is part of the 'sap/ui/support/library' module export and must be accessed by the property
   * 'Severity'.
   *
   * @since 1.50
   */
  export enum Severity {
    /**
     * High issue severity.
     */
    High = "High",
    /**
     * Low issue severity.
     */
    Low = "Low",
    /**
     * Medium issue severity.
     */
    Medium = "Medium",
  }
  /**
   * Contains the available system presets.
   *
   * This enum is part of the 'sap/ui/support/library' module export and must be accessed by the property
   * 'SystemPresets'.
   *
   * @since 1.60
   */
  export enum SystemPresets {
    /**
     * The accessibility preset.
     */
    Accessibility = "undefined",
    /**
     * Preset to find usages of deprecated controls, properties, aggregations and others.
     *
     * @experimental (since 1.120)
     */
    Deprecations = "undefined",
  }
}

declare module "sap/ui/support/supportRules/History" {
  /**
   * Analysis result which is created after analysis with the SupportAssistant.
   */
  export type AnalysisResult = {
    /**
     * The loaded libraries.
     */
    loadedLibraries: Record<string, Object>;
    /**
     * Data for the performed analysis.
     */
    analysisInfo: Object;
    /**
     * The metadata provided in the analyze method, if any.
     */
    analysisMetadata: Object;
    /**
     * Array with information about the application.
     */
    applicationInfo: Object[];
    /**
     * Technical information.
     */
    technicalInfo: Object[];
    /**
     * Count of the issues, found in the application.
     */
    totalIssuesCount: number;
    /**
     * Array with all the issues, which were found.
     */
    issues: Object[];
  };
}

declare module "sap/ui/support/supportRules/ExecutionScope" {
  /**
   * Allows to select the scope of analysis on an application.
   *
   * Overview:
   *
   * The ExecutionScope provides access to internal UI5 objects available for inspection. The `getElements`
   * API method allows the user to select a specific subset of elements valid for their case. It accepts one
   * query object argument.
   *
   * Usage: The ExecutionScope is passed as third argument to all rule check functions.
   *
   * When you analyze your application, available objects are collected depending on the settings passed to
   * the Support Assistant at the moment when you start it.
   *
   * @since 1.48
   */
  export default class ExecutionScope {
    /**
     * @ui5-protected Do not call from applications (only from related classes in the framework)
     */
    protected constructor();

    /**
     *
     * @returns Array of matched elements
     */
    getElements(
      /**
       * Object with specific filtering options
       */
      oConfig: {
        /**
         * Type name to filter by type
         */
        type: string;
        /**
         * Option to exclude elements that are not public aggregations
         */
        public: boolean;
        /**
         * Option to exclude elements that are clones of list bindings
         */
        cloned: boolean;
      }
    ): any[];
    /**
     * Gets elements by their type
     *
     *
     * @returns Array of matched elements
     */
    getElementsByClassName(
      /**
       * Either string or function to be used when selecting a subset of elements
       */
      classNameSelector: string | Function
    ): any[];
    /**
     * Gets the logged objects by object type
     *
     *
     * @returns Array of logged objects
     */
    getLoggedObjects(
      /**
       * Type of logged objects
       */
      type: any
    ): any[];
    /**
     * Returns all public elements, i.e. elements that are part of public API aggregations
     *
     *
     * @returns Array of matched elements
     */
    getPublicElements(): any[];
    /**
     * Gets the type of the execution scope
     *
     *
     * @returns The type of the execution scope. Possible values are `global`, `subtree` or `components`.
     */
    getType(): string;
  }
}

declare module "sap/ui/support/RuleAnalyzer" {
  import { RuleConfiguration, HistoryFormats } from "sap/ui/support/library";

  import { AnalysisResult } from "sap/ui/support/supportRules/History";

  /**
   * The `sap.ui.support.RuleAnalyzer` namespace is the central entry point for the Support Assistant functionality.
   *
   * Overview: `sap.ui.support.RuleAnalyzer` reveals an API for the Support Assistant which you can easily
   * work with to analyze an application.
   *
   * Usage:
   *
   *
   * 	 -  `sap.ui.support.RuleAnalyzer.addRule` method allows adding a new rule.
   * 	 -  `sap.ui.support.RuleAnalyzer.analyze` starts the analysis of the application.
   * 	 -  Then the result can be accessed with methods `sap.ui.support.RuleAnalyzer.getAnalysisHistory`, `sap.ui.support.RuleAnalyzer.getLastAnalysisHistory`
   *     or `sap.ui.support.RuleAnalyzer.getFormattedAnalysisHistory`.
   *
   * For more information, see {@link https://ui5.sap.com/#/topic/a34eb58aaf124f538a3ead23a6cab04a Support Assistant API}.
   */
  interface RuleAnalyzer {
    /**
     * Adds new temporary rule when in silent mode
     *
     * @since 1.60
     *
     * @returns Rule creation status. Possible values are "success" or description of why adding failed.
     */
    addRule(
      /**
       * Settings for the new rule. For detailed information about its properties see {@link https://ui5.sap.com/#/topic/eaeea19a991d46f29e6d8d8827317d0e Rule Property Values}
       */
      oRule: RuleConfiguration
    ): string;
    /**
     * Main method to perform analysis of a given running application.
     *
     * Allows to choose a particular execution scope - desired part of the UI to be checked and a flexible way
     * to specify the list of rules to be used.
     *
     *
     * @returns Notifies the finished state by starting the Analyzer
     */
    analyze(
      /**
       * The execution scope of the analysis (see {@link https://ui5.sap.com/#/topic/e15067d976f24b11907f4c262bd749a0 Execution Scope}).
       */
      oExecutionScope?: {
        /**
         * Possible values are `global`, `subtree` or `components`.
         */
        type?: string;
        /**
         * ID of the root element that forms a subtree. Use when the scope type is `subtree`.
         */
        parentId?: string;
        /**
         * List of IDs of the components to be analyzed. Use only when the scope type is `components`.
         */
        components?: string[];
      },
      /**
       * This optional parameter allows for selection of subset of rules for the analysis. You can pass:
       *
       * 	 - A rule preset object containing the preset ID and the list of rules it contains.
       * 	 - A string that refers to the ID of a system preset.
       * 	 - An object array with a plain list of rules.
       */
      vPresetOrRules?: object | string | object[],
      /**
       * Metadata in custom format. Its only purpose is to be included in the analysis report.
       */
      oMetadata?: object
    ): Promise<any>;
    /**
     * Returns the history of all executed analyses.
     *
     *
     * @returns Array of history objects in the order of analyses performed. The results of the last analysis
     * are contained in the last element in the array.
     */
    getAnalysisHistory(): AnalysisResult[];
    /**
     * Returns the history of all executed analyses into formatted output depending on the passed format.
     *
     *
     * @returns All analysis history objects in the correct format.
     */
    getFormattedAnalysisHistory(
      /**
       * The format into which the history object will be converted. Possible values are listed in sap.ui.support.HistoryFormats.
       */
      sFormat?: HistoryFormats | keyof typeof HistoryFormats
    ): any;
    /**
     * Returns the result of the last analysis performed.
     *
     *
     * @returns Last analysis history.
     */
    getLastAnalysisHistory(): AnalysisResult;
  }
  const RuleAnalyzer: RuleAnalyzer;
  export default RuleAnalyzer;
}

declare namespace sap {
  namespace ui {
    /**
     * UI5 library: sap.ui.support. A library for the Support Assistant tool. Overview: The library provides
     * the Support Assistant tool. It enables application developers to check whether their applications are
     * built according to the best practices for building SAPUI5 apps. The tool uses a set of pre-defined rules
     * to check all aspects of an application.
     *
     * @since 1.50
     */
    namespace support {
      /**
       * The CoreFacade interface allows rule developers to access the metadata, models, UI areas and components
       * of the Core.
       *
       * Usage: The CoreFacade is passed as second argument to all rule check functions.
       */
      class CoreFacade {
        /**
         * @ui5-protected Do not call from applications (only from related classes in the framework)
         */
        protected constructor();

        /**
         * Gets the Components from the Core object.
         */
        getComponents(): void;
        /**
         * Gets the Metadata from the Core object.
         */
        getMetadata(): void;
        /**
         * Gets the Models from the Core object.
         */
        getModels(): void;
        /**
         * Gets the UI areas from the Core object.
         */
        getUIAreas(): void;
      }
      /**
       * The IssueManagerFacade allows rule developers to add new issues.
       *
       * Usage: The IssueManagerFacade is passed as first argument to all rule check functions.
       */
      class IssueManagerFacade {
        /**
         * @ui5-protected Do not call from applications (only from related classes in the framework)
         */
        protected constructor();

        /**
         * Adds issue
         */
        addIssue(
          /**
           * Issue object to be added
           */
          oIssue: {
            severity: import("sap/ui/support/library").Severity;

            details: string;

            context: {
              id: string;
            };
          }
        ): void;
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ui/support/library": undefined;

    "sap/ui/support/RuleAnalyzer": undefined;

    "sap/ui/support/supportRules/CoreFacade": undefined;

    "sap/ui/support/supportRules/ExecutionScope": undefined;

    "sap/ui/support/supportRules/History": undefined;

    "sap/ui/support/supportRules/IssueManager": undefined;
  }
}
