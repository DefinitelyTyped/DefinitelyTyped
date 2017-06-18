
import React = require('react');
import jsnox = require('jsnox');
var $ = jsnox(React);

interface PersonProps {
    firstName: string
    lastName: string
    age: number
}

var Person = React.createClass<PersonProps, {}>({
    render():React.ReactElement<any> { return null; }
});

var PersonTag = React.createFactory(Person);

var clickHandler: React.MouseEventHandler<{}>;

// Tests with spec string
function spec_string () {
    var result: React.ReactHTMLElement<HTMLElement>

    // just spec string
    result = $('div')

    // No properties, just children
    result = $('div', 'hello') // one string child
    result = $('div', $('span', 'world')) // one element child
    result = $('div', ['hello', $('span', 'world')]) // mixed array of children

    // With html properties
    result = $('div', { onClick: clickHandler }) // no children
    result = $('div', { onClick: clickHandler }, 'hello') // one string child
    result = $('div', { onClick: clickHandler }, $('span', 'world')) // one element child
    result = $('div', { onClick: clickHandler }, ['hello', $('span', 'world')]) // mixed array of children
}

// Tests with react component
function react_component() {
    var result: React.ReactElement<{}>

    // with nothing more
    result = $(Person)

    // No properties, just children
    result = $(Person, 'hello')                         // one string child
    result = $(Person, $('span', 'world'))              // one element child
    result = $(Person, ['hello', $('span', 'world')])   // mixed array of children

    // With component props
    var props = { firstName: 'Bob', lastName: 'Garfield', age: 72 }
    result = $(Person, props)                           // no children
    result = $(Person, props, 'hello')                  // one string child
    result = $(Person, props, $('span', 'world'))       // one element child
    result = $(Person, props, ['hello', PersonTag()])   // mixed array of children
}
