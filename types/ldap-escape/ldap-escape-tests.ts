/* tslint:disable:no-namespace */
'use strict';

import { dn, filter } from 'ldap-escape';

namespace Module {
    // filter(TemplateStringsArray: TemplateStringsArray, ...str: string[] | number[]): string;
    // dn(TemplateStringsArray: TemplateStringsArray, ...str: string[] | number[]): string;

    declare const tpl: TemplateStringsArray;
    // $ExpectType string
    dn(tpl);

    // $ExpectType string
    filter(tpl);
}
