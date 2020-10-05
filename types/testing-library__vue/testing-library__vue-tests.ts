import * as lib from '@testing-library/vue';
import Vue from 'vue';

declare const elem: HTMLElement;
declare const input: HTMLInputElement;
declare const select: HTMLSelectElement;
declare const option: HTMLOptionElement;
declare const textarea: HTMLTextAreaElement;

const SomeComponent = Vue.extend({
    name: 'SomeComponent',
    props: {
        foo: Number,
        bar: String,
    },
});

lib.render(Vue);
lib.render(SomeComponent);
const component = lib.render(SomeComponent, {
    // options for new Vue()
    name: 'SomeComponent',
    methods: {
        glorb() { return 42; }
    },
    // options for vue-test-utils mount()
    slots: {
        quux: "<p>Baz</p>",
    },
    mocks: {
        isThisFake() { return true; }
    },
    // options for vue-testing-library render()
    container: elem,
    baseElement: elem,
    props: {
        foo: 9,
        bar: "x",
    },
    store: {
        state: {
            foos: [4, 5],
            bars: ["a", "b"],
        },
        getters: {
            fooCount() { return this.foos.length; },
        },
    },
    routes: [
        {path: '/', name: 'home', component: SomeComponent},
        {path: '/about', name: 'about', component: () => Promise.resolve(SomeComponent)},
    ],
});

const ExamplePlugin: Vue.PluginFunction<never> = () => {};
const componentWithConfigCallback = lib.render(SomeComponent, {}, (localVue, store, router) => {
    localVue.use(ExamplePlugin);
    store.replaceState({foo: 'bar'});
    router.onError((error) => console.log(error.message));
});

component.container; // $ExpectType HTMLElement
component.baseElement; // $ExpectType HTMLElement
component.debug(); // $ExpectType void
component.debug(elem); // $ExpectType void
component.debug([elem, input, select]); // $ExpectType void
component.unmount(); // $ExpectType void
component.isUnmounted(); // $ExpectType boolean
component.html(); // $ExpectType string
component.emitted(); // $ExpectType { [name: string]: any[][]; }
component.updateProps({foo: "bar"}); // $ExpectType Promise<void>

// Has bound queries
component.getByLabelText(/some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x, selector: '*'}); // $ExpectType HTMLElement
component.getByPlaceholderText(/some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x}); // $ExpectType HTMLElement
component.getByAltText(/some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x}); // $ExpectType HTMLElement
component.getByTitle(/some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x}); // $ExpectType HTMLElement
component.getByDisplayValue(/some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x}); // $ExpectType HTMLElement
component.getByRole(/some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x}); // $ExpectType HTMLElement
component.getByTestId(/some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x}); // $ExpectType HTMLElement
component.getByText("foo"); // $ExpectType HTMLElement
component.getByText(/some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x, selector: '*'}); // $ExpectType HTMLElement
component.getAllByText("foo"); // $ExpectType HTMLElement[]
component.getAllByText(/some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x, selector: '*'}); // $ExpectType HTMLElement[]
component.queryByText("foo"); // $ExpectType HTMLElement | null
component.queryByText(/some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x, selector: '*'}); // $ExpectType HTMLElement | null
component.queryAllByText("foo"); // $ExpectType HTMLElement[]
component.queryAllByText(/some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x, selector: '*'}); // $ExpectType HTMLElement[]
component.findByText("foo"); // $ExpectType Promise<HTMLElement>
component.findByText(/some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x, selector: '*'}); // $ExpectType Promise<HTMLElement>
component.findAllByText("foo"); // $ExpectType Promise<HTMLElement[]>
component.findAllByText(/some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x, selector: '*'}); // $ExpectType Promise<HTMLElement[]>

lib.cleanup(); // $ExpectType void

