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

    const arrayOfNumbers: number[] & Immutable.ImmutableArray<number> = Immutable.from([0, 2]);
    const user: User & Immutable.ImmutableObject<User> = Immutable.from({
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
    const array: User[] & Immutable.ImmutableArray<User> = Immutable.from<User>([ { firstName: 'Angry', lastName: 'Monkey' } ]);

    // asMutable
    const mutableArray1: User[] = array.asMutable();
    const mutableArray2: User[] = array.asMutable({ deep: true });

    // flatMap
    const flatMappedArray: User[] & Immutable.ImmutableArray<User> = array.flatMap((value: User) =>
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

    // setIn: property path is strongly checked for up to 4 arguments
    const updatedUser2: Immutable.ImmutableObject<ExtendedUser> = immutableUserEx.setIn(['address', 'line1'], 'Small house');

    // asMutable
    const mutableUser1: User = immutableUser.asMutable();
    const mutableUser2: User = immutableUser.asMutable({ deep: true });

    // merge: merged part is strongly checked as a deeply partial object
    const mergedUser: Immutable.ImmutableObject<User> = immutableUserEx.merge({ address: { line1: 'Small house' }, firstName: 'Jack' });
}

const updatedUser: Immutable.ImmutableObject<ExtendedUser> = extUser.update("firstName", (firstName): string =>
    firstName + "hehe"
);
const updatedInUser: Immutable.ImmutableObject<ExtendedUser> = extUser.updateIn(["address", "line1"], (line): string =>
    line + "new address"
);
const userWithoutAddress: Immutable.ImmutableObject<User> = extUser.without("address");
