// Test DataSet constructor
new vis.DataSet();
new vis.DataSet({});
new vis.DataSet([]);
new vis.DataSet([], {});

// Test Network constructor
new vis.Network(new HTMLDivElement(), { nodes: new vis.DataSet(), edges: new vis.DataSet() }, {});

//
// Test code sample from http://visjs.org/docs/data/dataset.html#Example
//

interface TestData {
  id: number;
  text?: string;
  date?: any;
  group?: number;
  balance?: number;
  first?: boolean;
}

// create a DataSet
var options = {};
var data = new vis.DataSet<TestData>(options);

// add items
// note that the data items can contain different properties and data formats
data.add([
  { id: 1, text: 'item 1', date: new Date(2013, 6, 20), group: 1, first: true },
  { id: 2, text: 'item 2', date: '2013-06-23', group: 2 },
  { id: 3, text: 'item 3', date: '2013-06-25', group: 2 },
  { id: 4, text: 'item 4' }
]);

// subscribe to any change in the DataSet
data.on('*', function (event, properties, senderId) {
  console.log('event', event, properties);
});

// update an existing item
data.update({ id: 2, group: 1 });

// remove an item
data.remove(4);

// get all ids
var ids = data.getIds();
console.log('ids', ids);

// get a specific item
var item1 = data.get(1);
console.log('item1', item1);

// retrieve a filtered subset of the data
var items = data.get({
  filter: function (item) {
    return item.group == 1;
  }
});
console.log('filtered items', items);

// retrieve formatted items
var items = data.get({
  fields: ['id', 'date'],
  type: {
    date: 'ISODate'
  }
});
console.log('formatted items', items);

//
// Test code sample from http://visjs.org/docs/data/dataset.html#Subscriptions
//

// create a DataSet
var data = new vis.DataSet<TestData>();

// subscribe to any change in the DataSet
data.on('*', function (event, properties, senderId) {
  console.log('event:', event, 'properties:', properties, 'senderId:', senderId);
});

// add an item
data.add({ id: 1, text: 'item 1' });              // triggers an 'add' event
data.update({ id: 1, text: 'item 1 (updated)' }); // triggers an 'update' event
data.remove(1);                                 // triggers an 'remove' event

//
// Test code sample from http://visjs.org/docs/data/dataset.html#Data_Manipulation
//

// create a DataSet
var data = new vis.DataSet<TestData>();

// add items
data.add([
  { id: 1, text: 'item 1' },
  { id: 2, text: 'item 2' },
  { id: 3, text: 'item 3' }
]);

// update an item
data.update({ id: 2, text: 'item 2 (updated)' });

// remove an item
data.remove(3);

//
// Test code sample from http://visjs.org/docs/data/dataset.html#Data_Selection
//

// create a DataSet
var data = new vis.DataSet<TestData>();
data.add([
  { id: 1, text: 'item 1', date: '2013-06-20', group: 1, first: true },
  { id: 2, text: 'item 2', date: '2013-06-23', group: 2 },
  { id: 3, text: 'item 3', date: '2013-06-25', group: 2 },
  { id: 4, text: 'item 4' }
]);

// retrieve formatted items
var items = data.get({
  fields: ['id', 'date', 'group'],    // output the specified fields only
  type: {
    date: 'Date',                   // convert the date fields to Date objects
    group: 'String'                 // convert the group fields to Strings
  }
});

var dataset = new vis.DataSet<TestData>();

// retrieve all items having a property group with value 2
var group2 = dataset.get({
  filter: function (item) {
    return (item.group == 2);
  }
});

// retrieve all items having a property balance with a value above zero
var positiveBalance = dataset.get({
  filter: function (item) {
    return (item.balance > 0);
  }
});

//
// Test code sample from Getting Started http://visjs.org/docs/network/
//

// create an array with nodes
var nodes = new vis.DataSet([
  { id: 1, label: 'Node 1' },
  { id: 2, label: 'Node 2' },
  { id: 3, label: 'Node 3' },
  { id: 4, label: 'Node 4' },
  { id: 5, label: 'Node 5' }
]);

// create an array with edges
var edges = new vis.DataSet([
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 }
]);

// create a network
var container = <HTMLElement>document.getElementById('mynetwork');

// provide the data in the vis format
var data2 = {
  nodes: nodes,
  edges: edges
};
var options = {};

// initialize your network!
var network = new vis.Network(container, data2, options);

//
// Test code sample from http://visjs.org/docs/network/configure.html#
//

// these are all options in full.
var options2 = {
  configure: {
    enabled: true,
    filter: 'nodes,edges',
    container: container,
    showButton: true
  }
}

network.setOptions(options2);