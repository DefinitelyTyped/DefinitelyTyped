import reactMixin = require('react-mixin');
import * as React from 'react';

var someMixin: React.Mixin<any, any>;
var someOtherMixin: React.Mixin<any, any>;

class Foo extends React.Component {
    render(): JSX.Element { return <div />; }
}

reactMixin(Foo.prototype, someMixin);
reactMixin(Foo.prototype, someOtherMixin);


var mixin: React.Mixin<any, any> = {
    getDefaultProps: function(): any {
        return {b: 2};
    }
};

class Foo2 extends React.Component {
    static defaultProps = {
        a: 1
    };
    render(): JSX.Element {
        console.log(this.props); // {a: 1, b: 2}
        return null;
    }
}

reactMixin.onClass(Foo2, mixin);

@reactMixin.decorate(mixin)
class Foo3 extends React.Component {
}

function autobind(methodNames: string[]): React.Mixin<any, any> {
    return {
        componentWillMount: function(): void {
            methodNames.forEach((name) => {
                this[name] = this[name].bind(this);
            });
        }
    };
}

@reactMixin.decorate(mixin)
@reactMixin.decorate(autobind(Object.keys(mixin)))
class Foo4 extends React.Component {
}


