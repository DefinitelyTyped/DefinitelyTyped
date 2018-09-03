import * as jsgraph from 'jsgraph';
import {Edge, JsGraphResponse} from 'jsgraph';

const mygraph = jsgraph.directed.create().result;

let name: string = 'my name';
mygraph.setGraphName(name);
name = mygraph.getGraphName();
let description: string = 'My desc';
mygraph.setGraphDescription(description);
description = mygraph.getGraphDescription();

let count: number = mygraph.verticesCount();
let verticies: string [] = mygraph.getVertices();
count = mygraph.getEdgeCount();
let edges: Edge[] = mygraph.getEdeges();
count = mygraph.rootVerticesCount();
verticies = mygraph.getRootVertices();
count = mygraph.leafVerticesCount();
verticies = mygraph.getLeafVertices();
let json: string = mygraph.toObject();
json = mygraph.toJSON();
json = mygraph.stringify( () => {return}, 2);
const graph2 = mygraph.fromObject(mygraph);

let response: JsGraphResponse = mygraph.addVertex({u: 'a', p: 'some data'});
let bool: boolean = mygraph.removeVertex('a');
let property: string = mygraph.getVertexProperty('a');
mygraph.setVertexProperty({u: 'a', p: property});
bool = mygraph.hasVertexProperty('a');
bool = mygraph.clearVertexProperty('a');
count = mygraph.inDegree('a');
edges = mygraph.inEdges('a');
count = mygraph.outDegree('a');
edges = mygraph.outEdges('a');

response = mygraph.addEdge({e: {u: 'a', v:'b'}, p: 'some data'});
bool = mygraph.isEdge({u: 'a', v:'b'});
response = mygraph.removeEdge({u: 'a', v: 'b'});
property = mygraph.getEdgeProperty({u: 'a', v: 'b'});
response = mygraph.setEdgeProperty({e: {u: 'a', v: 'b'}, p: 'some data'});
bool = mygraph.hasEdgeProperty({u: 'a', v: 'b'});
bool = mygraph.clearEdgeProperty({u:'a', v: 'b'});
