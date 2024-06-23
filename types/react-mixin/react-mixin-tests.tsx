import { Mixin } from "create-react-class";
import reactMixin = require("react-mixin");
import * as React from "react";

var someMixin: Mixin<any, any>;
var someOtherMixin: Mixin<any, any>;

class Foo extends React.Component {
    render(): React.JSX.Element {
        return <div />;
    }
}

reactMixin(Foo.prototype, someMixin);
reactMixin(Foo.prototype, someOtherMixin);

var mixin: Mixin<any, any> = {
    getDefaultProps: function(): any {
        return { b: 2 };
    },
};

class Foo2 extends React.Component {
    static defaultProps = {
        a: 1,
    };
    render(): React.JSX.Element {
        console.log(this.props); // {a: 1, b: 2}
        return null;
    }
}

reactMixin.onClass(Foo2, mixin);

@reactMixin.decorate(mixin)
class Foo3 extends React.Component {
}

function autobind(methodNames: string[]): Mixin<any, any> {
    return {
        componentWillMount: function(): void {
            methodNames.forEach((name) => {
                this[name] = this[name].bind(this);
            });
        },
    };
}

@reactMixin.decorate(mixin)
@reactMixin.decorate(autobind(Object.keys(mixin)))
class Foo4 extends React.Component {
}
