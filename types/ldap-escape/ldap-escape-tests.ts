import { dn, filter } from 'ldap-escape';

declare const tpl: TemplateStringsArray;

// $ExpectType string
dn(tpl);

// $ExpectType string
filter(tpl);
