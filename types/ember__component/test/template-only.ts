import templateOnly, { TemplateOnlyComponent } from '@ember/component/template-only';

const to = templateOnly(); // $ExpectType TemplateOnlyComponent

to.toString(); // $ExpectType string

new TemplateOnlyComponent(); // $ExpectError
