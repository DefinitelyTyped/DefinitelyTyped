import * as React from "react";
import {
    shallow,
    mount,
    render,
    CommonWrapper,
    ShallowWrapper,
    ReactWrapper,
    configure,
    EnzymeAdapter,
    ShallowRendererProps,
    ComponentClass as EnzymeComponentClass
} from "enzyme";
import { Component, ReactElement, ReactNode, HTMLAttributes, ComponentClass, StatelessComponent } from "react";

// Help classes/interfaces
interface MyComponentProps {
    stringProp: string;
    numberProp: number;
}

interface AnotherComponentProps {
    anotherStringProp?: string;
    anotherNumberProp?: number;
}

interface StatelessProps {
    stateless: string;
}

interface AnotherStatelessProps {
    anotherStateless: string;
}

interface MyComponentState {
    stateProperty: string;
}

interface MyRenderPropProps {
    children: (params: string) => ReactNode;
}

interface MyProviderProps {
    children: ReactElement | ReactElement[];
    value: string;
}

function toComponentType<T>(Component: ComponentClass<T> | StatelessComponent<T>): ComponentClass<T> | StatelessComponent<T> {
  return Component;
}

class MyComponent extends Component<MyComponentProps, MyComponentState> {
    handleEcho(value: string) {
        return value;
    }
    setState(...args: any[]) {
        console.log(args);
    }
}
class MyComponentPropsOnly extends Component<MyComponentProps> {
    handleEcho(value: string) {
        return value;
    }
}

class AnotherComponent extends Component<AnotherComponentProps> {
    setState(...args: any[]) {
        console.log(args);
    }

    handleAnotherEcho(value: string) {
      return value;
    }
}

interface OptionalFunctionProp {
    functionProp?(): void;
    requiredFunctionProp(): void;
    singleArg(arg: any): void;
    multipleArg(arg1: number, arg2: string, arg3: boolean): void;
    multipleReturn(): void | number | boolean | undefined | null | string;
    nonFun?: number;
}

class MyRenderPropComponent extends Component<MyRenderPropProps> {}

const MyStatelessComponent = (props: StatelessProps) => <span />;

const AnotherStatelessComponent = (props: AnotherStatelessProps) => <span />;

const ComponentType = toComponentType(MyComponent);

const MyFunctionPropComponent = (props: OptionalFunctionProp) => <span />;

