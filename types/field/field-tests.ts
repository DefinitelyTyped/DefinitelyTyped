// From https://github.com/jprichardson/field/blob/e968fd979ba1a06e35571695ddfdad513e516eae/README.md


import * as field from 'field';

// get

const config = {
    environment: {
        production: {
            port: 80
        }
    }
}

console.log(field.get(config, 'environment:production:port'))
// => 80

// set

var database: any = {}

console.log(field.get(database, 'production.port'))
// => undefined

// will return undefined since it never existed before
field.set(database, 'production.port', 27017)
console.log(database.production.port)
// => 27017
