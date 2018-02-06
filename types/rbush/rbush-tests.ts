import rbush = require('rbush');

interface IndexedRect extends rbush.BBox {
  index: number;
}

function test_rbush() {
  var index = rbush<IndexedRect>();

  index
    .clear()
    .insert({
      minX: 0,
      minY: 0,
      maxX: 10,
      maxY: 10,
      index: 0,
    });

  index.all();
  index.fromJSON(index.toJSON());

  index.search({
    minX: 5,
    maxX: 15,
    minY: 5,
    maxY: 11,
  })

  index.load([
    {
      minX: 0,
      minY: 0,
      maxX: 10,
      maxY: 10,
      index: 0,
    }
  ])
}
