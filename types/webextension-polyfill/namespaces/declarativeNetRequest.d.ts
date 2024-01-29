//////////////////////////////////////////////////////
// BEWARE: DO NOT EDIT MANUALLY! Changes will be lost!
//////////////////////////////////////////////////////

/**
 * Namespace: browser.declarativeNetRequest
 *
 * Use the declarativeNetRequest API to block or modify network requests by specifying declarative rules.
 * Permissions: "declarativeNetRequest", "declarativeNetRequestWithHostAccess"
 *
 * Comments found in source JSON schema files:
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
export namespace DeclarativeNetRequest {
    /**
     * How the requested resource will be used. Comparable to the webRequest.ResourceType type.
     */
    type ResourceType =
        | "main_frame"
        | "sub_frame"
        | "stylesheet"
        | "script"
        | "image"
        | "object"
        | "object_subrequest"
        | "xmlhttprequest"
        | "xslt"
        | "ping"
        | "beacon"
        | "xml_dtd"
        | "font"
        | "media"
        | "websocket"
        | "csp_report"
        | "imageset"
        | "web_manifest"
        | "speculative"
        | "other";

    /**
     * Describes the reason why a given regular expression isn't supported.
     */
    type UnsupportedRegexReason = "syntaxError" | "memoryLimitExceeded";

    interface MatchedRule {
        /**
         * A matching rule's ID.
         */
        ruleId: number;

        /**
         * ID of the Ruleset this rule belongs to.
         */
        rulesetId: string;

        /**
         * ID of the extension, if this rule belongs to a different extension.
         * Optional.
         */
        extensionId?: string;
    }

    /**
     * Describes the type of the Rule.action.redirect.transform property.
     */
    interface URLTransform {
        /**
         * The new scheme for the request.
         * Optional.
         */
        scheme?: URLTransformSchemeEnum;

        /**
         * The new username for the request.
         * Optional.
         */
        username?: string;

        /**
         * The new password for the request.
         * Optional.
         */
        password?: string;

        /**
         * The new host name for the request.
         * Optional.
         */
        host?: string;

        /**
         * The new port for the request. If empty, the existing port is cleared.
         * Optional.
         */
        port?: string;

        /**
         * The new path for the request. If empty, the existing path is cleared.
         * Optional.
         */
        path?: string;

        /**
         * The new query for the request. Should be either empty, in which case the existing query is cleared; or should begin with
         * '?'. Cannot be specified if 'queryTransform' is specified.
         * Optional.
         */
        query?: string;

        /**
         * Add, remove or replace query key-value pairs. Cannot be specified if 'query' is specified.
         * Optional.
         */
        queryTransform?: URLTransformQueryTransformType;

        /**
         * The new fragment for the request. Should be either empty, in which case the existing fragment is cleared; or should
         * begin with '#'.
         * Optional.
         */
        fragment?: string;
    }

    interface Rule {
        /**
         * An id which uniquely identifies a rule. Mandatory and should be >= 1.
         */
        id: number;

        /**
         * Rule priority. Defaults to 1. When specified, should be >= 1
         * Optional.
         */
        priority?: number;

        /**
         * The condition under which this rule is triggered.
         */
        condition: RuleConditionType;

        /**
         * The action to take if this rule is matched.
         */
        action: RuleActionType;
    }

    interface UpdateDynamicRulesOptionsType {
        /**
         * IDs of the rules to remove. Any invalid IDs will be ignored.
         * Optional.
         */
        removeRuleIds?: number[];

        /**
         * Rules to add.
         * Optional.
         */
        addRules?: Rule[];
    }

    interface UpdateSessionRulesOptionsType {
        /**
         * IDs of the rules to remove. Any invalid IDs will be ignored.
         * Optional.
         */
        removeRuleIds?: number[];

        /**
         * Rules to add.
         * Optional.
         */
        addRules?: Rule[];
    }

    interface UpdateEnabledRulesetsUpdateRulesetOptionsType {
        /**
         * Optional.
         */
        disableRulesetIds?: string[];

        /**
         * Optional.
         */
        enableRulesetIds?: string[];
    }

    interface IsRegexSupportedRegexOptionsType {
        /**
         * The regular expresson to check.
         */
        regex: string;

        /**
         * Whether the 'regex' specified is case sensitive.
         * Optional.
         */
        isCaseSensitive?: boolean;

        /**
         * Whether the 'regex' specified requires capturing. Capturing is only required for redirect rules which specify a
         * 'regexSubstition' action.
         * Optional.
         */
        requireCapturing?: boolean;
    }

    interface IsRegexSupportedCallbackResultType {
        /**
         * Whether the given regex is supported
         */
        isSupported: boolean;

        /**
         * Specifies the reason why the regular expression is not supported. Only provided if 'isSupported' is false.
         * Optional.
         */
        reason?: UnsupportedRegexReason;
    }

    /**
     * The details of the request to test.
     */
    interface TestMatchOutcomeRequestType {
        /**
         * The URL of the hypothetical request.
         */
        url: string;

        /**
         * The initiator URL (if any) for the hypothetical request.
         * Optional.
         */
        initiator?: string;

        /**
         * Standard HTTP method of the hypothetical request.
         * Optional.
         */
        method?: string;

        /**
         * The resource type of the hypothetical request.
         */
        type: ResourceType;

        /**
         * The ID of the tab in which the hypothetical request takes place. Does not need to correspond to a real tab ID.
         * Default is -1, meaning that the request isn't related to a tab.
         * Optional.
         */
        tabId?: number;
    }

    interface TestMatchOutcomeOptionsType {
        /**
         * Whether to account for rules from other installed extensions during rule evaluation.
         * Optional.
         */
        includeOtherExtensions?: boolean;
    }

    interface TestMatchOutcomeCallbackResultType {
        /**
         * The rules (if any) that match the hypothetical request.
         */
        matchedRules: MatchedRule[];
    }

    /**
     * The new scheme for the request.
     */
    type URLTransformSchemeEnum = "http" | "https" | "moz-extension";

    interface URLTransformQueryTransformAddOrReplaceParamsItemType {
        key: string;

        value: string;

        /**
         * If true, the query key is replaced only if it's already present. Otherwise, the key is also added if it's missing.
         * Optional.
         */
        replaceOnly?: boolean;
    }

    /**
     * Add, remove or replace query key-value pairs. Cannot be specified if 'query' is specified.
     */
    interface URLTransformQueryTransformType {
        /**
         * The list of query keys to be removed.
         * Optional.
         */
        removeParams?: string[];

        /**
         * The list of query key-value pairs to be added or replaced.
         * Optional.
         */
        addOrReplaceParams?: URLTransformQueryTransformAddOrReplaceParamsItemType[];
    }

    /**
     * Specifies whether the network request is first-party or third-party to the domain from which it originated. If omitted,
     * all requests are matched.
     */
    type RuleConditionDomainTypeEnum = "firstParty" | "thirdParty";

    /**
     * The condition under which this rule is triggered.
     */
    interface RuleConditionType {
        /**
         * TODO: link to doc explaining supported pattern. The pattern which is matched against the network request url.
         * Only one of 'urlFilter' or 'regexFilter' can be specified.
         * Optional.
         */
        urlFilter?: string;

        /**
         * Regular expression to match against the network request url. Only one of 'urlFilter' or 'regexFilter' can be specified.
         * Optional.
         */
        regexFilter?: string;

        /**
         * Whether 'urlFilter' or 'regexFilter' is case-sensitive.
         * Optional.
         */
        isUrlFilterCaseSensitive?: boolean;

        /**
         * The rule will only match network requests originating from the list of 'initiatorDomains'. If the list is omitted,
         * the rule is applied to requests from all domains.
         * Optional.
         */
        initiatorDomains?: string[];

        /**
         * The rule will not match network requests originating from the list of 'initiatorDomains'.
         * If the list is empty or omitted, no domains are excluded. This takes precedence over 'initiatorDomains'.
         * Optional.
         */
        excludedInitiatorDomains?: string[];

        /**
         * The rule will only match network requests when the domain matches one from the list of 'requestDomains'.
         * If the list is omitted, the rule is applied to requests from all domains.
         * Optional.
         */
        requestDomains?: string[];

        /**
         * The rule will not match network requests when the domains matches one from the list of 'excludedRequestDomains'.
         * If the list is empty or omitted, no domains are excluded. This takes precedence over 'requestDomains'.
         * Optional.
         */
        excludedRequestDomains?: string[];

        /**
         * List of resource types which the rule can match. When the rule action is 'allowAllRequests',
         * this must be specified and may only contain 'main_frame' or 'sub_frame'. Cannot be specified if 'excludedResourceTypes'
         * is specified. If neither of them is specified, all resource types except 'main_frame' are matched.
         * Optional.
         */
        resourceTypes?: ResourceType[];

        /**
         * List of resource types which the rule won't match. Cannot be specified if 'resourceTypes' is specified.
         * If neither of them is specified, all resource types except 'main_frame' are matched.
         * Optional.
         */
        excludedResourceTypes?: ResourceType[];

        /**
         * List of HTTP request methods which the rule can match. Should be a lower-case method such as 'connect', 'delete', 'get',
         * 'head', 'options', 'patch', 'post', 'put'.'
         * Optional.
         */
        requestMethods?: string[];

        /**
         * List of request methods which the rule won't match. Cannot be specified if 'requestMethods' is specified.
         * If neither of them is specified, all request methods are matched.
         * Optional.
         */
        excludedRequestMethods?: string[];

        /**
         * Specifies whether the network request is first-party or third-party to the domain from which it originated. If omitted,
         * all requests are matched.
         * Optional.
         */
        domainType?: RuleConditionDomainTypeEnum;

        /**
         * List of tabIds which the rule should match. An ID of -1 matches requests which don't originate from a tab.
         * Only supported for session-scoped rules.
         * Optional.
         */
        tabIds?: number[];

        /**
         * List of tabIds which the rule should not match. An ID of -1 excludes requests which don't originate from a tab.
         * Only supported for session-scoped rules.
         * Optional.
         */
        excludedTabIds?: number[];
    }

    type RuleActionTypeEnum = "block" | "redirect" | "allow" | "upgradeScheme" | "modifyHeaders" | "allowAllRequests";

    /**
     * Describes how the redirect should be performed. Only valid when type is 'redirect'.
     */
    interface RuleActionRedirectType {
        /**
         * Path relative to the extension directory. Should start with '/'.
         * Optional.
         */
        extensionPath?: string;

        /**
         * Url transformations to perform.
         * Optional.
         */
        transform?: URLTransform;

        /**
         * The redirect url. Redirects to JavaScript urls are not allowed.
         * Optional.
         */
        url?: string;

        /**
         * Substitution pattern for rules which specify a 'regexFilter'. The first match of regexFilter within the url will be
         * replaced with this pattern. Within regexSubstitution, backslash-escaped digits (\1 to \9)
         * can be used to insert the corresponding capture groups. \0 refers to the entire matching text.
         * Optional.
         */
        regexSubstitution?: string;
    }

    interface RuleActionRequestHeadersItemType {
        /**
         * The name of the request header to be modified.
         */
        header: string;

        /**
         * The operation to be performed on a header.
         */
        operation: "append" | "set" | "remove";

        /**
         * The new value for the header. Must be specified for the 'append' and 'set' operations.
         * Optional.
         */
        value?: string;
    }

    interface RuleActionResponseHeadersItemType {
        /**
         * The name of the response header to be modified.
         */
        header: string;

        /**
         * The operation to be performed on a header.
         */
        operation: "append" | "set" | "remove";

        /**
         * The new value for the header. Must be specified for the 'append' and 'set' operations.
         * Optional.
         */
        value?: string;
    }

    /**
     * The action to take if this rule is matched.
     */
    interface RuleActionType {
        type: RuleActionTypeEnum;

        /**
         * Describes how the redirect should be performed. Only valid when type is 'redirect'.
         * Optional.
         */
        redirect?: RuleActionRedirectType;

        /**
         * The request headers to modify for the request. Only valid when type is 'modifyHeaders'.
         * Optional.
         */
        requestHeaders?: RuleActionRequestHeadersItemType[];

        /**
         * The response headers to modify for the request. Only valid when type is 'modifyHeaders'.
         * Optional.
         */
        responseHeaders?: RuleActionResponseHeadersItemType[];
    }

    interface Static {
        /**
         * Modifies the current set of dynamic rules for the extension. The rules with IDs listed in options.
         * removeRuleIds are first removed, and then the rules given in options.addRules are added.
         * These rules are persisted across browser sessions and extension updates.
         *
         * @param options
         * @returns Called when the dynamic rules have been updated
         */
        updateDynamicRules(options: UpdateDynamicRulesOptionsType): Promise<void>;

        /**
         * Modifies the current set of session scoped rules for the extension. The rules with IDs listed in options.
         * removeRuleIds are first removed, and then the rules given in options.addRules are added.
         * These rules are not persisted across sessions and are backed in memory.
         *
         * @param options
         * @returns Called when the session rules have been updated
         */
        updateSessionRules(options: UpdateSessionRulesOptionsType): Promise<void>;

        /**
         * Returns the ids for the current set of enabled static rulesets.
         */
        getEnabledRulesets(): Promise<string[]>;

        /**
         * Returns the ids for the current set of enabled static rulesets.
         *
         * @param updateRulesetOptions
         */
        updateEnabledRulesets(updateRulesetOptions: UpdateEnabledRulesetsUpdateRulesetOptionsType): Promise<void>;

        /**
         * Returns the remaining number of static rules an extension can enable
         */
        getAvailableStaticRuleCount(): Promise<number>;

        /**
         * Returns the current set of dynamic rules for the extension.
         */
        getDynamicRules(): Promise<Rule[]>;

        /**
         * Returns the current set of session scoped rules for the extension.
         */
        getSessionRules(): Promise<Rule[]>;

        /**
         * Checks if the given regular expression will be supported as a 'regexFilter' rule condition.
         *
         * @param regexOptions
         */
        isRegexSupported(regexOptions: IsRegexSupportedRegexOptionsType): Promise<IsRegexSupportedCallbackResultType>;

        /**
         * Checks if any of the extension's declarativeNetRequest rules would match a hypothetical request.
         *
         * @param request The details of the request to test.
         * @param options Optional.
         * @returns Called with the details of matched rules.
         */
        testMatchOutcome(
            request: TestMatchOutcomeRequestType,
            options?: TestMatchOutcomeOptionsType,
        ): Promise<TestMatchOutcomeCallbackResultType>;

        /**
         * Ruleset ID for the dynamic rules added by the extension.
         */
        DYNAMIC_RULESET_ID: "_dynamic";

        /**
         * The minimum number of static rules guaranteed to an extension across its enabled static rulesets.
         * Any rules above this limit will count towards the global static rule limit.
         */
        GUARANTEED_MINIMUM_STATIC_RULES: number;

        /**
         * The maximum number of static Rulesets an extension can specify as part of the rule_resources manifest key.
         */
        MAX_NUMBER_OF_STATIC_RULESETS: number;

        /**
         * The maximum number of static Rulesets an extension can enable at any one time.
         */
        MAX_NUMBER_OF_ENABLED_STATIC_RULESETS: number;

        /**
         * The maximum number of dynamic and session rules an extension can add. NOTE: in the Firefox we are enforcing this limit
         * to the session and dynamic rules count separately, instead of enforcing it to the rules count for both combined as the
         * Chrome implementation does.
         */
        MAX_NUMBER_OF_DYNAMIC_AND_SESSION_RULES: number;

        /**
         * The maximum number of regular expression rules that an extension can add. This limit is evaluated separately for the set
         * of session rules, dynamic rules and those specified in the rule_resources file.
         */
        MAX_NUMBER_OF_REGEX_RULES: number;

        /**
         * Ruleset ID for the session-scoped rules added by the extension.
         */
        SESSION_RULESET_ID: "_session";
    }
}
