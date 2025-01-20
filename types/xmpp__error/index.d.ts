import { Element } from "@xmpp/xml";

export = XMPPError;

declare class XMPPError<TName extends string = "XMPPError"> extends Error {
    readonly name: TName;
    readonly condition: string;
    readonly text: string | undefined;
    readonly application: Element | undefined;
    element?: Element | undefined;

    constructor(condition: string, text?: string, application?: Element);

    static fromElement(element: Element): XMPPError;
}
