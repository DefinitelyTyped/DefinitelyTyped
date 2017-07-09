import * as Immutable from 'seamless-immutable';

// Test types

interface User {
    firstName: string;
    lastName: string;
};

interface Address {
    line1: string;
}

interface ExtendedUser extends User {
    address: Address;
}

//
// Constructors
// ---------------------------------------------------------------

{
    interface User {
        firstName: string;
        lastName: string;
    };

    const arrayOfNumbers: Immutable.ImmutableArray<number> = Immutable.from([0, 2]);
    const user: Immutable.ImmutableObject<User> = Immutable.from({
        firstName: 'Angry',
        lastName: 'Monkey'
    });
    const error: Error = Immutable.ImmutableError('error');
}

//
// Static utilities
// ---------------------------------------------------------------

{
    const isImmutable: boolean = Immutable.isImmutable(Immutable.from([0, 2]));
}

//
// Instance syntax: immutable array
// ---------------------------------------------------------------
{
    const array: Immutable.ImmutableArray<User> = Immutable.from<User>([ { firstName: 'Angry', lastName: 'Monkey' } ]);

    // asMutable
    const mutableArray1: User[] = array.asMutable();
    const mutableArray2: User[] = array.asMutable({ deep: true });

    // flatMap
    const flatMappedArray: Immutable.ImmutableArray<User> = array.flatMap((value: User) =>
        [value, value]
    );

    // asObject
    const arrayToObject1: Immutable.ImmutableObject<any> = array.asObject((value) => [value.toString(), value]);
}

//
// Instance syntax: immutable object
// ---------------------------------------------------------------

{
    const immutableUser: Immutable.ImmutableObject<User> = Immutable.from({
        firstName: 'Pure',
        lastName: 'Gold'
    });
    const immutableUserEx: Immutable.ImmutableObject<ExtendedUser> = Immutable.from({
        firstName: 'Hairy',
        lastName: 'Dog',
        address: {
            line1: 'Big house'
        }
    });

    // set: property name is strongly checked
    const updatedUser: Immutable.ImmutableObject<User> = immutableUser.set('firstName', 'Whirlwind');

    // setIn: property path is strongly checked for up to 5 arguments
    const updatedUser2: Immutable.ImmutableObject<ExtendedUser> = immutableUserEx.setIn(['address', 'line1'], 'Small house');

    // asMutable
    const mutableUser1: User = immutableUser.asMutable();
    const mutableUser2: User = immutableUser.asMutable({ deep: true });

    // merge: merged part is strongly checked as a deeply partial object
    const mergedUser: Immutable.ImmutableObject<User> = immutableUserEx.merge({ address: { line1: 'Small house' }, firstName: 'Jack' });

    // update: property name is strongly checked
    const updatedUser3: Immutable.ImmutableObject<User> = immutableUser.update('firstName', x => x.toLowerCase() + ' Whirlwind');

    // updateIn: property path is strongly checked for up to 5 arguments
    const updatedUser4: Immutable.ImmutableObject<User> = immutableUserEx.updateIn([ 'address', 'line1' ], x => x.toLowerCase() + ' 43');

    // without: the return type must be specified explicitly or it will be `any`
    const simpleUser1: Immutable.ImmutableObject<any> = immutableUserEx.without('address');
    const simpleUser2: Immutable.ImmutableObject<User> = immutableUserEx.without<User>('address');
    const simpleUser3: Immutable.ImmutableObject<any> = immutableUserEx.without('firstName', 'lastName');
}
