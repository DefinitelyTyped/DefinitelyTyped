
import jug = require('jug');

/*
Example 1.
 */
var root = jug.init();

root
    .seed()
    .seed();

root.data({
    interest: {
        genre: 'Action',
        year: 2014,
        stars: [ 'Eva Green', 'Duck Dogers' ]
    }
});

root.edge( 0 ).data({
    info: {
        name: '300: Rise of an Empire',
        genre: 'Action',
        stars: [ 'Eva Green', 'Duck Dogers' ],
        year: 2014
    }
});

root.edge( 1 ).data({
    info: {
        name: 'Man of Steel',
        genre: 'Action',
        stars: [ 'Henry Cavill' ],
        year: 2013
    }
});

root.edge(1).seed({
    test: {
        some: 'value'
    }
});

var distance = root.proximity('interest', 'info');
var close = distance.indexOf( 0 );
var nodeData = root.edge( close ).data();

/*
Example 2.
 */
var wire = jug.init({
    interest: {
        cloth: 't-shirt',
        color: 'red',
        size: 'medium'
    }
});

/*
 Seed node
 */
wire.seed();

/*
 Seed node with data.
 */
wire.seed({
    info: {
        cloth: 't-shirt',
        color: 'red',
        size: 'medium'
    }
});

/*
 Access node.
 */
wire.edge(0);

/*
 Get distance between nodes
 */
// first argument is 'from' object
// second argument is 'to' object
root.proximity('interest', 'info');

/*
 Find a node.
 */
wire.find('info', { color: 'red' });

/*
 Verify the level.
 */
wire.edge(0).level();

/*
 Verify if the current node is the root
 */
wire.isRoot();

/*
 Getting childs of an specified edge
 */
wire.getChildsOf(0);

/*
 Getting parents of an specified level and edge.
 */
wire.getParentsFrom(1, 0);

/*
 Getting the length of childs of an specified edge.
 */
wire.getScopeOf(0);

/*
 Getting siblings of current level, excluding the index indicated.
 */
wire.getSiblingsOf(1);
