/// <reference path="enzyme.d.ts" />
/// <reference path="../react/react.d.ts"/>

import { shallow, mount, render, describeWithDOM, spyLifecycle } from "enzyme";
import * as React from "react";
import {Component, ReactElement, HTMLAttributes} from "react";
import {ShallowWrapper, ReactWrapper, CheerioWrapper} from "enzyme";


// Help classes/interfaces
interface MyComponentProps {
    propsProperty: any;
    numberProp?: number;
}

interface StatelessProps {
    stateless: any;
}

interface MyComponentState {
    stateProperty: any;
}

class MyComponent extends Component<MyComponentProps, MyComponentState> {
    setState(...args: any[]) {
    }
}

const MyStatelessComponent = (props: StatelessProps) => <span />;

// API
namespace SpyLifecycleTest {
    spyLifecycle(MyComponent);
}

// ShallowWrapper
namespace ShallowWrapperTest {
    var shallowWrapper: ShallowWrapper<MyComponentProps, MyComponentState> =
        shallow<MyComponentProps, MyComponentState>(<MyComponent propsProperty="value"/>);

    var reactElement: ReactElement<any>,
        objectVal: Object,
        boolVal: Boolean,
        stringVal: String,
        elementWrapper: ShallowWrapper<HTMLAttributes, {}>

    function test_shallow_options() {
        shallow(<MyComponent propsProperty={1}/>, {
            context: {
                test: "a",
            },
            lifecycleExperimental: true
        });
    }

    function test_find() {
        elementWrapper = shallowWrapper.find('.selector');
        shallowWrapper = shallowWrapper.find(MyComponent);
        shallowWrapper.find(MyStatelessComponent).props().stateless;
        shallowWrapper.find(MyStatelessComponent).shallow();
        shallowWrapper.find({ prop: 'value' });
    }

