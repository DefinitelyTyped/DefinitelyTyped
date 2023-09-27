import { Address } from "./address";
import { ElementsInstance } from "./elements";
import { RecurlyError } from "./error";

export type TokenPayload = {
    id: string;
    type: string;
};

export type CustomerData = Address;

export type TokenHandler = (error: RecurlyError | null, token: TokenPayload) => void;

export type HostedFieldToken = (form: HTMLFormElement | CustomerData, second: TokenHandler) => void;

export type ElementsToken = (
    elements: ElementsInstance,
    second: HTMLFormElement | CustomerData,
    third: TokenHandler,
) => void;

export type Token = HostedFieldToken & ElementsToken;
