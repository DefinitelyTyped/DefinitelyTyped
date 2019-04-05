// Type definitions for html-validator 4.0
// Project: https://github.com/zrrrzzt/html-validator
// Definitions by: Takesi Tokugawa <https://github.com/TokugawaTakesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * If desired validation format is 'json', really not json, JavaScript object (parsed object will be returned)
 */
declare function HtmlValidator(
    options:
        HtmlValidator.OptionsForHtmlFileAsValidationTargetAndObjectAsResults |
        HtmlValidator.OptionsForExternalUrlAsValidationTargetAndObjectAsResults
): Promise<HtmlValidator.ValidationResultsAsParsedJSON>;

/**
 * If desired validation format is not json, string will be returned;
 */
declare function HtmlValidator(
    options:
        HtmlValidator.OptionsForHtmlFileAsValidationTargetAndTextAsResults |
        HtmlValidator.OptionsForExternalUrlAsValidationTargetAndTextAsResults
): Promise<string>;

declare namespace HtmlValidator {
    interface BasicOptions {
        validator?: Object;
        ignore?: string | string[];
        isLocal?: boolean;
    }

    // Validation target is html file
    interface OptionsForHtmlFileAsValidationTarget extends BasicOptions {
        data: string;
    }

    // Validation target is url
    interface OptionsForExternalUrlAsValidationTarget extends BasicOptions {
        url: string;
    }

    interface OptionsForHtmlFileAsValidationTargetAndObjectAsResults extends OptionsForHtmlFileAsValidationTarget {
      format?: 'json';
    }

    interface OptionsForHtmlFileAsValidationTargetAndTextAsResults extends OptionsForHtmlFileAsValidationTarget {
      format: 'html' | 'xhtml' | 'xml' | 'gnu' | 'text';
    }

    interface OptionsForExternalUrlAsValidationTargetAndObjectAsResults extends OptionsForExternalUrlAsValidationTarget {
      format?: 'json';
    }

    interface OptionsForExternalUrlAsValidationTargetAndTextAsResults extends OptionsForHtmlFileAsValidationTarget {
      format: 'html' | 'xhtml' | 'xml' | 'gnu' | 'text';
    }

    interface ValidationResultsAsParsedJSON {
      messages: ValidationMessageObject[];
    }

    interface ValidationMessageObject {
      type: 'error' | 'info';
      subType?: 'warning';
      lastLine: number;
      firstColumn: number;
      lastColumn: number;
      hiliteStart: number;
      hiliteLength: number;
      message: string;
      extract: string;
    }
}

export = HtmlValidator;
