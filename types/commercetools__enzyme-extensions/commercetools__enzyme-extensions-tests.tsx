import React = require('react');
import enzyme = require('enzyme');
import configureExtensions = require('@commercetools/enzyme-extensions');

configureExtensions(enzyme.ShallowWrapper);

function App() {
    return <Child cb={() => 'Hello world'} />;
}

interface ChildProps {
    cb: () => string;
}

function Child(props: ChildProps) {
    return <div>{props.cb()}</div>;
}

enzyme.shallow(<App />)
    .find(App)
    .renderProp('render');
enzyme.shallow(<App />)
    .find(Child)
    .renderProp('render', 1, 2);

enzyme.shallow(<App />)
    .find(Child)
    .drill(props => props.cb());

enzyme.shallow(<App />).until(Child);
