/// <reference types="jquery.validation" />

declare namespace MicrosoftJQueryUnobtrusiveValidation {
    type JQuerySelector = string | Document | Element | JQuery;

    interface Adapter {
        name: string;
        params: string[];
        adapt: Function;
    }

    interface Adapters extends Array<Adapter> {
        add(adapterName: string, fn: Function): Adapters;
        add(adapterName: string, params: string[], fn: Function): Adapters;
        addMinMax(
            adapterName: string,
            minRuleName: string,
            maxRuleName: string,
            minMaxRuleName: string,
            minAttribute?: string,
            maxAttribute?: string,
        ): Adapters;
        addSingleVal(adapterName: string, ruleName: string): Adapters;
        addSingleVal(adapterName: string, attribute: string, ruleName: string): Adapters;
        addBool(adapterName: string, ruleName?: string): Adapters;
        addMethod(adapterName: string, fn: (value: string, element: Element, params: any) => any): Adapters;
    }

    interface Validator {
        adapters: Adapters;
        parseElement(element: JQuerySelector, skipAttach?: boolean): void;
        parse(selector: JQuerySelector): void;
    }
}

declare namespace JQueryValidation {
    interface ValidatorStatic {
        unobtrusive: MicrosoftJQueryUnobtrusiveValidation.Validator;
    }
}
