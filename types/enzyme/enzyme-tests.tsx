import * as React from "react";
import {
    shallow,
    mount,
    render,
    ShallowWrapper,
    ReactWrapper,
    configure,
    EnzymeAdapter,
    ShallowRendererProps,
} from "enzyme";
import { Component, ReactElement, HTMLAttributes, ComponentClass, StatelessComponent } from "react";

// Help classes/interfaces
interface MyComponentProps {
    stringProp?: string;
    numberProp?: number;
}

interface StatelessProps {
    stateless: string;
}

interface MyComponentState {
    stateProperty: string;
}

class MyComponent extends Component<MyComponentProps, MyComponentState> {
    setState(...args: any[]) {
        console.log(args);
    }
}

const MyStatelessComponent = (props: StatelessProps) => <span />;

// Enzyme.configure
function configureTest() {
    const configureAdapter: { adapter: EnzymeAdapter } = { adapter: {} };
    configure(configureAdapter);

    const configureAdapterAndDisableLifecycle: typeof configureAdapter & Pick<ShallowRendererProps, "disableLifecycleMethods"> = {
        adapter: {},
        disableLifecycleMethods: true,
    };
    configure(configureAdapterAndDisableLifecycle);
}

// ShallowWrapper
function ShallowWrapperTest() {
    let shallowWrapper: ShallowWrapper<MyComponentProps, MyComponentState> =
        shallow<MyComponentProps, MyComponentState>(<MyComponent stringProp="value" />);

    let reactElement: ReactElement<any>;
    let reactElements: Array<ReactElement<any>>;
    let domElement: Element;
    let boolVal: boolean;
    let stringVal: string;
    let numOrStringVal: number | string;
    let elementWrapper: ShallowWrapper<HTMLAttributes<{}>>;
    let statelessWrapper: ShallowWrapper<StatelessProps, never>;

    function test_props_state_inferring() {
        let wrapper: ShallowWrapper<MyComponentProps, MyComponentState>;
        wrapper = shallow(<MyComponent stringProp="value" />);
        wrapper.state().stateProperty;
        wrapper.props().stringProp.toUpperCase();
    }

    function test_shallow_options() {
        shallow(<MyComponent stringProp="1" />, {
            context: {
                test: "a",
            },
            lifecycleExperimental: true,
            disableLifecycleMethods: true
        });
    }

    function test_find() {
        shallowWrapper = shallowWrapper.find(MyComponent);
        statelessWrapper = shallowWrapper.find(MyStatelessComponent);
        shallowWrapper = shallowWrapper.find({ prop: 'value' });
        elementWrapper = shallowWrapper.find('.selector');
    }

    function test_findWhere() {
        shallowWrapper =
            shallowWrapper.findWhere((aShallowWrapper: ShallowWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_filter() {
        shallowWrapper = shallowWrapper.filter(MyComponent);
        statelessWrapper = statelessWrapper.filter(MyStatelessComponent);
        shallowWrapper = shallowWrapper.filter({ numberProp: 12 });
        shallowWrapper = shallowWrapper.filter('.selector');
    }

    function test_filterWhere() {
        shallowWrapper =
            shallowWrapper.filterWhere(wrapper => {
                wrapper.props().stringProp;
                return true;
            });
    }

    function test_contains() {
        boolVal = shallowWrapper.contains(<div className="foo bar" />);
    }

    function test_containsMatchingElement() {
        boolVal = shallowWrapper.contains(<div className="foo bar" />);
    }

    function test_containsAllMatchingElements() {
        boolVal = shallowWrapper.containsAllMatchingElements([<div className="foo bar" />]);
    }

    function test_containsAnyMatchingElement() {
        boolVal = shallowWrapper.containsAnyMatchingElements([<div className="foo bar" />]);
    }

    function test_dive() {
        interface TmpProps {
            foo: any;
        }

        interface TmpState {
            bar: any;
        }

        const diveWrapper: ShallowWrapper<TmpProps, TmpState> = shallowWrapper.dive<TmpProps, TmpState>({ context: { foobar: 'barfoo' } });
    }

    function test_hostNodes() {
	    shallowWrapper.hostNodes();
    }

    function test_equals() {
        boolVal = shallowWrapper.equals(<div className="foo bar" />);
    }

    function test_matchesElement() {
        boolVal = shallowWrapper.matchesElement(<div className="foo bar" />);
    }

    function test_hasClass() {
        boolVal = shallowWrapper.find('.my-button').hasClass('disabled');
    }

    function test_is() {
        boolVal = shallowWrapper.is('.some-class');
    }

    function test_isEmpty() {
        boolVal = shallowWrapper.isEmpty();
    }

    function test_exists() {
        boolVal = shallowWrapper.exists();
    }

    function test_not() {
        elementWrapper = shallowWrapper.find('.foo').not('.bar');
    }

    function test_children() {
        shallowWrapper = shallowWrapper.children();
        shallowWrapper = shallowWrapper.children(MyComponent);
        statelessWrapper = shallowWrapper.children(MyStatelessComponent);
        shallowWrapper = shallowWrapper.children({ prop: 'value' });
        elementWrapper = shallowWrapper.children('.selector');
    }

    function test_childAt() {
        const childWrapper: ShallowWrapper<any, any> = shallowWrapper.childAt(0);

        interface TmpType1 {
            foo: any;
        }

        interface TmpType2 {
            bar: any;
        }

        const childWrapper2: ShallowWrapper<TmpType1, TmpType2> = shallowWrapper.childAt<TmpType1, TmpType2>(0);
    }

    function test_parents() {
        shallowWrapper = shallowWrapper.parents();
        shallowWrapper = shallowWrapper.parents(MyComponent);
        statelessWrapper = shallowWrapper.parents(MyStatelessComponent);
        shallowWrapper = shallowWrapper.parents({ prop: 'myprop' });
        elementWrapper = shallowWrapper.parents('.selector');
    }

    function test_parent() {
        shallowWrapper = shallowWrapper.parent();
    }

    function test_closest() {
        shallowWrapper = shallowWrapper.closest(MyComponent);
        statelessWrapper = shallowWrapper.closest(MyStatelessComponent);
        shallowWrapper = shallowWrapper.closest({ prop: 'myprop' });
        elementWrapper = shallowWrapper.closest('.selector');
    }

    function test_shallow() {
        shallowWrapper = shallowWrapper.shallow();
    }

    function test_unmount() {
        shallowWrapper = shallowWrapper.unmount();
    }

    function test_text() {
        stringVal = shallowWrapper.text();
    }

    function test_html() {
        stringVal = shallowWrapper.html();
    }

    function test_get() {
        reactElement = shallowWrapper.get(1);
    }

    function test_getNode() {
        reactElement = shallowWrapper.getNode();
    }

    function test_getNodes() {
        reactElements = shallowWrapper.getNodes();
    }

    function test_getElement() {
        reactElement = shallowWrapper.getElement();
    }

    function test_getElements() {
        reactElements = shallowWrapper.getElements();
    }

    function test_getDOMNode() {
        domElement = shallowWrapper.getDOMNode();
    }

    function test_at() {
        shallowWrapper = shallowWrapper.at(1);
    }

    function test_first() {
        shallowWrapper = shallowWrapper.first();
    }

    function test_last() {
        shallowWrapper = shallowWrapper.last();
    }

    function test_slice() {
        shallowWrapper = shallowWrapper.slice(1);
        shallowWrapper = shallowWrapper.slice(1, 3);
    }

    function test_tap() {
        shallowWrapper.tap((intercepter) => { });
    }

    function test_state() {
        const state: MyComponentState = shallowWrapper.state();
        const prop: string = shallowWrapper.state('stateProperty');
        const prop2: number = shallowWrapper.state<number>('key');
        const prop3 = shallowWrapper.state('key');
    }

    function test_context() {
        shallowWrapper.context();
        shallowWrapper.context('key');
        const tmp: string = shallowWrapper.context<string>('key');
    }

    function test_props() {
        const props: MyComponentProps = shallowWrapper.props();
        const props2: MyComponentProps = shallowWrapper.find(MyComponent).props();
        const props3: StatelessProps = shallowWrapper.find(MyStatelessComponent).props();
        const props4: HTMLAttributes<any> = shallowWrapper.find('.selector').props();
    }

    function test_prop() {
        const tmp: number = shallowWrapper.prop('numberProp');
        const tmp2: string = shallowWrapper.prop<string>('key');
        const tmp3 = shallowWrapper.prop('key');
    }

    function test_key() {
        stringVal = shallowWrapper.key();
    }

    function test_simulate(...args: any[]) {
        shallowWrapper.simulate('click');
        shallowWrapper.simulate('click', args);
    }

    function test_setState() {
        shallowWrapper = shallowWrapper.setState({ stateProperty: 'state' }, () => console.log('state updated'));
    }

    function test_setProps() {
        shallowWrapper = shallowWrapper.setProps({ stringProp: 'foo' });
    }

    function test_setContext() {
        shallowWrapper = shallowWrapper.setContext({ name: 'baz' });
    }

    function test_instance() {
        const myComponent: MyComponent = shallowWrapper.instance();
    }

    function test_update() {
        shallowWrapper = shallowWrapper.update();
    }

    function test_debug() {
        stringVal = shallowWrapper.debug();
    }

    function test_type() {
        const type: string | StatelessComponent<MyComponentProps> | ComponentClass<MyComponentProps> = shallowWrapper.type();
    }

    function test_name() {
        stringVal = shallowWrapper.name();
    }

    function test_forEach() {
        shallowWrapper =
            shallowWrapper.forEach(wrapper => wrapper.shallow().props().stringProp);
    }

    function test_map() {
        const arrayNumbers: number[] =
            shallowWrapper.map(wrapper => wrapper.props().numberProp);
    }

    function test_reduce() {
        const total: number =
            shallowWrapper.reduce(
                (amount: number, n: ShallowWrapper<MyComponentProps, MyComponentState>) => amount + n.props().numberProp
            );
    }

    function test_reduceRight() {
        const total: number =
            shallowWrapper.reduceRight<number>(
                (amount: number, n: ShallowWrapper<MyComponentProps, MyComponentState>) => amount + n.prop('numberProp')
            );
    }

    function test_some() {
        boolVal = shallowWrapper.some(MyComponent);
        boolVal = shallowWrapper.some(MyStatelessComponent);
        boolVal = shallowWrapper.some({ prop: 'myprop' });
        boolVal = shallowWrapper.some('.selector');
    }

    function test_someWhere() {
        boolVal = shallowWrapper.someWhere((aShallowWrapper: ShallowWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_every() {
        boolVal = shallowWrapper.every(MyComponent);
        boolVal = shallowWrapper.every(MyStatelessComponent);
        boolVal = shallowWrapper.every({ prop: 'myprop' });
        boolVal = shallowWrapper.every('.selector');
    }

    function test_everyWhere() {
        boolVal = shallowWrapper.everyWhere((aShallowWrapper: ShallowWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_isEmptyRender() {
        boolVal = shallowWrapper.isEmptyRender();
    }

    function test_svg() {
        numOrStringVal = shallowWrapper.find('svg').props().strokeWidth;
    }

    function test_constructor() {
        let anyWrapper: ShallowWrapper;
        anyWrapper = new ShallowWrapper(<MyComponent />);
        anyWrapper = new ShallowWrapper<MyComponentProps>(<MyComponent />);
        shallowWrapper = new ShallowWrapper<MyComponentProps, MyComponentState>(<MyComponent />);
        shallowWrapper = new ShallowWrapper<MyComponentProps, MyComponentState>([<MyComponent />, <MyComponent />]);
        shallowWrapper = new ShallowWrapper<MyComponentProps, MyComponentState>(<MyComponent />, shallowWrapper);
        shallowWrapper = new ShallowWrapper<MyComponentProps, MyComponentState>(<MyComponent />, null, { lifecycleExperimental: true });
        shallowWrapper = new ShallowWrapper<MyComponentProps, MyComponentState>(<MyComponent />, shallowWrapper, { lifecycleExperimental: true });
    }
}

// ReactWrapper
function ReactWrapperTest() {
    let reactWrapper: ReactWrapper<MyComponentProps, MyComponentState> =
        mount<MyComponentProps, MyComponentState>(<MyComponent stringProp="value" />);

    let reactElement: ReactElement<any>;
    let reactElements: Array<ReactElement<any>>;
    let domElement: Element;
    let boolVal: boolean;
    let stringVal: string;
    let elementWrapper: ReactWrapper<HTMLAttributes<{}>>;
    let statelessWrapper: ReactWrapper<StatelessProps, never>;

    function test_prop_state_inferring() {
        let wrapper: ReactWrapper<MyComponentProps, MyComponentState>;
        wrapper = mount(<MyComponent stringProp="value" />);
        wrapper.state().stateProperty;
        wrapper.props().stringProp.toUpperCase();
    }

    function test_unmount() {
        reactWrapper = reactWrapper.unmount();
    }

    function test_mount() {
        reactWrapper = reactWrapper.mount();

        mount(<MyComponent stringProp='1' />, {
            attachTo: document.getElementById('test'),
            context: {
                a: "b"
            }
        });
    }

    function test_ref() {
        reactWrapper = reactWrapper.ref('refName');

        interface TmpType1 {
            foo: string;
        }

        interface TmpType2 {
            bar: string;
        }

        const tmp: ReactWrapper<TmpType1, TmpType2> = reactWrapper.ref<TmpType1, TmpType2>('refName');
    }

    function test_detach() {
        reactWrapper.detach();
    }

    function test_hostNodes() {
        reactWrapper.hostNodes();
    }

    function test_find() {
        elementWrapper = reactWrapper.find('.selector');
        reactWrapper = reactWrapper.find(MyComponent);
        statelessWrapper = reactWrapper.find(MyStatelessComponent);
        reactWrapper = reactWrapper.find({ prop: 'myprop' });
    }

    function test_findWhere() {
        reactWrapper =
            reactWrapper.findWhere((aReactWrapper: ReactWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_filter() {
        reactWrapper = reactWrapper.filter(MyComponent);
        statelessWrapper = statelessWrapper.filter(MyStatelessComponent);
        reactWrapper = reactWrapper.filter({ numberProp: 12 });
        reactWrapper = reactWrapper.filter('.selector');
    }

    function test_filterWhere() {
        reactWrapper =
            reactWrapper.filterWhere(wrapper => {
                wrapper.props().stringProp;
                return true;
            });
    }

    function test_contains() {
        boolVal = reactWrapper.contains(<div className="foo bar" />);
    }

    function test_containsMatchingElement() {
        boolVal = reactWrapper.contains(<div className="foo bar" />);
    }

    function test_containsAllMatchingElements() {
        boolVal = reactWrapper.containsAllMatchingElements([<div className="foo bar" />]);
    }

    function test_containsAnyMatchingElement() {
        boolVal = reactWrapper.containsAnyMatchingElements([<div className="foo bar" />]);
    }

    function test_equals() {
        boolVal = reactWrapper.equals(<div className="foo bar" />);
    }

    function test_matchesElement() {
        boolVal = reactWrapper.matchesElement(<div className="foo bar" />);
    }

    function test_hasClass() {
        boolVal = reactWrapper.find('.my-button').hasClass('disabled');
    }

    function test_is() {
        boolVal = reactWrapper.is('.some-class');
    }

    function test_isEmpty() {
        boolVal = reactWrapper.isEmpty();
    }

    function test_not() {
        elementWrapper = reactWrapper.find('.foo').not('.bar');
    }

    function test_children() {
        reactWrapper = reactWrapper.children();
        reactWrapper = reactWrapper.children(MyComponent);
        statelessWrapper = reactWrapper.children(MyStatelessComponent);
        reactWrapper = reactWrapper.children({ prop: 'myprop' });
        elementWrapper = reactWrapper.children('.selector');
    }

    function test_childAt() {
        const childWrapper: ReactWrapper<any, any> = reactWrapper.childAt(0);

        interface TmpType1 {
            foo: any;
        }

        interface TmpType2 {
            bar: any;
        }

        const childWrapper2: ReactWrapper<TmpType1, TmpType2> = reactWrapper.childAt<TmpType1, TmpType2>(0);
    }

    function test_parents() {
        reactWrapper = reactWrapper.parents();
        reactWrapper = reactWrapper.parents(MyComponent);
        statelessWrapper = reactWrapper.parents(MyStatelessComponent);
        reactWrapper = reactWrapper.parents({ prop: 'myprop' });
        elementWrapper = reactWrapper.parents('.selector');
    }

    function test_parent() {
        reactWrapper = reactWrapper.parent();
    }

    function test_closest() {
        reactWrapper = reactWrapper.closest(MyComponent);
        statelessWrapper = reactWrapper.closest(MyStatelessComponent);
        reactWrapper = reactWrapper.closest({ prop: 'myprop' });
        elementWrapper = reactWrapper.closest('.selector');
    }

    function test_text() {
        stringVal = reactWrapper.text();
    }

    function test_html() {
        stringVal = reactWrapper.html();
    }

    function test_get() {
        reactElement = reactWrapper.get(1);
    }

    function test_getNode() {
        reactElement = reactWrapper.getNode();
    }

    function test_getNodes() {
        reactElements = reactWrapper.getNodes();
    }

    function test_getElement() {
        reactElement = reactWrapper.getElement();
    }

    function test_getElements() {
        reactElements = reactWrapper.getElements();
    }

    function test_getDOMNode() {
        domElement = reactWrapper.getDOMNode();
    }

    function test_at() {
        reactWrapper = reactWrapper.at(1);
    }

    function test_first() {
        reactWrapper = reactWrapper.first();
    }

    function test_last() {
        reactWrapper = reactWrapper.last();
    }

    function test_slice() {
        reactWrapper = reactWrapper.slice(1);
        reactWrapper = reactWrapper.slice(1, 3);
    }

    function test_tap() {
        reactWrapper.tap((intercepter) => { });
    }

    function test_state() {
        const state: MyComponentState = reactWrapper.state();
        const prop: string = reactWrapper.state('stateProperty');
        const prop2: number = reactWrapper.state<number>('key');
        const prop3 = reactWrapper.state('key');
    }

    function test_context() {
        reactWrapper.context();
        reactWrapper.context('key');
        const tmp: string = reactWrapper.context<string>('key');
    }

    function test_props() {
        const props: MyComponentProps = reactWrapper.props();
        const props2: MyComponentProps = reactWrapper.find(MyComponent).props();
        const props3: StatelessProps = reactWrapper.find(MyStatelessComponent).props();
        const props4: HTMLAttributes<any> = reactWrapper.find('.selector').props();
    }

    function test_prop() {
        const tmp: number = reactWrapper.prop('numberProp');
        const tmp2: string = reactWrapper.prop<string>('key');
        const tmp3 = reactWrapper.prop('key');
    }

    function test_key() {
        stringVal = reactWrapper.key();
    }

    function test_simulate(...args: any[]) {
        reactWrapper.simulate('click');
        reactWrapper.simulate('click', args);
    }

    function test_setState() {
        reactWrapper = reactWrapper.setState({ stateProperty: 'state' });
    }

    function test_setProps() {
        reactWrapper = reactWrapper.setProps({ stringProp: 'foo' }, () => {});
    }

    function test_setContext() {
        reactWrapper = reactWrapper.setContext({ name: 'baz' });
    }

    function test_instance() {
        const myComponent: MyComponent = reactWrapper.instance();
    }

    function test_update() {
        reactWrapper = reactWrapper.update();
    }

    function test_debug() {
        stringVal = reactWrapper.debug();
    }

    function test_type() {
        const type: string | StatelessComponent<MyComponentProps> | ComponentClass<MyComponentProps> = reactWrapper.type();
    }

    function test_name() {
        stringVal = reactWrapper.name();
    }

    function test_forEach() {
        reactWrapper =
            reactWrapper.forEach(wrapper => wrapper.props().stringProp);
    }

    function test_map() {
        const arrayNumbers: number[] =
            reactWrapper.map(wrapper => wrapper.props().numberProp);
    }

    function test_reduce() {
        const total: number =
            reactWrapper.reduce<number>(
                (amount: number, n: ReactWrapper<MyComponentProps, MyComponentState>) => amount + n.prop('numberProp')
            );
    }

    function test_reduceRight() {
        const total: number =
            reactWrapper.reduceRight<number>(
                (amount: number, n: ReactWrapper<MyComponentProps, MyComponentState>) => amount + n.prop('numberProp')
            );
    }

    function test_some() {
        boolVal = reactWrapper.some(MyComponent);
        boolVal = reactWrapper.some(MyStatelessComponent);
        boolVal = reactWrapper.some({ prop: 'myprop' });
        boolVal = reactWrapper.some('.selector');
    }

    function test_someWhere() {
        boolVal = reactWrapper.someWhere((aReactWrapper: ReactWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_every() {
        boolVal = reactWrapper.every(MyComponent);
        boolVal = reactWrapper.every(MyStatelessComponent);
        boolVal = reactWrapper.every({ prop: 'myprop' });
        boolVal = reactWrapper.every('.selector');
    }

    function test_everyWhere() {
        boolVal = reactWrapper.everyWhere((aReactWrapper: ReactWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_isEmptyRender() {
        boolVal = reactWrapper.isEmptyRender();
    }

    function test_constructor() {
        let anyWrapper: ReactWrapper;
        anyWrapper = new ReactWrapper(<MyComponent />);
        anyWrapper = new ReactWrapper<MyComponentProps>(<MyComponent />);
        reactWrapper = new ReactWrapper<MyComponentProps, MyComponentState>(<MyComponent />);
        reactWrapper = new ReactWrapper<MyComponentProps, MyComponentState>([<MyComponent />, <MyComponent />]);
        reactWrapper = new ReactWrapper<MyComponentProps, MyComponentState>(<MyComponent />, reactWrapper);
        reactWrapper = new ReactWrapper<MyComponentProps, MyComponentState>(<MyComponent />, null, { attachTo: document.createElement('div') });
        reactWrapper = new ReactWrapper<MyComponentProps, MyComponentState>(<MyComponent />, reactWrapper, { attachTo: document.createElement('div') });
    }
}

// CheerioWrapper
function CheerioWrapperTest() {
    const wrapper: Cheerio =
        shallow(<div />).render() ||
        mount(<div />).render();

    wrapper.toggleClass('className');
}
