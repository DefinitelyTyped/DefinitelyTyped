// Trying some things from the official documentation: https://github.com/steveukx/properties/blob/master/README.md

import PropertiesReader = require('properties-reader');

let properties = PropertiesReader('/path/to/properties.file');
// Fully qualified name
let property = properties.get('some.property.name');
// Yeah, so we have no way of doing this properly.
property = (<any> properties.path()).some.property.name;

properties = properties.append('/another.file').append('/yet/another.file');
properties = properties.read('some.property = Value \n another.property = Another Value');
properties = properties.set('property.name', 'Property Value');

properties.save('/another.file');

properties.get('main.some.thing') === 'foo';
properties.get('blah.some.thing') === 'bar';

const propertiesCount: number = properties.length;
const raw: string|null = properties.getRaw('path.to.prop');

properties = properties.each((key, value) => {});
properties = properties.each(function(key, value) {
    this.x = 5;
}, { x: 3 });
const value = properties.getAllProperties()["myKey"];
