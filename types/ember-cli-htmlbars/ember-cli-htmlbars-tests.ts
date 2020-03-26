import { TemplateFactory, hbs } from 'ember-cli-htmlbars';

const result = hbs`<NeatoComponent @args={{this.coolio}} />`; // $ExpectType TemplateFactory
const shouldError = hbs(12); // $ExpectError
const shouldAlsoError = hbs('12'); // $ExpectError
