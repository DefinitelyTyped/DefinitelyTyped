/**
 * Namespace: browser.declarativeContent
 * Generated from Mozilla sources. Do not manually edit!
 *
 * Use the <code>chrome.declarativeContent</code> API to take actions depending on the content of a page,
 * without requiring permission to read the page's content.
 *
 * Comments found in source JSON schema files:
 * Copyright (c) 2012 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */
import { Events } from "./events";

export namespace DeclarativeContent {
    /**
     * See <a href="https://developer.mozilla.org/en-US/docs/Web/API/ImageData">https://developer.mozilla.
     * org/en-US/docs/Web/API/ImageData</a>.
     */
    interface ImageDataType extends ImageData {
        [s: string]: unknown;
    }

    /**
     * Matches the state of a web page based on various criteria.
     */
    interface PageStateMatcher {
        /**
         * Matches if the conditions of the <code>UrlFilter</code> are fulfilled for the top-level URL of the page.
         * Optional.
         */
        pageUrl?: Events.UrlFilter;

        /**
         * Matches if all of the CSS selectors in the array match displayed elements in a frame with the same origin as the page's
         * main frame. All selectors in this array must be <a href="http://www.w3.org/TR/selectors4/#compound">
         * compound selectors</a> to speed up matching. Note: Listing hundreds of CSS selectors or listing CSS selectors that match
         * hundreds of times per page can slow down web sites.
         * Optional.
         */
        css?: string[];

        /**
         * Matches if the bookmarked state of the page is equal to the specified value. Requres the <a href='declare_permissions'>
         * bookmarks permission</a>.
         * Optional.
         */
        isBookmarked?: boolean;
    }

    /**
     * Please use ShowAction.
     */
    type ShowPageAction = never;

    /**
     * Declarative event action that shows the extension's toolbar action ($(ref:pageAction page action)
     * or $(ref:browserAction browser action)) while the corresponding conditions are met.
     * This action can be used without <a href="declare_permissions#host-permissions">host permissions</a>.
     * If the extension has the <a href="activeTab.html">activeTab</a> permission, clicking the page action grants access to
     * the active tab.
     */
    interface ShowAction {
        [s: string]: unknown;
    }

    /**
     * Declarative event action that sets the n-<abbr title="device-independent pixel">dip</abbr>
     * square icon for the extension's $(ref:pageAction page action) or $(ref:browserAction browser action)
     * while the corresponding conditions are met. This action can be used without <a href="declare_permissions.
     * html#host-permissions">host permissions</a>, but the extension must have a page or browser action.<p>
     * Exactly one of <code>imageData</code> or <code>path</code> must be specified. Both are dictionaries mapping a number of
     * pixels to an image representation. The image representation in <code>imageData</code> is an <a href="https://developer.
     * mozilla.org/en-US/docs/Web/API/ImageData">ImageData</a> object; for example, from a <code>canvas</code> element,
     * while the image representation in <code>path</code> is the path to an image file relative to the extension's manifest.
     * If <code>scale</code> screen pixels fit into a device-independent pixel, the <code>scale * n</code> icon is used.
     * If that scale is missing, another image is resized to the required size.</p>
     */
    interface SetIcon {
        /**
         * Either an <code>ImageData</code> object or a dictionary {size -> ImageData} representing an icon to be set.
         * If the icon is specified as a dictionary, the image used is chosen depending on the screen's pixel density.
         * If the number of image pixels that fit into one screen space unit equals <code>scale</code>,
         * then an image with size <code>scale * n</code> is selected, where <i>n</i> is the size of the icon in the UI.
         * At least one image must be specified. Note that <code>details.imageData = foo</code> is equivalent to <code>details.
         * imageData = {'16': foo}</code>.
         * Optional.
         */
        imageData?: ImageDataType | SetIconImageDataC2Type;
    }

    /**
     * Declarative event action that injects a content script. <p><b>WARNING:</b> This action is still experimental and is not
     * supported on stable builds of Chrome.</p>
     */
    interface RequestContentScript {
        /**
         * Names of CSS files to be injected as a part of the content script.
         * Optional.
         */
        css?: string[];

        /**
         * Names of JavaScript files to be injected as a part of the content script.
         * Optional.
         */
        js?: string[];

        /**
         * Whether the content script runs in all frames of the matching page, or in only the top frame. Default is <code>
         * false</code>.
         * Optional.
         */
        allFrames?: boolean;

        /**
         * Whether to insert the content script on <code>about:blank</code> and <code>about:srcdoc</code>. Default is <code>
         * false</code>.
         * Optional.
         */
        matchAboutBlank?: boolean;
    }

    interface Rule<TCondition, TAction> {
        /**
         * List of conditions that can trigger the actions.
         */
        conditions: TCondition[];

        /**
         * List of actions that are triggered if one of the conditions is fulfilled.
         */
        actions: TAction[];
    }

    /**
     * An object which allows the addition and removal of rules for declarative content.
     */
    interface RuleEvent<TCondition, TAction> {
        /**
         * Registers rules to handle events.
         *
         * @param rules Rules to be registered. These do not replace previously registered rules.
         */
        addRules(rules: Array<Rule<TCondition, TAction>>): void;

        /**
         * Fetches currently registered rules.
         *
         * @param rules Optional. Rule ids to fetch.
         * @param callback Optional. Called when rules have been fetched.
         */
        getRules(rules?: string[], callback?: (rules: Array<Rule<TCondition, TAction>>) => void): void;

        /**
         * Unregisters currently registered rules.
         *
         * @param rules Optional. Rule ids to be unregistered.
         * @param callback Optional. Called when rules were unregistered.
         */
        removeRules(rules?: string[], callback?: () => void): void;
    }

    interface SetIconImageDataC2Type {
        [s: string]: unknown;
    }

    interface Static {
        PageStateMatcher: { new (options?: PageStateMatcher): PageStateMatcher };

        ShowAction: { new (options?: ShowAction): ShowAction };

        SetIcon: { new (options?: SetIcon): SetIcon };

        RequestContentScript: { new (options?: RequestContentScript): RequestContentScript };

        onPageChanged: RuleEvent<PageStateMatcher, RequestContentScript | SetIcon | ShowPageAction | ShowAction>;
    }
}
