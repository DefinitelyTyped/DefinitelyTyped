// Type definitions for html-validator
// Project: https://github.com/zrrrzzt/html-validator
// Definitions by: Takesi Tokugawa <https://github.com/TokugawaTakesi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare function HtmlValidator(
    options:
        HtmlValidator.OptionsForHtmlFileAsValidationTargetAndObjectAsResults |
        HtmlValidator.OptionsForExternalUrlAsValidationTargetAndObjectAsResults
): Promise<HtmlValidator.ValidationResultsAsParsedJSON>;

declare function HtmlValidator(
    options:
        HtmlValidator.OptionsForHtmlFileAsValidationTargetAndTextAsResults |
        HtmlValidator.OptionsForExternalUrlAsValidationTargetAndTextAsResults
): Promise<string>;

declare namespace HtmlValidator {

    interface BasicOptions {
        validator?: Object;
        ignore?: string | Array<string>;
        isLocal?: boolean;
    }

    interface OptionsForHtmlFileAsValidationTarget extends BasicOptions {
        data: string;
    }

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
      messages: Array<ValidationMessageObject>;
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