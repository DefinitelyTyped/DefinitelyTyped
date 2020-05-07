import naja, { AbortEvent, CompleteEvent, Naja, NajaEventListener, StartEvent, SuccessEvent } from 'naja';

class TestExtension {
    constructor(naja: Naja, optionalArg: string) {
        this.naja = naja;
        this.optionalArg = optionalArg;
        this.naja.addEventListener('init', this.makeRequest);
    }

    private readonly naja: Naja;

    private readonly optionalArg: string;

    private async makeRequest(): Promise<void> {
        if (this.naja.uiHandler.isUrlAllowed('some-url')) {
            return this.naja.makeRequest('GET', 'some-url', null, { abort: false });
        }
    }
}

const genericListener = (event: StartEvent | AbortEvent): void => console.log(event.xhr);

const completeListener = (event: CompleteEvent): void => {
    if (event.error) {
        console.error(event.error);
    }
};

const successListener: NajaEventListener<SuccessEvent<{ message: string }>> = event =>
    console.log(event.response.message);

naja.registerExtension(TestExtension, 'optionalArg');

naja.historyHandler.uiCache = false;
naja.formsHandler.netteForms = {};
naja.formsHandler.initForms(document.body);
naja.formsHandler.processForm(new Event('submit'));
naja.uiHandler.allowedOrigins.push('http://localhost');

naja.snippetHandler.addEventListener('beforeUpdate', event => console.log(event.snippet, event.content));
naja.snippetHandler.addEventListener('afterUpdate', event => console.log(event.snippet, event.content));

naja.uiHandler.bindUI(document.createElement('div'));
naja.uiHandler.clickElement(document.createElement('button'));
naja.uiHandler.handleUI(new Event('change'));
naja.uiHandler.submitForm(document.createElement('form'));

naja.addEventListener('init', event => console.log(event.defaultOptions));
naja.addEventListener('interaction', event => console.log(event.element, event.originalEvent, event.options));
naja.addEventListener('before', event => console.log(event.data, event.method, event.url, event.xhr));
naja.addEventListener('start', genericListener);
naja.addEventListener('abort', genericListener);
naja.addEventListener('success', successListener);
naja.addEventListener('error', event => console.error(event.error));
naja.addEventListener('complete', completeListener);

naja.removeEventListener('start', genericListener);
naja.snippetHandler.removeEventListener('beforeUpdate', null);

type TestEvent = CustomEvent<{ customProperty: string }>;
interface OtherEvent extends Event {
    otherProperty: number;
    type: 'otherEvent';
}

const handler = (event: TestEvent): void => console.log(typeof event.detail.customProperty === 'string');

document.addEventListener('DOMContentLoaded', () => {
    naja.initialize();
    naja.initialize({ history: false, selector: '[data-ajax]', customOption: 1 });
    naja.fireEvent('customEvent', { extra: 1 });
    naja.fireEvent('anotherEvent');
    naja.addEventListener<TestEvent>('testEvent', handler);
    naja.addEventListener('someEvent', event => console.log(event.target));
    naja.removeEventListener('testEvent', handler);
    naja.removeEventListener('someEvent', event => {});
    naja.addEventListener<OtherEvent>('otherEvent', event => console.log(event.otherProperty === 1));
});
