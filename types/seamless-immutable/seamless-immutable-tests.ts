import * as Immutable from 'seamless-immutable';

// Test types

interface User {
    firstName: string;
    lastName: string;
}

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
    }

    const arrayOfNumbers1: Immutable.ImmutableArray<number> = Immutable.from([0, 2]);
    const arrayOfNumbers2: Immutable.ImmutableArray<number> = Immutable([0, 2]);
    const user1: Immutable.ImmutableObject<User> = Immutable.from({
        firstName: 'Angry',
        lastName: 'Monkey'
    });
    const user2: Immutable.ImmutableObject<User> = Immutable({
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
    const data: {
        propertyId: string
    } = {
        propertyId: 'user.1'
    };

    // set: property name is strongly checked
    const updatedUser01: Immutable.ImmutableObject<User> = immutableUser.set('firstName', 'Whirlwind');
    const updatedUser02: Immutable.ImmutableObject<User> = immutableUser.set(data.propertyId, 'Whirlwind');

    // setIn: property path is strongly checked for up to 5 arguments (helps with refactoring and intellisense)
    // but will fall back to any[] if there are dynamic arguments on the way
    const updatedUser11: Immutable.ImmutableObject<ExtendedUser> = immutableUserEx.setIn(['address', 'line1'], 'Small house');
    const updatedUser12: Immutable.ImmutableObject<ExtendedUser> = immutableUserEx.setIn([ data.propertyId, 'line1' ], 'Small house');

    // asMutable
    const mutableUser21: User = immutableUser.asMutable();
    const mutableUser22: User = immutableUser.asMutable({ deep: true });

    // merge: merged part is strongly checked as a deeply partial object
    const mergedUser: Immutable.ImmutableObject<User> = immutableUserEx.merge({ address: { line1: 'Small house' }, firstName: 'Jack' });

    // update: property name is strongly checked
    const updatedUser41: Immutable.ImmutableObject<User> = immutableUser.update('firstName', x => x.toLowerCase() + ' Whirlwind');
    // the type of the updated value must be explicity specified in case of fallback
    const updatedUser42: Immutable.ImmutableObject<User> = immutableUser.update<string>(data.propertyId, x => x.toLowerCase() + ' Whirlwind');

    // updateIn: property path is strongly checked for up to 5 arguments (helps with refactoring and intellisense)
    // but will fall back to any[] if there are dynamic arguments on the way
    const updatedUser51: Immutable.ImmutableObject<User> = immutableUserEx.updateIn([ 'address', 'line1' ], x => x.toLowerCase() + ' 43');
    // the type of the updated value must be explicity specified in case of fallback
    const updatedUser52: Immutable.ImmutableObject<User> = immutableUserEx.updateIn<string>([ data.propertyId, 'line1' ], x => x.toLowerCase() + ' 43');

    // without
    const simpleUser1: Immutable.ImmutableObject<User> = immutableUserEx.without('address');

    // getIn: propertyPath is strongly typed up to 5 parameters
    const firstNameWithoutDefault = immutableUser.getIn(['firstName']); // infers Immutable<string>
    const firstNameWithDefault = immutableUser.getIn(['firstName'], ''); // infers Immutable<string>
    const firstNameWithDynamicPathWithoutDefault = immutableUser.getIn(['first' + 'name']);
    const firstNameWithDynamicPathWithDefault = immutableUser.getIn(['first' + 'name'], '');
    const line1WithoutDefault = immutableUserEx.getIn(['address', 'line1']);
    const line1WithDefault = immutableUserEx.getIn(['address', 'line1'], '');
}
