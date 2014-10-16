/// <reference path="list.js.d.ts" />

//Example were found on http://listjs.com/examples/

//Existing list
var existingList = () => {
    var options: ListOptions = {
        valueNames: [ 'name', 'born' ]
    };
    var userList = new List('users', options);
};

var existingListAndAdd = () => {
    var options: ListOptions = {
        valueNames: [ 'name', 'born' ]
    };
    var values = [
        {
            name: "Martina Elm",
            born: 1986
        }
    ];

    var userList = new List('users', options, values);
    userList.add({
        name: "Gustaf Lindqvist",
        born: 1983
    });
};

var newList = () => {
    var options = {
        valueNames: [ 'name', 'born' ],
        item: '<li><h3 class="name"></h3><p class="born"></p></li>'
    };

    var values = [
        {
            name: 'Jonny Strömberg',
            born: 1986
        },
        {
            name: 'Jonas Arnklint',
            born: 1985
        },
        {
            name: 'Martina Elm',
            born: 1986
        }
    ];

    var userList = new List('users', options, values);

    userList.add({
        name: "Gustaf Lindqvist",
        born: 1983
    });
};

var addGetRemove = () => {
    var options = {
        valueNames: [ 'id', 'name', 'age', 'city' ]
    };

    var contactList = new List('contacts', options);

    var id: number = Math.floor(Math.random() * 110000);
    contactList.add({
        id: id,
        name: 'name',
        age: 25,
        city: 'Paris'
    });

    //get the item
    var item: Item = contactList.get('id', id)[0];
    var values = item.values();

    //update the values
    item.values({
        name: 'new ' + values.name,
        age: 26,
        city: 'Barcelona'
    });

    //remove the item from the list
    contactList.remove('id', id);
};