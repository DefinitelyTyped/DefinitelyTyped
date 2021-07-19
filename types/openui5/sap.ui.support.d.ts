// For Library Version: 1.92.0

declare module "sap/ui/support/library" {
  /**
   * @SINCE 1.92.0
   *
   * Defines the Audiences.
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
   * @SINCE 1.92.0
   *
   * Issue Categories.
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
   * @SINCE 1.92.0
   *
   * Analysis history formats.
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
   * @SINCE 1.92.0
   *
   * Defines severity types.
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
   * @SINCE 1.92.0
   *
   * Contains the available system presets.
   */
  export enum SystemPresets {
    /**
     * The accessibility preset.
     */
    Accessibility = "undefined",
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

declare module "sap/ui/support/RuleAnalyzer" {
  import { AnalysisResult } from "sap/ui/support/supportRules/History";

  import { HistoryFormats } from "sap/ui/support/library";

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
   * 			or `sap.ui.support.RuleAnalyzer.getFormattedAnalysisHistory`.
   *
   * For more information, see {@link topic:a34eb58aaf124f538a3ead23a6cab04a Support Assistant API}.
   */
  interface RuleAnalyzer {
    /**
     * @SINCE 1.60
     *
     * Adds new temporary rule when in silent mode
     */
    addRule(
      /**
       * Settings for the new rule. For detailed information about its properties see {@link topic:eaeea19a991d46f29e6d8d8827317d0e
       * Rule Property Values}
       */
      oRule: object
    ): string;
    /**
     * Main method to perform analysis of a given running application.
     *
     * Allows to choose a particular execution scope - desired part of the UI to be checked and a flexible way
     * to specify the list of rules to be used.
     */
    analyze(
      /**
       * The execution scope of the analysis (see {@link topic:e15067d976f24b11907f4c262bd749a0 Execution Scope}).
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
     */
    getAnalysisHistory(): AnalysisResult[];
    /**
     * Returns the history of all executed analyses into formatted output depending on the passed format.
     */
    getFormattedAnalysisHistory(
      /**
       * The format into which the history object will be converted. Possible values are listed in sap.ui.support.HistoryFormats.
       */
      sFormat?: HistoryFormats | keyof typeof HistoryFormats
    ): any;
    /**
     * Returns the result of the last analysis performed.
     */
    getLastAnalysisHistory(): AnalysisResult;
  }
  const RuleAnalyzer: RuleAnalyzer;
  export default RuleAnalyzer;
}

declare namespace sap {
  namespace ui {
    /**
     * @SINCE 1.50
     *
     * UI5 library: sap.ui.support. A library for the Support Assistant tool. Overview: The library provides
     * the Support Assistant tool. It enables application developers to check whether their applications are
     * built according to the best practices for building SAPUI5 apps. The tool uses a set of pre-defined rules
     * to check all aspects of an application.
     */
    namespace support {
      export const CoreFacade: undefined;

      /**
       * Overview: These channels enable the user to hook to the {@link sap.ui.support.WindowCommunicationBus
       * } Usage: These channels are used for communication with Main.
       */
      export const WCBChannels: undefined;

      /**
       * Creates a RuleSet. The RuleSet can store multiple rules concerning namespaces. Usage: The RuleSet is
       * an interface used to create, update and delete rulesets.
       */
      namespace RuleSet {
        /**
         * Adds rules to RuleSet.
         */
        function addRule(
          /**
           * Settings object with rule information
           */
          oSettings: object
        ): string;
        /**
         * Clears all rulesets inside the RuleSet.
         */
        function clearAllRuleSets(): void;
        /**
         * Gets all rules from the RuleSet.
         */
        function getRules(): object;
        /**
         * Loads the previous selection of the user - which rules are selected to be run by the Rule Analyzer. The
         * method applies the settings to the currently loaded rules.
         */
        function loadSelectionOfRules(
          /**
           * The current loaded libraries and their rules
           */
          aLibraries: Object[]
        ): void;
        /**
         * Remove rule from RuleSet.
         */
        function removeRule(
          /**
           * Rule object that will be removed
           */
          oRule: object
        ): void;
        /**
         * Stores which rules are selected to be run by the analyzer on the next check
         */
        function storeSelectionOfRules(
          /**
           * The data for the libraries and their rules
           */
          aLibraries: Object[]
        ): void;
        /**
         * Updates rules from the RuleSet.
         */
        function updateRule(
          /**
           * Rule ID
           */
          sRuleId: string,
          /**
           * Rule settings
           */
          ORuleSettings: object
        ): string;
      }

      /**
       * @SINCE 1.48
       *
       * Allows to select the scope of analysis on an application.
       *
       * Overview:
       *
       * `ExecutionScope` is the third parameter of a rule check function. It provides access to internal UI5
       * objects available for inspection. The `getElements` API method allows the user to select a specific subset
       * of elements valid for their case. It accepts one query object argument.
       *
       * Usage:
       *
       * When a rule is executed, three parameters are passed: `oIssueManager`, `oCoreFacade` and `oScope`.
       *
       * An `ExecutionScope` instance is passed to every call of a rule check function. When you analyze your
       * application, available objects are collected depending on the settings passed to the Support Assistant
       * at the moment when you start it.
       */
      class ExecutionScope {
        /**
         *
         */
        constructor();

        /**
         *
         */
        static getElements(
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
         */
        static getElementsByClassName(
          /**
           * Either string or function to be used when selecting a subset of elements
           */
          classNameSelector: string | Function
        ): any[];
        /**
         * Gets the logged objects by object type
         */
        static getLoggedObjects(
          /**
           * Type of logged objects
           */
          type: any
        ): any[];
        /**
         * Returns all public elements, i.e. elements that are part of public API aggregations
         */
        static getPublicElements(): any[];
        /**
         * Gets the type of the execution scope
         */
        static getType(): string;
      }
    }
  }

  interface IUI5DefineDependencyNames {
    "sap/ui/support/jQuery.sap.support": undefined;

    "sap/ui/support/library": undefined;

    "sap/ui/support/RuleAnalyzer": undefined;

    "sap/ui/support/supportRules/ExecutionScope": undefined;

    "sap/ui/support/supportRules/History": undefined;

    "sap/ui/support/supportRules/RuleSet": undefined;
  }
}