    function test_findWhere() {
        shallowWrapper =
            shallowWrapper.findWhere((aShallowWrapper: ShallowWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_filter() {
        elementWrapper = shallowWrapper.filter('.selector');
        shallowWrapper = shallowWrapper.filter(MyComponent).shallow();
        shallowWrapper.filter({ prop: 'val' });
    }

    function test_filterWhere() {
        shallowWrapper =
            shallowWrapper.filterWhere(wrapper => {
                wrapper.props().propsProperty;
                return true;
            });
    }

    function test_contains() {
        boolVal = shallowWrapper.contains(<div className="foo bar"/>);
    }

    function test_containsMatchingElement() {
        boolVal = shallowWrapper.contains(<div className="foo bar"/>);
    }

    function test_containsAllMatchingElements() {
        boolVal = shallowWrapper.containsAllMatchingElements([<div className="foo bar"/>]);
    }

    function test_containsAnyMatchingElement() {
        boolVal = shallowWrapper.containsAnyMatchingElements([<div className="foo bar"/>]);
    }

    function test_dive() {
        interface TmpProps {
            foo: any
        }

        interface TmpState {
            bar: any
        }

        const diveWrapper: ShallowWrapper<TmpProps, TmpState> = shallowWrapper.dive<TmpProps, TmpState>({ context: { foobar: 'barfoo' }});
    }

    function test_equals() {
        boolVal = shallowWrapper.equals(<div className="foo bar"/>);
    }

    function test_matchesElement() {
        boolVal = shallowWrapper.matchesElement(<div className="foo bar"/>);
    }

    function test_hasClass() {
        boolVal = shallowWrapper.find('.my-button').hasClass('disabled');
    }

    function test_is() {
        boolVal = shallowWrapper.is('.some-class');
    }

    function test_isEmpty() {
        boolVal = shallowWrapper.isEmpty()
    }

    function test_not() {
        elementWrapper = shallowWrapper.find('.foo').not('.bar');
    }

    function test_children() {
        shallowWrapper = shallowWrapper.children();
        shallowWrapper.children(MyStatelessComponent).props().stateless;
        shallowWrapper.children({ prop: 'myprop' });
    }

    function test_childAt() {
        const childWrapper: ShallowWrapper<any, any> = shallowWrapper.childAt(0);

        interface TmpType1 {
            foo: any
        }

        interface TmpType2 {
            bar: any
        }

        const childWrapper2: ShallowWrapper<TmpType1, TmpType2> = shallowWrapper.childAt<TmpType1, TmpType2>(0);
    }

    function test_parents() {
        shallowWrapper = shallowWrapper.parents();
    }

    function test_parent() {
        shallowWrapper = shallowWrapper.parent();
    }

    function test_closest() {
        elementWrapper = shallowWrapper.closest('.selector');
        shallowWrapper = shallowWrapper.closest(MyComponent);
        shallowWrapper = shallowWrapper.closest({ prop: 'myprop' });
    }

    function test_shallow() {
        shallowWrapper = shallowWrapper.shallow();
    }

    function test_unmount() {
        shallowWrapper = shallowWrapper.unmount();
    }

    function test_render() {
        var cheerioWrapper: CheerioWrapper<MyComponentProps, MyComponentState> = shallowWrapper.render();
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

    function test_at() {
        shallowWrapper = shallowWrapper.at(1);
    }

    function test_first() {
        shallowWrapper = shallowWrapper.first();
    }

    function test_last() {
        shallowWrapper = shallowWrapper.last();
    }

    function test_state() {
        const state: MyComponentState = shallowWrapper.state();
        shallowWrapper.state('key');
        const tmp: String = shallowWrapper.state<String>('key');
    }

    function test_context() {
        shallowWrapper.context();
        shallowWrapper.context('key');
        const tmp: String = shallowWrapper.context<String>('key');
    }

    function test_props() {
        objectVal = shallowWrapper.props();
    }

    function test_prop() {
        shallowWrapper.prop('key');
        const tmp: String = shallowWrapper.prop<String>('key');
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
        shallowWrapper = shallowWrapper.setProps({ propsProperty: 'foo' }, () => console.log('props updated'));
    }

    function test_setContext() {
        shallowWrapper = shallowWrapper.setContext({ name: 'baz' });
    }

    function test_instance() {
        var myComponent: MyComponent = shallowWrapper.instance();
    }

    function test_update() {
        shallowWrapper = shallowWrapper.update();
    }

    function test_debug() {
        stringVal = shallowWrapper.debug();
    }

    function test_type() {
        var stringOrFunction: String | Function = shallowWrapper.type();
    }

    function test_name() {
        var str: String = shallowWrapper.name();
    }

    function test_forEach() {
        shallowWrapper =
            shallowWrapper.forEach(wrapper => wrapper.shallow().props().propsProperty);
    }

    function test_map() {
        var arrayNumbers: Array<Number> =
            shallowWrapper.map(wrapper => wrapper.props().numberProp);
    }

    function test_reduce() {
        const total: number[] =
            shallowWrapper.reduce(
                (amount: number, n: ShallowWrapper<MyComponentProps, MyComponentState>) => amount + n.props().numberProp
            );
    }

    function test_reduceRight() {
        const total: number[] =
            shallowWrapper.reduceRight<number>(
                (amount: number, n: ShallowWrapper<MyComponentProps, MyComponentState>) => amount + n.prop('amount')
            );
    }

    function test_some() {
        boolVal = shallowWrapper.some('.selector');
        boolVal = shallowWrapper.some(MyComponent);
    }

    function test_someWhere() {
        boolVal = shallowWrapper.someWhere((aShallowWrapper: ShallowWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_every() {
        boolVal = shallowWrapper.every('.selector');
        boolVal = shallowWrapper.every(MyComponent);
    }

    function test_everyWhere() {
        boolVal = shallowWrapper.everyWhere((aShallowWrapper: ShallowWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_isEmptyRender() {
        boolVal = shallowWrapper.isEmptyRender();
    }
}


// ReactWrapper
namespace ReactWrapperTest {
    var reactWrapper: ReactWrapper<MyComponentProps, MyComponentState> =
        mount<MyComponentProps, MyComponentState>(<MyComponent propsProperty="value"/>);

    var reactElement: ReactElement<any>,
        objectVal: Object,
        boolVal: Boolean,
        stringVal: String,
        elementWrapper: ReactWrapper<HTMLAttributes, {}>

    function test_unmount() {
        reactWrapper = reactWrapper.unmount();
    }

    function test_mount() {
        reactWrapper = reactWrapper.mount();

        mount(<MyComponent propsProperty={1}/>, {
            attachTo: document.getElementById('test'),
            context: {
                a: "b"
            }
        });
    }

    function test_ref() {
        reactWrapper = reactWrapper.ref('refName');

        interface TmpType1 {
            foo: string
        }

        interface TmpType2 {
            bar: string
        }

        const tmp: ReactWrapper<TmpType1, TmpType2> = reactWrapper.ref<TmpType1, TmpType2>('refName');
    }

    function test_detach() {
        reactWrapper.detach();
    }

    function test_find() {
        elementWrapper = reactWrapper.find('.selector');
        reactWrapper = reactWrapper.find(MyComponent);
        reactWrapper.find(MyStatelessComponent).props().stateless;
        reactWrapper.find({ prop: 'myprop' });
    }

    function test_findWhere() {
        reactWrapper =
            reactWrapper.findWhere((aReactWrapper: ReactWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_filter() {
        elementWrapper = reactWrapper.filter('.selector');
        reactWrapper = reactWrapper.filter(MyComponent);
        reactWrapper = reactWrapper.filter({ prop: 'myprop' });
    }

    function test_filterWhere() {
        reactWrapper =
            reactWrapper.filterWhere(wrapper => {
                wrapper.props().propsProperty;
                return true;
            });
    }

    function test_contains() {
        boolVal = reactWrapper.contains(<div className="foo bar"/>);
    }

    function test_containsMatchingElement() {
        boolVal = reactWrapper.contains(<div className="foo bar"/>);
    }

    function test_containsAllMatchingElements() {
        boolVal = reactWrapper.containsAllMatchingElements([<div className="foo bar"/>]);
    }

    function test_containsAnyMatchingElement() {
        boolVal = reactWrapper.containsAnyMatchingElements([<div className="foo bar"/>]);
    }

    function test_equals() {
        boolVal = reactWrapper.equals(<div className="foo bar"/>);
    }

    function test_matchesElement() {
        boolVal = reactWrapper.matchesElement(<div className="foo bar"/>);
    }

    function test_hasClass() {
        boolVal = reactWrapper.find('.my-button').hasClass('disabled');
    }

    function test_is() {
        boolVal = reactWrapper.is('.some-class');
    }

    function test_isEmpty() {
        boolVal = reactWrapper.isEmpty()
    }

    function test_not() {
        elementWrapper = reactWrapper.find('.foo').not('.bar');
    }

    function test_children() {
        reactWrapper = reactWrapper.children();
    }

    function test_childAt() {
        const childWrapper: ReactWrapper<any, any> = reactWrapper.childAt(0);

        interface TmpType1 {
            foo: any
        }

        interface TmpType2 {
            bar: any
        }

        const childWrapper2: ReactWrapper<TmpType1, TmpType2> = reactWrapper.childAt<TmpType1, TmpType2>(0);
    }

    function test_parents() {
        reactWrapper = reactWrapper.parents();
    }

    function test_parent() {
        reactWrapper = reactWrapper.parent();
    }

    function test_closest() {
        elementWrapper = reactWrapper.closest('.selector');
        reactWrapper = reactWrapper.closest(MyComponent);
        reactWrapper = reactWrapper.closest({ prop: 'myprop' });
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

    function test_at() {
        reactWrapper = reactWrapper.at(1);
    }

    function test_first() {
        reactWrapper = reactWrapper.first();
    }

    function test_last() {
        reactWrapper = reactWrapper.last();
    }

    function test_state() {
        reactWrapper.state();
        reactWrapper.state('key');
        const tmp: String = reactWrapper.state<String>('key');
    }

    function test_context() {
        reactWrapper.context();
        reactWrapper.context('key');
        const tmp: String = reactWrapper.context<String>('key');
    }

    function test_props() {
        objectVal = reactWrapper.props();
    }

    function test_prop() {
        reactWrapper.prop('key');
        const tmp: String = reactWrapper.prop<String>('key');
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
        reactWrapper = reactWrapper.setProps({ propsProperty: 'foo' });
    }

    function test_setContext() {
        reactWrapper = reactWrapper.setContext({ name: 'baz' });
    }

    function test_instance() {
        var myComponent: MyComponent = reactWrapper.instance();
    }

    function test_update() {
        reactWrapper = reactWrapper.update();
    }

    function test_debug() {
        stringVal = reactWrapper.debug();
    }

    function test_type() {
        var stringOrFunction: String | Function = reactWrapper.type();
    }

    function test_name() {
        var str: String = reactWrapper.name();
    }

    function test_forEach() {
        reactWrapper =
            reactWrapper.forEach(wrapper => wrapper.props().propsProperty);
    }

    function test_map() {
        var arrayNumbers: Array<Number> =
            reactWrapper.map(wrapper => wrapper.props().numberProp);
    }

    function test_reduce() {
        const total: number[] =
            reactWrapper.reduce<number>(
                (amount: number, n: ReactWrapper<MyComponentProps, MyComponentState>) => amount + n.prop('amount')
            );
    }

    function test_reduceRight() {
        const total: number[] =
            reactWrapper.reduceRight<number>(
                (amount: number, n: ReactWrapper<MyComponentProps, MyComponentState>) => amount + n.prop('amount')
            );
    }

    function test_some() {
        boolVal = reactWrapper.some('.selector');
        boolVal = reactWrapper.some(MyComponent);
    }

    function test_someWhere() {
        boolVal = reactWrapper.someWhere((aReactWrapper: ReactWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_every() {
        boolVal = reactWrapper.every('.selector');
        boolVal = reactWrapper.every(MyComponent);
    }

    function test_everyWhere() {
        boolVal = reactWrapper.everyWhere((aReactWrapper: ReactWrapper<MyComponentProps, MyComponentState>) => true);
    }
    function test_isEmptyRender() {
        boolVal = reactWrapper.isEmptyRender();
    }
}

// CheerioWrapper
namespace CheerioWrapperTest {
    var cheerioWrapper: CheerioWrapper<MyComponentProps, MyComponentState> =
        render<MyComponentProps, MyComponentState>(<MyComponent propsProperty="value"/>);

    var reactElement: ReactElement<any>,
        objectVal: Object,
        boolVal: Boolean,
        stringVal: String,
        elementWrapper: CheerioWrapper<HTMLAttributes, {}>

    function test_find() {
        elementWrapper = cheerioWrapper.find('.selector');
        cheerioWrapper = cheerioWrapper.find(MyComponent);
        cheerioWrapper.find(MyStatelessComponent).props().stateless;
        cheerioWrapper.find({ prop: 'myprop' });
    }

    function test_findWhere() {
        cheerioWrapper =
            cheerioWrapper.findWhere((aCheerioWrapper: CheerioWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_filter() {
        elementWrapper = cheerioWrapper.filter('.selector');
        cheerioWrapper = cheerioWrapper.filter(MyComponent);
        cheerioWrapper = cheerioWrapper.filter({ prop: 'myprop' });
    }

    function test_filterWhere() {
        cheerioWrapper =
            cheerioWrapper.filterWhere(wrapper => {
                wrapper.props().propsProperty;
                return true;
            });
    }

    function test_contains() {
        boolVal = cheerioWrapper.contains(<div className="foo bar"/>);
    }

    function test_containsMatchingElement() {
        boolVal = cheerioWrapper.contains(<div className="foo bar"/>);
    }

    function test_containsAllMatchingElements() {
        boolVal = cheerioWrapper.containsAllMatchingElements([<div className="foo bar"/>]);
    }

    function test_containsAnyMatchingElement() {
        boolVal = cheerioWrapper.containsAnyMatchingElements([<div className="foo bar"/>]);
    }

    function test_equals() {
        boolVal = cheerioWrapper.equals(<div className="foo bar"/>);
    }

    function test_matchesElement() {
        boolVal = cheerioWrapper.matchesElement(<div className="foo bar"/>);
    }

    function test_hasClass() {
        boolVal = cheerioWrapper.find('.my-button').hasClass('disabled');
    }

    function test_is() {
        boolVal = cheerioWrapper.is('.some-class');
    }

    function test_isEmpty() {
        boolVal = cheerioWrapper.isEmpty()
    }

    function test_not() {
        elementWrapper = cheerioWrapper.find('.foo').not('.bar');
    }

    function test_children() {
        cheerioWrapper = cheerioWrapper.children();
    }

    function test_childAt() {
        const childWrapper: CheerioWrapper<any, any> = cheerioWrapper.childAt(0);

        interface TmpType1 {
            foo: any
        }

        interface TmpType2 {
            bar: any
        }

        const childWrapper2: CheerioWrapper<TmpType1, TmpType2> = cheerioWrapper.childAt<TmpType1, TmpType2>(0);
    }

    function test_parents() {
        cheerioWrapper = cheerioWrapper.parents();
    }

    function test_parent() {
        cheerioWrapper = cheerioWrapper.parent();
    }

    function test_closest() {
        elementWrapper = cheerioWrapper.closest('.selector');
        cheerioWrapper = cheerioWrapper.closest(MyComponent);
        cheerioWrapper = cheerioWrapper.closest({ prop: 'myprop' });
    }

    function test_text() {
        stringVal = cheerioWrapper.text();
    }

    function test_html() {
        stringVal = cheerioWrapper.html();
    }

    function test_get() {
        reactElement = cheerioWrapper.get(1);
    }

    function test_at() {
        cheerioWrapper = cheerioWrapper.at(1);
    }

    function test_first() {
        cheerioWrapper = cheerioWrapper.first();
    }

    function test_last() {
        cheerioWrapper = cheerioWrapper.last();
    }

    function test_state() {
        cheerioWrapper.state();
        cheerioWrapper.state('key');
        const tmp: String = cheerioWrapper.state<String>('key');
    }

    function test_context() {
        cheerioWrapper.context();
        cheerioWrapper.context('key');
        const tmp: String = cheerioWrapper.context<String>('key');
    }

    function test_props() {
        objectVal = cheerioWrapper.props();
    }

    function test_prop() {
        cheerioWrapper.prop('key');
        const tmp: String = cheerioWrapper.prop<String>('key');
    }

    function test_key() {
        stringVal = cheerioWrapper.key();
    }

    function test_simulate(...args: any[]) {
        cheerioWrapper.simulate('click');
        cheerioWrapper.simulate('click', args);
    }

    function test_setState() {
        cheerioWrapper = cheerioWrapper.setState({ stateProperty: 'state' });
    }

    function test_setProps() {
        cheerioWrapper = cheerioWrapper.setProps({ propsProperty: 'foo' });
    }

    function test_setContext() {
        cheerioWrapper = cheerioWrapper.setContext({ name: 'baz' });
    }

    function test_instance() {
        var myComponent: MyComponent = cheerioWrapper.instance();
    }

    function test_update() {
        cheerioWrapper = cheerioWrapper.update();
    }

    function test_debug() {
        stringVal = cheerioWrapper.debug();
    }

    function test_type() {
        var stringOrFunction: String | Function = cheerioWrapper.type();
    }

    function test_name() {
        var str: String = cheerioWrapper.name();
    }

    function test_forEach() {
        cheerioWrapper =
            cheerioWrapper.forEach((aCheerioWrapper: CheerioWrapper<MyComponentProps, MyComponentState>) => {
            });
    }

    function test_map() {
        var arrayNumbers: Array<Number> =
            cheerioWrapper.map(wrapper => wrapper.props().numberProp);
    }

    function test_reduce() {
        const total: number[] =
            cheerioWrapper.reduce<number>(
                (amount: number, n: CheerioWrapper<MyComponentProps, MyComponentState>) => amount + n.prop('amount')
            );
    }

    function test_reduceRight() {
        const total: number[] =
            cheerioWrapper.reduceRight<number>(
                (amount: number, n: CheerioWrapper<MyComponentProps, MyComponentState>) => amount + n.prop('amount')
            );
    }

    function test_some() {
        boolVal = cheerioWrapper.some('.selector');
        boolVal = cheerioWrapper.some(MyComponent);
    }

    function test_someWhere() {
        boolVal = cheerioWrapper.someWhere((aCheerioWrapper: CheerioWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_every() {
        boolVal = cheerioWrapper.every('.selector');
        boolVal = cheerioWrapper.every(MyComponent);
    }

    function test_everyWhere() {
        boolVal = cheerioWrapper.everyWhere((aCheerioWrapper: CheerioWrapper<MyComponentProps, MyComponentState>) => true);
    }
}
