import { TemplateElement } from "template-element";

class Test extends TemplateElement {
    constructor() {
        super();
        this.addObservable('test');
        this.addElementProperty('test2', "div#test2");
    }
    get template() {
        return `
<div id="test2">
        {{test}}
</div>
        `
    }
    afterRenderCallback() {
        this.test = "Hello world";
    }
}
customElements.define('test-elem', Test);