// Reexports queries from dom-testing-library
lib.getByLabelText(elem, /some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x, selector: '*'}); // $ExpectType HTMLElement
lib.getByPlaceholderText(elem, /some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x}); // $ExpectType HTMLElement
lib.getByAltText(elem, /some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x}); // $ExpectType HTMLElement
lib.getByTitle(elem, /some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x}); // $ExpectType HTMLElement
lib.getByDisplayValue(elem, /some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x}); // $ExpectType HTMLElement
lib.getByRole(elem, /some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x}); // $ExpectType HTMLElement
lib.getByTestId(elem, /some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x}); // $ExpectType HTMLElement
lib.getByText(elem, "foo"); // $ExpectType HTMLElement
lib.getByText(elem, /some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x, selector: '*'}); // $ExpectType HTMLElement
lib.getAllByText(elem, "foo"); // $ExpectType HTMLElement[]
lib.getAllByText(elem, /some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x, selector: '*'}); // $ExpectType HTMLElement[]
lib.queryByText(elem, "foo"); // $ExpectType HTMLElement | null
lib.queryByText(elem, /some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x, selector: '*'}); // $ExpectType HTMLElement | null
lib.queryAllByText(elem, "foo"); // $ExpectType HTMLElement[]
lib.queryAllByText(elem, /some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x, selector: '*'}); // $ExpectType HTMLElement[]
lib.findByText(elem, "foo"); // $ExpectType Promise<HTMLElement>
lib.findByText(elem, /some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x, selector: '*'}); // $ExpectType Promise<HTMLElement>
lib.findAllByText(elem, "foo"); // $ExpectType Promise<HTMLElement[]>
lib.findAllByText(elem, /some text/, {exact: true, trim: false, collapseWhitespace: true, normalizer: x => x, selector: '*'}); // $ExpectType Promise<HTMLElement[]>

// Reexports createEvent from dom-testing-library
lib.createEvent.click(elem); // $ExpectType Event
lib.createEvent.click(elem, {foo: "bar"}); // $ExpectType Event
lib.createEvent.keyDown(elem); // $ExpectType Event
lib.createEvent.mouseEnter(elem); // $ExpectType Event

// Changes fireEvent to be asynchronous
lib.fireEvent(elem, new Event('change')); // $ExpectType Promise<void>
lib.fireEvent.click(elem); // $ExpectType Promise<void>
lib.fireEvent.click(elem, {foo: "bar"}); // $ExpectType Promise<void>
lib.fireEvent.keyDown(elem); // $ExpectType Promise<void>
lib.fireEvent.mouseEnter(elem); // $ExpectType Promise<void>

// Adds update() function
lib.fireEvent.update(input, "foo"); // $ExpectType Promise<void>
lib.fireEvent.update(select, "bar"); // $ExpectType Promise<void>
lib.fireEvent.update(textarea, "some\ntext"); // $ExpectType Promise<void>
lib.fireEvent.update(option); // $ExpectType Promise<void>

// Adds touch() function
lib.fireEvent.touch(elem); // $ExpectType Promise<void>

// Reexports async functions from dom-testing-library
lib.wait(); // $ExpectType Promise<void>
lib.wait(() => { throw new Error("nope"); }, {timeout: 3000, interval: 100});
lib.waitForDomChange({container: select, timeout: 3000, mutationObserverOptions: {subtree: false}});
lib.waitForElement(() => input); // $ExpectType Promise<HTMLInputElement>
lib.waitForElement(() => option, {container: select, timeout: 3000, mutationObserverOptions: {subtree: false}}); // $ExpectType Promise<HTMLOptionElement>
lib.waitForElementToBeRemoved(() => input); // $ExpectType Promise<void>
lib.waitForElementToBeRemoved(() => option, {container: select, timeout: 3000, mutationObserverOptions: {subtree: false}}); // $ExpectType Promise<void>

// Reexports utilities from dom-testing-library
lib.buildQueries((el: HTMLElement) => [el], (_: HTMLElement) => "something", (_: HTMLElement) => "error");
lib.within(elem);
lib.getQueriesForElement(elem);
lib.getNodeText(elem); // $ExpectType string
lib.getRoles(elem); // $ExpectType { [index: string]: HTMLElement[]; }
lib.prettyDOM(elem); // $ExpectType string | false
lib.logRoles(elem); // $ExpectType string
