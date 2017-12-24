import { load } from 'marko';
import Template from 'marko/src/runtime/html/Template';

(document: Document) => {
    const component: Template = require('./hello');

    component.renderSync({ name: 'Marko' }).appendTo(document.body);
}
