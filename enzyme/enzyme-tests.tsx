/// <reference path="enzyme.d.ts" />
/// <reference path="../react/react.d.ts"/>

import { shallow, mount, render, describeWithDOM, spyLifecycle } from "enzyme";
import * as React from "react";
import {Component, ReactElement} from "react";
import {ShallowWrapper, ReactWrapper, CheerioWrapper} from "enzyme";


// Help classes/interfaces
interface MyComponentProps {
    propsProperty: any;
}

interface MyComponentState {
    stateProperty: any;
}

class MyComponent extends Component<MyComponentProps, MyComponentState> {
    setState(...args: any[]) {
    }
}

// API
module SpyLifecycleTest {
    spyLifecycle(MyComponent);
}

// ShallowWrapper
module ShallowWrapperTest {
    var shallowWrapper: ShallowWrapper<MyComponentProps, MyComponentState> =
        shallow<MyComponentProps, MyComponentState>(<MyComponent propsProperty="value"/>);

    var reactElement: ReactElement<any>,
        objectVal: Object,
        boolVal: Boolean,
        stringVal: String;

    function test_find() {
        shallowWrapper = shallowWrapper.find('.selector');
        shallowWrapper = shallowWrapper.find(MyComponent);
    }

    function test_findWhere() {
        shallowWrapper =
            shallowWrapper.findWhere((aShallowWrapper: ShallowWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_filter() {
        shallowWrapper = shallowWrapper.filter('.selector');
        shallowWrapper = shallowWrapper.filter(MyComponent);
    }

    function test_filterWhere() {
        shallowWrapper =
            shallowWrapper.filterWhere((aShallowWrapper: ShallowWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_contains() {
        boolVal = shallowWrapper.contains(<div className="foo bar"/>);
    }

    function test_hasClass() {
        boolVal = shallowWrapper.find('.my-button').hasClass('disabled');
    }

    function test_is() {
        boolVal = shallowWrapper.is('.some-class');
    }

    function test_not() {
        shallowWrapper = shallowWrapper.find('.foo').not('.bar');
    }

    function test_children() {
        shallowWrapper = shallowWrapper.children();
    }

    function test_parents() {
        shallowWrapper = shallowWrapper.parents();
    }

    function test_parent() {
        shallowWrapper = shallowWrapper.parent();
    }

    function test_closest() {
        shallowWrapper = shallowWrapper.closest('.selector');
        shallowWrapper = shallowWrapper.closest(MyComponent);
    }

    function test_shallow() {
        shallowWrapper = shallowWrapper.shallow();
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
        shallowWrapper.state();
        shallowWrapper.state('key');
    }

    function test_props() {
        objectVal = shallowWrapper.props();
    }

    function test_prop() {
        shallowWrapper.prop('key');
    }


    function test_simulate(...args: any[]) {
        shallowWrapper.simulate('click');
        shallowWrapper.simulate('click', args);
    }

    function test_setState() {
        shallowWrapper = shallowWrapper.setState({stateProperty: 'state'});
    }

    function test_setProps() {
        shallowWrapper = shallowWrapper.setProps({propsProperty: 'foo'});
    }

    function test_setContext() {
        shallowWrapper = shallowWrapper.setContext({name: 'baz'});
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
        var stringOrFunction: String|Function = shallowWrapper.type();
    }

    function test_forEach() {
        shallowWrapper =
            shallowWrapper.forEach((aShallowWrapper: ShallowWrapper<MyComponentProps, MyComponentState>)=> {
            });
    }

    function test_map() {
        var arrayVal: Array<any> =
            shallowWrapper.map((aShallowWrapper: ShallowWrapper<MyComponentProps, MyComponentState>)=> {
            });
    }

    function test_reduce() {
        const total: number[] =
            shallowWrapper.reduce<number>(
                (amount: number, n: ShallowWrapper<MyComponentProps, MyComponentState>) => amount + n.prop('amount')
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
}


// ReactWrapper
module ReactWrapperTest {
    var reactWrapper: ReactWrapper<MyComponentProps, MyComponentState> =
        mount<MyComponentProps, MyComponentState>(<MyComponent propsProperty="value"/>);

    var reactElement: ReactElement<any>,
        objectVal: Object,
        boolVal: Boolean,
        stringVal: String;

    function test_find() {
        reactWrapper = reactWrapper.find('.selector');
        reactWrapper = reactWrapper.find(MyComponent);
    }

    function test_findWhere() {
        reactWrapper =
            reactWrapper.findWhere((aReactWrapper: ReactWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_filter() {
        reactWrapper = reactWrapper.filter('.selector');
        reactWrapper = reactWrapper.filter(MyComponent);
    }

    function test_filterWhere() {
        reactWrapper =
            reactWrapper.filterWhere((aReactWrapper: ReactWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_contains() {
        boolVal = reactWrapper.contains(<div className="foo bar"/>);
    }

    function test_hasClass() {
        boolVal = reactWrapper.find('.my-button').hasClass('disabled');
    }

    function test_is() {
        boolVal = reactWrapper.is('.some-class');
    }

    function test_not() {
        reactWrapper = reactWrapper.find('.foo').not('.bar');
    }

    function test_children() {
        reactWrapper = reactWrapper.children();
    }

    function test_parents() {
        reactWrapper = reactWrapper.parents();
    }

    function test_parent() {
        reactWrapper = reactWrapper.parent();
    }

    function test_closest() {
        reactWrapper = reactWrapper.closest('.selector');
        reactWrapper = reactWrapper.closest(MyComponent);
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
    }

    function test_props() {
        objectVal = reactWrapper.props();
    }

    function test_prop() {
        reactWrapper.prop('key');
    }


    function test_simulate(...args: any[]) {
        reactWrapper.simulate('click');
        reactWrapper.simulate('click', args);
    }

    function test_setState() {
        reactWrapper = reactWrapper.setState({stateProperty: 'state'});
    }

    function test_setProps() {
        reactWrapper = reactWrapper.setProps({propsProperty: 'foo'});
    }

    function test_setContext() {
        reactWrapper = reactWrapper.setContext({name: 'baz'});
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
        var stringOrFunction: String|Function = reactWrapper.type();
    }

    function test_forEach() {
        reactWrapper =
            reactWrapper.forEach((aReactWrapper: ReactWrapper<MyComponentProps, MyComponentState>)=> {
            });
    }

    function test_map() {
        var arrayVal: Array<any> =
            reactWrapper.map((aReactWrapper: ReactWrapper<MyComponentProps, MyComponentState>)=> {
            });
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
}

// CheerioWrapper
module CheerioWrapperTest {
    var cheerioWrapper: CheerioWrapper<MyComponentProps, MyComponentState> =
        render<MyComponentProps, MyComponentState>(<MyComponent propsProperty="value"/>);

    var reactElement: ReactElement<any>,
        objectVal: Object,
        boolVal: Boolean,
        stringVal: String;

    function test_find() {
        cheerioWrapper = cheerioWrapper.find('.selector');
        cheerioWrapper = cheerioWrapper.find(MyComponent);
    }

    function test_findWhere() {
        cheerioWrapper =
            cheerioWrapper.findWhere((aCheerioWrapper: CheerioWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_filter() {
        cheerioWrapper = cheerioWrapper.filter('.selector');
        cheerioWrapper = cheerioWrapper.filter(MyComponent);
    }

    function test_filterWhere() {
        cheerioWrapper =
            cheerioWrapper.filterWhere((aCheerioWrapper: CheerioWrapper<MyComponentProps, MyComponentState>) => true);
    }

    function test_contains() {
        boolVal = cheerioWrapper.contains(<div className="foo bar"/>);
    }

    function test_hasClass() {
        boolVal = cheerioWrapper.find('.my-button').hasClass('disabled');
    }

    function test_is() {
        boolVal = cheerioWrapper.is('.some-class');
    }

    function test_not() {
        cheerioWrapper = cheerioWrapper.find('.foo').not('.bar');
    }

    function test_children() {
        cheerioWrapper = cheerioWrapper.children();
    }

    function test_parents() {
        cheerioWrapper = cheerioWrapper.parents();
    }

    function test_parent() {
        cheerioWrapper = cheerioWrapper.parent();
    }

    function test_closest() {
        cheerioWrapper = cheerioWrapper.closest('.selector');
        cheerioWrapper = cheerioWrapper.closest(MyComponent);
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
    }

    function test_props() {
        objectVal = cheerioWrapper.props();
    }

    function test_prop() {
        cheerioWrapper.prop('key');
    }


    function test_simulate(...args: any[]) {
        cheerioWrapper.simulate('click');
        cheerioWrapper.simulate('click', args);
    }

    function test_setState() {
        cheerioWrapper = cheerioWrapper.setState({stateProperty: 'state'});
    }

    function test_setProps() {
        cheerioWrapper = cheerioWrapper.setProps({propsProperty: 'foo'});
    }

    function test_setContext() {
        cheerioWrapper = cheerioWrapper.setContext({name: 'baz'});
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
        var stringOrFunction: String|Function = cheerioWrapper.type();
    }

    function test_forEach() {
        cheerioWrapper =
            cheerioWrapper.forEach((aCheerioWrapper: CheerioWrapper<MyComponentProps, MyComponentState>)=> {
            });
    }

    function test_map() {
        var arrayVal: Array<any> =
            cheerioWrapper.map((aCheerioWrapper: CheerioWrapper<MyComponentProps, MyComponentState>)=> {
            });
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
