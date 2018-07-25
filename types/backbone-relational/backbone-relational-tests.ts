import * as Backbone from 'backbone';

class House extends Backbone.RelationalModel {
    // The 'relations' property, on the House's prototype. Initialized separately for each
    // instance of House. Each relation must define (as a minimum) the 'type', 'key' and
    // 'relatedModel'. Options include 'includeInJSON', 'createModels' and 'reverseRelation'.

    relations = [
        {
            type: Backbone.HasMany, // Use the type, or the string 'HasOne' or 'HasMany'.
            key: 'occupants',
            relatedModel: 'Person',
            includeInJSON: true,
            collectionType: 'PersonCollection',
            reverseRelation: {
                key: 'livesIn'
            }
        }
    ];

}

class Person extends Backbone.RelationalModel {
    relations = [
        { // Create a (recursive) one-to-one relationship
            type: Backbone.HasOne,
            key: 'user',
            relatedModel: 'User',
            reverseRelation: {
                type: Backbone.HasOne,
                key: 'person'
            }
        }
    ];

    initialize()
    {
        // do whatever you want :)
    }
}

class User extends Backbone.RelationalModel {

}


var paul = new Person({
    id: 'person-1',
    name: 'Paul',
    user: { id: 'user-1', login: 'dude', email: 'me@gmail.com' }
});

// A User object is automatically created from the JSON; so 'login' returns 'dude'.
paul.get('user').get('login');

var ourHouse = new House({
    id: 'house-1',
    location: 'in the middle of the street',
    occupants: ['person-1', 'person-2', 'person-5']
});

// 'ourHouse.occupants' is turned into a Backbone.Collection of Persons.
// The first person in 'ourHouse.occupants' will point to 'paul'.
ourHouse.get('occupants').at(0); // === paul

// If a collection is created from a HasMany relation, it contains a reference
// back to the originator of the relation
ourHouse.get('occupants').livesIn; // === ourHouse

// The `occupants` relation on 'House' has been defined as a HasMany, with a reverse relation
// to `livesIn` on 'Person'. So, 'paul.livesIn' will automatically point back to 'ourHouse'.
paul.get('livesIn'); // === ourHouse

// You can control which relations get serialized to JSON, using the 'includeInJSON'
// property on a Relation. Also, each object will only get serialized once to prevent loops.
alert(JSON.stringify(paul.get('user').toJSON(), null, '\t'));
// Load occupants 'person-2' and 'person-5', which don't exist yet, from the server
ourHouse.fetchRelated('occupants');

// Use the `add` and `remove` events to listen for additions/removals on a HasMany relation.
// Here, we listen for changes to `ourHouse.occupants`.
ourHouse
    .on('add:occupants', function (model, coll)
    {
        console.log('add %o', model);
        // Do something. Create a View?
    })
    .on('remove:occupants', function (model, coll)
    {
        console.log('remove %o', model);
        // Do somehting. Destroy a View?
    });

// Use the 'update' event to listen for changes on a HasOne relation (like 'Person.livesIn').
paul.on('change:livesIn', function (model, attr)
{
    console.log('change `livesIn` to %o', attr);
});

// Modifying either side of a bi-directional relation updates the other side automatically.
// Take `paul` out or `ourHouse`; this triggers `remove:occupants` on `ourHouse`,
// and `change:livesIn` on `paul`
ourHouse.get('occupants').remove(paul);

alert('paul.livesIn=' + paul.get('livesIn'));
// Move into `theirHouse`; triggers 'add:occupants' on ourHouse, and 'change:livesIn' on paul

var theirHouse = new House({ id: 'house-2' });
paul.set({ 'livesIn': theirHouse });

alert('theirHouse.occupants=' + theirHouse.get('occupants').pluck('name'));