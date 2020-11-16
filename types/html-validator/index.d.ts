// Type definitions for html-validator 5.0
// Project: https://github.com/zrrrzzt/html-validator
// Definitions by: Takesi Tokugawa <https://github.com/TokugawaTakesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

declare function HtmlValidator(
    options:
        HtmlValidator.OptionsForHtmlFileAsValidationTargetAndObjectAsResult |
        HtmlValidator.OptionsForExternalUrlAsValidationTargetAndObjectAsResult
): Promise<HtmlValidator.ParsedJsonAsValidationResults>;

declare function HtmlValidator(
    options:
        HtmlValidator.OptionsForHtmlFileAsValidationTargetAndTextAsResults |
        HtmlValidator.OptionsForExternalUrlAsValidationTargetAndTextAsResults
): Promise<string>;

declare namespace HtmlValidator {
    interface BasicOptions {
        validator?: object;
        ignore?: string | string[];
        isLocal?: boolean;
        isFragment?: boolean;
        headers?: Record<string, string>;
    }

    interface OptionsForHtmlFileAsValidationTarget extends BasicOptions {
        data: string;
    }

    interface OptionsForExternalUrlAsValidationTarget extends BasicOptions {
        url: string;
    }

    // Could be used to avoid string literals
    enum ValidationResultsOutputFormats {
        json = 'json',
        html = 'html',
        xhtml = 'xhtml',
        xml = 'xml',
        gnu = 'gnu',
        text = 'text',
    }

    interface OptionsForHtmlFileAsValidationTargetAndObjectAsResult extends OptionsForHtmlFileAsValidationTarget {
        format?: 'json';
    }

    interface OptionsForHtmlFileAsValidationTargetAndTextAsResults extends OptionsForHtmlFileAsValidationTarget {
        format: 'html' | 'xhtml' | 'xml' | 'gnu' | 'text';
    }

    interface OptionsForExternalUrlAsValidationTargetAndObjectAsResult extends OptionsForExternalUrlAsValidationTarget {
        format?: 'json';
    }

    interface OptionsForExternalUrlAsValidationTargetAndTextAsResults extends OptionsForHtmlFileAsValidationTarget {
        format: 'html' | 'xhtml' | 'xml' | 'gnu' | 'text';
    }

    interface ParsedJsonAsValidationResults {
        messages: ValidationMessageObject[];
    }

    // Could be used to avoid string literals
    enum ValidationMessageTypes {
        error = 'error',
        info = 'info',
        'non-document-error' = 'non-document-error',
    }

    // Could be used to avoid string literals
    enum ValidationMessageSubTypes {
        fatal = 'fatal',
        internal = 'internal',
        io = 'io',
        schema = 'schema',
        warning = 'warning',
    }

    interface ValidationMessageBasicObject {
        message: string;
    }

    interface ValidationMessageBasicLocationObject {
        lastLine: number;
        firstColumn: number;
        lastColumn: number;
        hiliteStart: number;
        hiliteLength: number;
        extract: string;
    }

    interface ValidationMessageBasicErrorObject {
        type: 'error';
        subType?: 'fatal';
    }

    interface ValidationMessageBasicInfoObject {
        type: 'info';
        subType?: 'warning';
    }

    interface ValidationMessageBasicNonDocumentErrorObject {
        type: 'non-document-error';
        subType?: 'internal' | 'io' | 'schema';
    }

    type ValidationMessageSimpleObject = (ValidationMessageBasicErrorObject | ValidationMessageBasicInfoObject | ValidationMessageBasicNonDocumentErrorObject) & ValidationMessageBasicObject;
    type ValidationMessageLocationObject = ValidationMessageSimpleObject & ValidationMessageBasicLocationObject;

    type ValidationMessageObject = ValidationMessageSimpleObject | ValidationMessageLocationObject;
}

export = HtmlValidator;
