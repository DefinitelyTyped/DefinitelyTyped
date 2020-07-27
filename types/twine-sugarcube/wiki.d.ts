export interface WikifierAPI {
    createExternalLink(destination: string, url: string, text: string): HTMLElement;
    createInternalLink(destination: string, passage: string, text: string, callback: () => void): HTMLElement;
    evalExpression(code: string): any;
    evalStatements(code: string): any;
    /**
     * @see State.getVar
     */
    getValue(varName: string): any;
    /**
     * @see Story.has
     * @param link link
     */
    isExternalLink(link: string): boolean;
    parse(text: string): any;
    /**
     * @see State.setVar
     */
    setValue(varName: string, value: any): boolean;
    wikifyEval(text: string): string;
}

export {};
