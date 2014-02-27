// Type definitions for jQuery.Address 1.5
// Project: https://github.com/asual/jquery-address
// Definitions by: Martin Duparc <@martinduparc>
// Definitions: https://github.com/borisyankov/DefinitelyTyped/

/// <reference path="../jquery/jquery.d.ts" />

interface JQueryAddressStatic {
    ();
    change(callback: any): void;
    value(url: any): void;
    update(): void;
}

interface JQueryAddress {
    (): JQuery;
}

interface JQueryStatic {
    address: JQueryAddressStatic;
}

interface JQuery {
    address: JQueryAddress;
}
