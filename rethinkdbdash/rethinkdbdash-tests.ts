/// <reference path="rethinkdbdash.d.ts" />

import * as rConnect from 'rethinkdbdash';
var r = rConnect({db: 'test'});

async function test() {
  let connection = await r.connect('host');
  
  r.db('something').table<{ id:string, name:string }>('great').get('a').run(connection, (err, result) => {
    let id = result.id;
  });
  
  let instance = await r.db('something').table<{ id:string, name:string }>('great').get('a');
  
  let changes = await r.db('something').table<{ id:string, name:string }>('great').get('a').changes();
  changes.each((err, el) => console.log(el));
  
  let eqJoin = await r.db('something').table<{ id:string, name:string }>('great').eqJoin('left', r.db('that').table<{ num:number }>('other'));
  eqJoin.eachAsync(el => {
    el.left.id;
    el.right.num;
  });
  
  let a = 123;
  let b = await r.db('something').table<{ id:string, name:string }>('great').get('123')<{ something:boolean }>('subObject');
  let del = await r.db('something').table('a').delete({durability: 'hard'});
  let del2 = await r.db('something').table('a').get('123').replace((current) => {  });
}
