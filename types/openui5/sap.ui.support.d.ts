// For Library Version: 1.109.0

declare module "sap/ui/support/library" {
  /**
   * @SINCE 1.50
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
   * @SINCE 1.50
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
     * @SINCE 1.58
     *
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
     * @SINCE 1.60
     *
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
   * @SINCE 1.58
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
   * @SINCE 1.50
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
   * @SINCE 1.60
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

declare module "sap/ui/support/supportRules/ExecutionScope" {
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
  export default class ExecutionScope {
    constructor();

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
     * @returns Array of matched elements
     */
    getPublicElements(): any[];
    /**
     * Gets the type of the execution scope
     *
     * @returns The type of the execution scope. Possible values are `global`, `subtree` or `components`.
     */
    getType(): string;
  }
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
     *
     * @returns Rule creation status. Possible values are "success" or description of why adding failed.
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
     *
     * @returns Notifies the finished state by starting the Analyzer
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
     *
     * @returns Array of history objects in the order of analyses performed. The results of the last analysis
     * are contained in the last element in the array.
     */
    getAnalysisHistory(): AnalysisResult[];
    /**
     * Returns the history of all executed analyses into formatted output depending on the passed format.
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
     * @SINCE 1.50
     *
     * UI5 library: sap.ui.support. A library for the Support Assistant tool. Overview: The library provides
     * the Support Assistant tool. It enables application developers to check whether their applications are
     * built according to the best practices for building SAPUI5 apps. The tool uses a set of pre-defined rules
     * to check all aspects of an application.
     */
    namespace support {
      /**
       * Overview: The CoreFacade interface gives access to the Metadata, Models, UI areas and Components of the
       * Core object.
       *
       * Usage: The CoreFacade is passed to all rule check functions as an object. This helps rule developers
       * to access the core state.
       */
      class CoreFacade {
        constructor(
          /**
           * Core object as available in core plugins
           */
          oCore: object
        );

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
       * The IssueManager is used to store and export issues to the Support Assistant. Overview: The IssueManager
       * is used to store and export issues found by the Support Assistant. Usage: The IssueManager can be used
       * as a static class and add issues using the `addIssue` method of both the IssueManager or the IssueManagerFacade.
       */
      class IssueManager {
        constructor();

        /**
         * Adds an issue to the list of issues found.
         */
        static addIssue(
          /**
           * The issue to be added in the IssueManager
           */
          oIssue: object
        ): void;
        /**
         * Clears all issues in the IssueManager.
         */
        static clearIssues(): void;
        /**
         * Converts issues to view model format.
         *
         * @returns viewModel Issues in ViewModel format
         */
        static convertToViewModel(
          /**
           * The issues to convert
           */
          oIssues: any[]
        ): any[];
        /**
         * Creates an instance of the IssueManagerFacade.
         *
         * @returns New IssueManagerFacade
         */
        static createIssueManagerFacade(
          /**
           * Given rule
           */
          oRule: object
        ): /* was: sap.ui.support.IssueManagerFacade */ any;
        /**
         * Converts the issues inside the IssueManager.
         *
         * @returns viewModel Issues in ViewModel format
         */
        static getIssuesModel(): object[];
        /**
         * Gets issues in TreeTable format.
         *
         * @returns All the issues in TreeTable usable model
         */
        static getIssuesViewModel(
          /**
           * All the issues after they have been grouped with `groupIssues`
           */
          issuesModel: object
        ): object;
        /**
         * Gets rules and issues, and converts each rule to a ruleViewModel - parameters should be converted as
         * specified beforehand.
         *
         * @returns rulesViewModel All the rules with issues, selected flag and issueCount properties The issues
         * are in ViewModel format.
         */
        static getRulesViewModel(
          /**
           * All the rules from _mRulesets
           */
          rules: object,
          /**
           * The rule ID's of the selected rules.
           */
          selectedRulesIDs: any[],
          /**
           * The issues to map to the rulesViewModel The issues passes should be grouped and in ViewModel format.
           */
          issues: any[]
        ): object;
        /**
         * Gets rules and converts them into treeTable format.
         *
         * @returns TreeTableModel Rules in treeTable usable format The rules are in a TreeTable format.
         */
        static getTreeTableViewModel(
          /**
           * Deserialized rules found within the current state
           */
          oRules: object
        ): object;
        /**
         * Groups all issues by library and rule ID.
         *
         * @returns groupedIssues Grouped issues by library and rule id
         */
        static groupIssues(
          /**
           * The issues to group. Must be in a ViewModel format
           */
          oIssues: any[]
        ): any[];
        /**
         * Cycles through issues stored in the IssueManager and executes the given callback function.
         */
        static walkIssues(
          /**
           * Callback function to be used in the same fashion as Array.prototype.forEach
           */
          fnCallback: Function
        ): void;
      }

      class RuleSet {
        /**
         * Creates a RuleSet.
         *
         * The RuleSet can store multiple rules concerning namespaces. Usage: The RuleSet is an interface used to
         * create, update and delete rulesets.
         */
        constructor(
          /**
           * Name of the initiated
           */
          oSettings: object
        );

        /**
         * Clears all rulesets inside the RuleSet.
         */
        static clearAllRuleSets(): void;
        /**
         * Loads the previous selection of the user - which rules are selected to be run by the Rule Analyzer. The
         * method applies the settings to the currently loaded rules.
         */
        static loadSelectionOfRules(
          /**
           * The current loaded libraries and their rules
           */
          aLibraries: Object[]
        ): void;
        /**
         * Stores which rules are selected to be run by the analyzer on the next check
         */
        static storeSelectionOfRules(
          /**
           * The data for the libraries and their rules
           */
          aLibraries: Object[]
        ): void;
        /**
         * Adds rules to RuleSet.
         *
         * @returns sRuleVerificationStatus Verification status
         */
        addRule(
          /**
           * Settings object with rule information
           */
          oSettings: object
        ): string;
        /**
         * Gets all rules from the RuleSet.
         *
         * @returns All rules within the current RuleSet
         */
        getRules(): object;
        /**
         * Remove rule from RuleSet.
         */
        removeRule(
          /**
           * Rule object that will be removed
           */
          oRule: object
        ): void;
        /**
         * Updates rules from the RuleSet.
         *
         * @returns sRuleVerification Rule Verification status
         */
        updateRule(
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
       * Overview: Channel constants which can be used to subscribe to the {@link sap.ui.support.WindowCommunicationBus}
       *
       * Usage: These channels are used for communication with Main.
       */
      enum WCBChannels {
        /**
         * Progress of current loading process
         */
        CURRENT_LOADING_PROGRESS = "undefined",
        /**
         * Posts information about which rule to be deleted.
         */
        DELETE_RULE = "undefined",
        /**
         * Ensure SupportAssistant iframe is open.
         */
        ENSURE_FRAME_OPENED = "undefined",
        /**
         * Upload external modules.
         */
        EXTERNAL_MODULE_UPLOADED = "undefined",
        /**
         * Gets components.
         */
        GET_AVAILABLE_COMPONENTS = "undefined",
        /**
         * Gets the issues.
         */
        GET_ISSUES = "undefined",
        /**
         * Get non loaded libraries with rules names
         */
        GET_NON_LOADED_RULE_SETS = "undefined",
        /**
         * Get rules model.
         */
        GET_RULES_MODEL = "undefined",
        /**
         * Highlight element in TreeTable.
         */
        HIGHLIGHT_ELEMENT = "undefined",
        /**
         * Loads all rule sets.
         */
        LOAD_RULESETS = "undefined",
        /**
         * Notifies after the analysis has finished.
         */
        ON_ANALYZE_FINISH = "undefined",
        /**
         * Notifies that the analysis has started.
         */
        ON_ANALYZE_STARTED = "undefined",
        /**
         * State change in the core.
         */
        ON_CORE_STATE_CHANGE = "undefined",
        /**
         * Downloads a report.
         */
        ON_DOWNLOAD_REPORT_REQUEST = "undefined",
        /**
         * Notifies when the rulesets have to be loaded.
         */
        ON_INIT_ANALYSIS_CTRL = "undefined",
        /**
         * Provides the current progress status of the analysis.
         */
        ON_PROGRESS_UPDATE = "undefined",
        /**
         * Shows a report.
         */
        ON_SHOW_REPORT_REQUEST = "undefined",
        /**
         * Open given URL.
         */
        OPEN_URL = "undefined",
        /**
         * Posts information about the application under test.
         */
        POST_APPLICATION_INFORMATION = "undefined",
        /**
         * Posts components.
         */
        POST_AVAILABLE_COMPONENTS = "undefined",
        /**
         * Posts available libraries.
         */
        POST_AVAILABLE_LIBRARIES = "undefined",
        /**
         * Posts a message.
         */
        POST_MESSAGE = "undefined",
        /**
         * Posts information about the UI and it's iframe.
         */
        POST_UI_INFORMATION = "undefined",
        /**
         * Request issues.
         */
        REQUEST_ISSUES = "undefined",
        /**
         * Request rules model.
         */
        REQUEST_RULES_MODEL = "undefined",
        /**
         * Resize SupportAssistant iframe.
         */
        RESIZE_FRAME = "undefined",
        /**
         * Hides SupportAssistant iframe.
         */
        TOGGLE_FRAME_HIDDEN = "undefined",
        /**
         * Notifies onmouseenter event on the TreeTable.
         */
        TREE_ELEMENT_MOUSE_ENTER = "undefined",
        /**
         * Notifies onmouseout event on the TreeTable.
         */
        TREE_ELEMENT_MOUSE_OUT = "undefined",
        /**
         * Updates support rules in IssueManager.
         */
        UPDATE_SUPPORT_RULES = "undefined",
        /**
         * Verifies rule creation.
         */
        VERIFY_CREATE_RULE = "undefined",
        /**
         * Verifies rule creation after it's finished.
         */
        VERIFY_RULE_CREATE_RESULT = "undefined",
        /**
         * Verifies rule update after it's finished.
         */
        VERIFY_RULE_UPDATE_RESULT = "undefined",
        /**
         * Verifies rule update.
         */
        VERIFY_UPDATE_RULE = "undefined",
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

    "sap/ui/support/supportRules/RuleSet": undefined;

    "sap/ui/support/supportRules/WCBChannels": undefined;
  }
}
