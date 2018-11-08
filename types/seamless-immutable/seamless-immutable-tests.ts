import Immutable = require('seamless-immutable');

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

    const arrayOfNumbers1: Immutable.Immutable<number[]> = Immutable.from([0, 2]);
    const arrayOfNumbers2: Immutable.Immutable<number[]> = Immutable([0, 2]);
    const user1: Immutable.Immutable<User> = Immutable.from({
        firstName: 'Angry',
        lastName: 'Monkey'
    });
    const user2: Immutable.Immutable<User> = Immutable({
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
    const user1: Immutable.Immutable<User> = Immutable.from({
        firstName: 'Angry',
        lastName: 'Monkey'
    });
    const replacedUser01 = Immutable.replace(user1, { firstName: 'Super', lastName: 'Monkey' });
    const replacedUser02 = Immutable.replace(user1, { firstName: 'Super', lastName: 'Monkey' }, { deep: true });
}

//
// Instance syntax: immutable array
// ---------------------------------------------------------------
{
    const array: Immutable.Immutable<User[]> = Immutable.from([ { firstName: 'Angry', lastName: 'Monkey' } ]);

    // asMutable
    const mutableArray1: User[] = array.asMutable();
    const mutableArray2: User[] = array.asMutable({ deep: true });

    // flatMap
    const flatMappedArray: Immutable.Immutable<User[]> = array.flatMap((value: User) =>
        [value, value]
    );

    const flatMappedArrayStrings: Immutable.Immutable<string[]> = array.flatMap((value: User) =>
        value.firstName
    );

    // asObject
    const arrayToObject1: Immutable.Immutable<object> = array.asObject((value) => [value.toString(), value]);
}

//
// Instance syntax: immutable object
// ---------------------------------------------------------------

{
    const immutableUser: Immutable.Immutable<User> = Immutable.from({
        firstName: 'Pure',
        lastName: 'Gold'
    });
    const immutableUserEx: Immutable.Immutable<ExtendedUser> = Immutable.from({
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
    const updatedUser01: Immutable.Immutable<User> = immutableUser.set('firstName', 'Whirlwind');
    const updatedUser02: Immutable.Immutable<User> = immutableUser.set(data.propertyId, 'Whirlwind');

    // setIn: property path is strongly checked for up to 5 arguments (helps with refactoring and intellisense)
    // but will fall back to any[] if there are dynamic arguments on the way
    const updatedUser11: Immutable.Immutable<ExtendedUser> = immutableUserEx.setIn(['address', 'line1'], 'Small house');
    const updatedUser12: Immutable.Immutable<ExtendedUser> = immutableUserEx.setIn([ data.propertyId, 'line1' ], 'Small house');

    // asMutable
    const mutableUser21: User = immutableUser.asMutable();
    const mutableUser22: User = immutableUser.asMutable({ deep: true });

    // merge: merged part is strongly checked as a deeply partial object
    const mergedUser: Immutable.Immutable<User> = immutableUserEx.merge({ address: { line1: 'Small house' }, firstName: 'Jack' });

    // update: property name is strongly checked
    const updatedUser41: Immutable.Immutable<User> = immutableUser.update('firstName', x => x.toLowerCase() + ' Whirlwind');
    // the type of the updated value must be explicity specified in case of fallback
    const updatedUser42: Immutable.Immutable<User> = immutableUser.update<string>(data.propertyId, x => x.toLowerCase() + ' Whirlwind');

    // updateIn: property path is strongly checked for up to 5 arguments (helps with refactoring and intellisense)
    // but will fall back to any[] if there are dynamic arguments on the way
    const updatedUser51: Immutable.Immutable<User> = immutableUserEx.updateIn([ 'address', 'line1' ], x => x.toLowerCase() + ' 43');
    // the type of the updated value must be explicity specified in case of fallback
    const updatedUser52: Immutable.Immutable<User> = immutableUserEx.updateIn<string>([ data.propertyId, 'line1' ], x => x.toLowerCase() + ' 43');

    // without
    const simpleUser1: Immutable.Immutable<User> = immutableUserEx.without('address');

    // getIn: propertyPath is strongly typed up to 5 parameters
    const firstNameWithoutDefault: string = immutableUser.getIn(['firstName']); // infers Immutable<string>
    const firstNameWithDefault = immutableUser.getIn(['firstName'], ''); // infers Immutable<string>
    const firstNameWithDynamicPathWithoutDefault = immutableUser.getIn(['first' + 'name']);
    const firstNameWithDynamicPathWithDefault = immutableUser.getIn(['first' + 'name'], '');
    const line1WithoutDefault = immutableUserEx.getIn(['address', 'line1']);
    const line1WithDefault = immutableUserEx.getIn(['address', 'line1'], '');

    // replace
    const replacedUser01 = immutableUser.replace({ firstName: 'Super', lastName: 'Monkey' });
    const replacedUser02 = immutableUser.replace({ firstName: 'Super', lastName: 'Monkey' }, { deep: true });
}