const CommonWrapperHelper = {
    test_invoke: (wrapper: CommonWrapper<OptionalFunctionProp, any, any>) => {
        // should accept the names of props that are functions
        wrapper.invoke('functionProp'); // $ExpectType (() => void) | undefined
        wrapper.invoke('requiredFunctionProp'); // $ExpectType () => void
        wrapper.invoke('singleArg'); // $ExpectType (arg: any) => void
        wrapper.invoke('multipleArg'); // $ExpectType (arg1: number, arg2: string, arg3: boolean) => void
        wrapper.invoke('multipleReturn'); // $ExpectType () => string | number | boolean | void | null | undefined
        wrapper.invoke(undefined); // $ExpectError
        wrapper.invoke(null); // $ExpectError
        wrapper.invoke('nonFun'); // $ExpectError
    },
};

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
        shallow<MyComponentProps, MyComponentState>(<MyComponent stringProp="value" numberProp={1} />);

    let reactElement: ReactElement;
    let reactElements: ReactElement[];
    let domElement: Element;
    let buttonElement: HTMLButtonElement;
    let boolVal: boolean;
    let stringVal: string;
    let numOrStringVal: number | string | undefined;
    let elementWrapper: ShallowWrapper<HTMLAttributes<{}>>;
    let anotherStatelessWrapper: ShallowWrapper<AnotherStatelessProps, never>;
    let anotherComponentWrapper: ShallowWrapper<AnotherComponentProps, any>;

    // testStatePropsInstanceFn(shallow<MyComponent>(<MyComponent stringProp="value" numberProp={1}/>));
    function testStatePropsInstance() {
        const wrapper = shallow<MyComponent>(<MyComponent stringProp="value" numberProp={1}/>);

        const {
            numberProp, // $ExpectType number
            stringProp // $ExpectType string
        } = wrapper.props();
        const {
            stateProperty // $ExpectType string
        } = wrapper.state();
        const {
            handleEcho // $ExpectType (value: string) => string
        } = wrapper.instance();

        // $ExpectError
        wrapper.setState({stateProperty: 123});
        // $ExpectError
        wrapper.setState({statePropertyzasd: 'hello'});
        wrapper.setState({stateProperty: 'hello'});

        // $ExpectError
        wrapper.setProps({numberProp: '123'});
        // $ExpectError
        wrapper.setProps({numberPropzasd: 'hello'});
        wrapper.setProps({numberProp: 123});
    }

    function test_props_state_inferring() {
        let wrapper: ShallowWrapper<MyComponentProps, MyComponentState>;
        wrapper = shallow(<MyComponent stringProp="value" numberProp={1} />);
        wrapper.state().stateProperty;
        wrapper.props().stringProp.toUpperCase();
    }

    function test_shallow_options() {
        shallow(<MyComponent stringProp="1" numberProp={1} />, {
            context: {
                test: "a",
            },
            lifecycleExperimental: true,
            disableLifecycleMethods: true
        });
    }

    function test_find() {
        anotherComponentWrapper = shallowWrapper.find(AnotherComponent);
        anotherStatelessWrapper = shallowWrapper.find(AnotherStatelessComponent);
        shallowWrapper = shallowWrapper.find({ prop: 'value' });
        elementWrapper = shallowWrapper.find('.selector');
        // Since AnotherComponent does not have a constructor, it cannot match the
        // previous selector overload of ComponentClass { new(props?, contenxt? ) }
        const s1: EnzymeComponentClass<AnotherComponentProps> = AnotherComponent;
    }

    function test_invoke() {
        CommonWrapperHelper.test_invoke(shallow<OptionalFunctionProp>(
            <MyFunctionPropComponent
                requiredFunctionProp={() => {} }
                singleArg={() => {} }
                multipleArg={() => {} }
                multipleReturn={() => {} }
                nonFun={1}
            />));
    }

    function test_findWhere() {
        shallowWrapper =
            shallowWrapper.findWhere((aShallowWrapper: ShallowWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_filter() {
        anotherComponentWrapper = shallowWrapper.filter(AnotherComponent);
        anotherStatelessWrapper = shallowWrapper.filter(AnotherStatelessComponent);
        // NOTE: The following calls to filter do not narrow down the possible type of the result based
        //       on the type of the param, so the return type should not be different than the original
        //       "this". This is a special case for "filter" vs other methods like "find", because "filter"
        //       is guaranteed to return only a subset of the existing list of components/elements without
        //       finding/adding more.
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
        const diveWrapper2 = shallowWrapper.dive<MyComponent>({ context: { foobar: 'barfoo' } });
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
        anotherComponentWrapper = shallowWrapper.children(AnotherComponent);
        anotherStatelessWrapper = shallowWrapper.children(AnotherStatelessComponent);
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
        anotherComponentWrapper = shallowWrapper.parents(AnotherComponent);
        anotherStatelessWrapper = shallowWrapper.parents(AnotherStatelessComponent);
        shallowWrapper = shallowWrapper.parents({ prop: 'myprop' });
        elementWrapper = shallowWrapper.parents('.selector');
    }

    function test_parent() {
        shallowWrapper = shallowWrapper.parent();
    }

    function test_closest() {
        anotherComponentWrapper = shallowWrapper.closest(AnotherComponent);
        anotherStatelessWrapper = shallowWrapper.closest(AnotherStatelessComponent);
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
        buttonElement = shallowWrapper.getDOMNode<HTMLButtonElement>();
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
        const props2: AnotherComponentProps = shallowWrapper.find(AnotherComponent).props();
        const props3: AnotherStatelessProps = shallowWrapper.find(AnotherStatelessComponent).props();
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

    function test_simulateError(error: any) {
        shallowWrapper.simulateError(error);
    }

    function test_setState() {
        shallowWrapper = shallowWrapper.setState({ stateProperty: 'state' });
        shallowWrapper = shallowWrapper.setState({ stateProperty: 'state' }, () => console.log('state updated'));
    }

    function test_setProps() {
        shallowWrapper = shallowWrapper.setProps({ stringProp: 'foo' });
        shallowWrapper = shallowWrapper.setProps({ stringProp: 'foo' }, () => console.log('props update'));
    }

    function test_setContext() {
        shallowWrapper = shallowWrapper.setContext({ name: 'baz' });
    }

    function test_instance() {
        const myComponent = shallowWrapper.instance() as MyComponent;
        myComponent.handleEcho('it works');

        const wrapper = shallow<MyComponent>(<MyComponent stringProp="value" numberProp={1}/>);
        wrapper.instance().handleEcho('it works');

        const wrapperPropsOnly = shallow<MyComponentProps>(<MyComponent stringProp="value" numberProp={1}/>);
        wrapperPropsOnly.setProps({stringProp: 'new value'});
        // $ExpectError
        wrapperPropsOnly.instance().handleEcho;
    }

    function test_update() {
        shallowWrapper = shallowWrapper.update();
    }

    function test_debug() {
        stringVal = shallowWrapper.debug();
        stringVal = shallowWrapper.debug({ verbose: false });
        stringVal = shallowWrapper.debug({ ignoreProps: true });
        stringVal = shallowWrapper.debug({ ignoreProps: true, verbose: true });
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
        boolVal = shallowWrapper.some(AnotherComponent);
        boolVal = shallowWrapper.some(AnotherStatelessComponent);
        boolVal = shallowWrapper.some({ prop: 'myprop' });
        boolVal = shallowWrapper.some('.selector');
    }

    function test_someWhere() {
        boolVal = shallowWrapper.someWhere((aShallowWrapper: ShallowWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_every() {
        boolVal = shallowWrapper.every(AnotherComponent);
        boolVal = shallowWrapper.every(AnotherStatelessComponent);
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
        anyWrapper = new ShallowWrapper(<MyComponent stringProp="1" numberProp={1} />);
        shallowWrapper = new ShallowWrapper<MyComponentProps, MyComponentState>(<MyComponent stringProp="1" numberProp={1} />);
        shallowWrapper = new ShallowWrapper<MyComponentProps, MyComponentState>([<MyComponent stringProp="1" numberProp={1} />, <MyComponent stringProp="1" numberProp={1} />]);
        shallowWrapper = new ShallowWrapper<MyComponentProps, MyComponentState>(<MyComponent stringProp="1" numberProp={1} />, shallowWrapper);
        shallowWrapper = new ShallowWrapper<MyComponentProps, MyComponentState>(<MyComponent stringProp="1" numberProp={1} />, undefined, { lifecycleExperimental: true });
        shallowWrapper = new ShallowWrapper<MyComponentProps, MyComponentState>(<MyComponent stringProp="1" numberProp={1} />, shallowWrapper, { lifecycleExperimental: true });
    }

    function test_renderProp() {
        let shallowWrapper = new ShallowWrapper<MyRenderPropProps>(<MyRenderPropComponent children={(params) => <div className={params} />} />);
        shallowWrapper = shallowWrapper.renderProp('children')('test');
    }

    function test_getWrappingComponent() {
        const MyContext = React.createContext('test');
        function MyProvider(props: MyProviderProps) {
            const { children, value } = props;
            return (
                <MyContext.Provider value={value}>
                    {children}
                </MyContext.Provider>
              );
        }
        const shallowWrapper = shallow<MyRenderPropProps>(<MyRenderPropComponent children={(params) => <div className={params} />} />, {
            wrappingComponent: MyProvider,
        });
        const provider = shallowWrapper.getWrappingComponent();
        provider.setProps({ value: 'test new' });
    }
}

// ReactWrapper
function ReactWrapperTest() {
    let reactWrapper: ReactWrapper<MyComponentProps, MyComponentState> =
        mount<MyComponentProps, MyComponentState>(<MyComponent stringProp="value" numberProp={1} />);

    let reactElement: ReactElement;
    let reactElements: ReactElement[];
    let domElement: Element;
    let buttonElement: HTMLButtonElement;
    let boolVal: boolean;
    let stringVal: string;
    let elementWrapper: ReactWrapper<HTMLAttributes<{}>>;
    let anotherStatelessWrapper: ReactWrapper<AnotherStatelessProps, never>;
    let anotherComponentWrapper: ReactWrapper<AnotherComponentProps, any>;

    function testStatePropsInstance() {
        const wrapper = mount<MyComponent>(<MyComponent stringProp="value" numberProp={1}/>);

        const {
            numberProp, // $ExpectType number
            stringProp // $ExpectType string
        } = wrapper.props();
        const {
            stateProperty // $ExpectType string
        } = wrapper.state();
        const {
            handleEcho // $ExpectType (value: string) => string
        } = wrapper.instance();

        // $ExpectError
        wrapper.setState({stateProperty: 123});
        // $ExpectError
        wrapper.setState({statePropertyzasd: 'hello'});
        wrapper.setState({stateProperty: 'hello'});

        // $ExpectError
        wrapper.setProps({numberProp: '123'});
        // $ExpectError
        wrapper.setProps({numberPropzasd: 'hello'});
        wrapper.setProps({numberProp: 123});
    }

    function test_prop_state_inferring() {
        let wrapper: ReactWrapper<MyComponentProps, MyComponentState>;
        wrapper = mount(<MyComponent stringProp="value" numberProp={1} />);
        wrapper.state().stateProperty;
        wrapper.props().stringProp.toUpperCase();
    }

    function test_unmount() {
        reactWrapper = reactWrapper.unmount();
    }

    function test_mount() {
        reactWrapper = reactWrapper.mount();

        mount(<MyComponent stringProp='1' numberProp={1} />, {
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
        anotherComponentWrapper = reactWrapper.find(AnotherComponent);
        anotherStatelessWrapper = reactWrapper.find(AnotherStatelessComponent);
        reactWrapper = reactWrapper.find({ prop: 'myprop' });
    }

    function test_findWithType() {
      const anotherComponentTypedWrapper = reactWrapper.find<AnotherComponent>(AnotherComponent);
      anotherComponentTypedWrapper.instance().handleAnotherEcho('it works');
    }

    function test_findWhere() {
        reactWrapper =
            reactWrapper.findWhere((aReactWrapper: ReactWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_filter() {
        anotherComponentWrapper = reactWrapper.filter(AnotherComponent);
        anotherStatelessWrapper = reactWrapper.filter(AnotherStatelessComponent);
        // NOTE: The following calls to filter do not narrow down the possible type of the result based
        //       on the type of the param, so the return type should not be different than the original
        //       "this". This is a special case for "filter" vs other methods like "find", because "filter"
        //       is guaranteed to return only a subset of the existing list of components/elements without
        //       finding/adding more.
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

    function test_invoke() {
        CommonWrapperHelper.test_invoke(mount<OptionalFunctionProp>(
            <MyFunctionPropComponent
                requiredFunctionProp={() => {} }
                singleArg={() => {} }
                multipleArg={() => {} }
                multipleReturn={() => {} }
                nonFun={1}
            />));
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
        anotherComponentWrapper = reactWrapper.children(AnotherComponent);
        anotherStatelessWrapper = reactWrapper.children(AnotherStatelessComponent);
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
        anotherComponentWrapper = reactWrapper.parents(AnotherComponent);
        anotherStatelessWrapper = reactWrapper.parents(AnotherStatelessComponent);
        reactWrapper = reactWrapper.parents({ prop: 'myprop' });
        elementWrapper = reactWrapper.parents('.selector');
    }

    function test_parent() {
        reactWrapper = reactWrapper.parent();
    }

    function test_closest() {
        anotherComponentWrapper = reactWrapper.closest(AnotherComponent);
        anotherStatelessWrapper = reactWrapper.closest(AnotherStatelessComponent);
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
        buttonElement = reactWrapper.getDOMNode<HTMLButtonElement>();
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
        const props2: AnotherComponentProps = reactWrapper.find(AnotherComponent).props();
        const props3: AnotherStatelessProps = reactWrapper.find(AnotherStatelessComponent).props();
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
        reactWrapper = reactWrapper.setState({ stateProperty: 'state' }, () => console.log('state set'));
    }

    function test_setProps() {
        reactWrapper = reactWrapper.setProps({ stringProp: 'foo' });
        reactWrapper = reactWrapper.setProps({ stringProp: 'foo' }, () => console.log('props set'));
    }

    function test_setContext() {
        reactWrapper = reactWrapper.setContext({ name: 'baz' });
    }

    function test_instance() {
        const myComponent = reactWrapper.instance() as MyComponent;
        myComponent.handleEcho('it works');

        const wrapperPropsOnly = mount<MyComponentProps>(<MyComponent stringProp="value" numberProp={1}/>);
        wrapperPropsOnly.setProps({stringProp: 'new value'});
        // $ExpectError
        wrapperPropsOnly.instance().handleEcho;

        const wrapper = mount<MyComponent>(<MyComponent stringProp="value" numberProp={1}/>);
        wrapper.instance().handleEcho('it works');
    }

    function test_update() {
        reactWrapper = reactWrapper.update();
    }

    function test_debug() {
        stringVal = reactWrapper.debug();
        stringVal = reactWrapper.debug({ verbose: false });
        stringVal = reactWrapper.debug({ ignoreProps: true });
        stringVal = reactWrapper.debug({ ignoreProps: true, verbose: true });
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
        boolVal = reactWrapper.some(AnotherComponent);
        boolVal = reactWrapper.some(AnotherStatelessComponent);
        boolVal = reactWrapper.some({ prop: 'myprop' });
        boolVal = reactWrapper.some('.selector');
    }

    function test_someWhere() {
        boolVal = reactWrapper.someWhere((aReactWrapper: ReactWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_every() {
        boolVal = reactWrapper.every(AnotherComponent);
        boolVal = reactWrapper.every(AnotherStatelessComponent);
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
        anyWrapper = new ReactWrapper(<MyComponent stringProp="1" numberProp={1} />);
        reactWrapper = new ReactWrapper<MyComponentProps, MyComponentState>(<MyComponent stringProp="1" numberProp={1} />);
        reactWrapper = new ReactWrapper<MyComponentProps, MyComponentState>([<MyComponent stringProp="1" numberProp={1} />, <MyComponent stringProp="1" numberProp={1} />]);
        reactWrapper = new ReactWrapper<MyComponentProps, MyComponentState>(<MyComponent stringProp="1" numberProp={1} />, reactWrapper);
        reactWrapper = new ReactWrapper<MyComponentProps, MyComponentState>(<MyComponent stringProp="1" numberProp={1} />, undefined, { attachTo: document.createElement('div') });
        reactWrapper = new ReactWrapper<MyComponentProps, MyComponentState>(<MyComponent stringProp="1" numberProp={1} />, reactWrapper, { attachTo: document.createElement('div') });
    }

    function test_component_type() {
      const wrapper1 = shallow(<div><ComponentType stringProp={"S"} numberProp={1} /></div>);
      wrapper1.find<MyComponentProps>(ComponentType).props().stringProp; // $ExpectType string

      const wrapper2 = mount(<div><ComponentType stringProp={"S"} numberProp={1} /></div>);
      wrapper2.find<MyComponentProps>(ComponentType).props().stringProp; // $ExpectType string
    }

    function test_getWrappingComponent() {
        const MyContext = React.createContext('test');
        function MyProvider(props: MyProviderProps) {
            const { children, value } = props;
            return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
        }
        const wrapper = mount<MyRenderPropProps>(
            <MyRenderPropComponent children={params => <div className={params} />} />,
            {
                wrappingComponent: MyProvider,
            }
        );
        const provider = wrapper.getWrappingComponent();
        provider.setProps({ value: 'test new' });
    }
}

// CheerioWrapper
function CheerioWrapperTest() {
    const wrapper: cheerio.Cheerio =
        shallow(<div />).render() ||
        mount(<div />).render();

    wrapper.toggleClass('className');
}
