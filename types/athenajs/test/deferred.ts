import { Deferred } from 'athenajs';

let def: Deferred;

// static Deferred.resolve
Deferred.resolve(true).then(() => {
    console.log('resolved');
})
    .then(() => {
        console.log('resolved');
    });

def = new Deferred();

// resolve/reject
def.resolve(10);

def = new Deferred();
def.reject(false);
def.promise.then(() => {
    console.log('done');
})
    .then(() => {
        console.log('real done');
    })
    .catch(() => {
        console.log('oops');
    });
