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

// A result type for asMutable({ deep: false } | undefined)
interface NonDeepMutableExtendedUser {
    firstName: string;
    lastName: string;
    address: Immutable.Immutable<Address>;
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

    const date: Immutable.ImmutableDate = Immutable(new Date());

    // Constructing with a promise wraps the result value as an immutable
    const promise = new Promise<User>(resolve => resolve({
        firstName: 'Angry',
        lastName: 'Monkey',
    }));
    const immutablePromise = Immutable(promise);
    immutablePromise.then((user: Immutable.Immutable<User>) => user.asMutable());

    // Construction with Immutable() multiple times only creates an Immutable once
    const user3: Immutable.Immutable<User> = Immutable(Immutable(Immutable({
        firstName: 'Angry',
        lastName: 'Monkey',
    })));
    user3.asMutable();
    // Can't call asMutable() multiple times since there is only one level of immutability
    // user3.asMutable().asMutable();

    // Primitives are not made immutable
    const str: string = Immutable("Hello World");
    const num: number = Immutable(123);
    const bool: boolean = Immutable(true);
    const sym: symbol = Immutable(Symbol("A symbol"));
    const undef: undefined = Immutable(undefined);
    const nul: null = Immutable(null);
    const fun: () => User = Immutable((): User => ({
       firstName: 'Angry',
       lastName: 'Monkey',
    }));
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

    const immutableElement: Immutable.Immutable<User> = array[0];
    // $ExpectError
    immutableElement.firstName = 'Krusty';

    const asMutableDefault: Array<Immutable.Immutable<User>> = array.asMutable();
    // Can't mutate beyond 1 level deep (in this case only the array itself is mutable, not the items)
    // $ExpectError
    asMutableDefault[0].firstName = 'Krusty';

    const asMutableNotDeep: Array<Immutable.Immutable<User>> = array.asMutable({ deep: false });
    // Can't mutate beyond 1 level deep (in this case only the array itself is mutable, not the items)
    // $ExpectError
    asMutableNotDeep[0].firstName = 'Krusty';

    // Can mutate at any depth
    const asMutableDeep: User[] = array.asMutable({ deep: true });
    asMutableDeep[0].firstName = 'Krusty';

    const opaqueMutableParam = { deep: true };
    const asMutableOpaque: Array<User | Immutable.Immutable<User>> = array.asMutable(opaqueMutableParam);

    // keys. Call the mutable array's 'keys' to ensure compatability
    const mutableKeys = array.asMutable().keys();
    const keys: typeof mutableKeys = array.keys();

    // map. Call the mutable array's 'map' with the same function to ensure compatability. Make sure the output array is immutable.
    interface FirstName { firstNameOnly: string; }
    array.asMutable().map((value: User) => ({ firstNameOnly: value.firstName }));
    array
      .asMutable()
      .map((value: User, index) => ({ firstNameOnly: value.firstName, index }));
    array.asMutable().map((value: User, index, allUsers: User[]) => ({
      firstNameOnly: value.firstName,
      index,
      allUsers,
    }));
    const map: Immutable.Immutable<FirstName[]> = array.map((value: User) => ({ firstNameOnly: value.firstName }));
    map.asMutable();

    // filter. Call the mutable array's 'filter' with the same function to ensure compatability. Make sure the output array is immutable.
    array.asMutable().filter((value: User) => value.firstName === 'test');
    const filter: Immutable.Immutable<User[]> = array.filter((value: User) => value.firstName === 'test');
    filter.asMutable();

    // slice. Call the mutable array's 'slice' with the same args to ensure compatability. Make sure the output array is immutable.
    array.asMutable().slice();
    const slice1: Immutable.Immutable<User[]> = array.slice();
    slice1.asMutable();
    array.asMutable().slice(1);
    const slice2: Immutable.Immutable<User[]> = array.slice(1);
    slice2.asMutable();
    array.asMutable().slice(1, 2);
    const slice3: Immutable.Immutable<User[]> = array.slice(1, 2);
    slice3.asMutable();
    array.asMutable().slice(undefined, 2);
    const slice4: Immutable.Immutable<User[]> = array.slice(undefined, 2);
    slice4.asMutable();

    // concat. Call the mutable array's 'concat' with the same args to ensure compatability. Make sure the output array is immutable.
    array.asMutable().concat(Immutable({ firstName: 'Happy', lastName: 'Cat' }));
    const concat: Immutable.Immutable<User[]> = array
        .concat({ firstName: 'Happy', lastName: 'Cat' }, { firstName: 'Silly', lastName: 'Cat' })
        .concat([{firstName: 'saucy', lastName: 'Cat'}], {firstName: 'Fussy', lastName: 'Cat'})
        .concat([
            {firstName: 'Fancy', lastName: 'Cat'},
            {firstName: 'Sassy', lastName: 'Cat'}],
            [{firstName: 'Bossy', lastName: 'Cat'}
        ]);
    concat.asMutable();

    Immutable.from([1, 2, 3])
        .concat(Immutable.from([4, 5, 6])
        .concat([7, 8, 9]));

    // reduce. Call the mutable array's 'reduce' with the same function to ensure compatability. Make sure the output array is immutable.
    array.asMutable().reduce((previous, current) => ({ ...previous, lastName: current.lastName }));
    const reduce1: Immutable.Immutable<User> = array.reduce((previous, current) => ({ ...previous, lastName: current.lastName }));
    reduce1.asMutable();
    // NOTE: this is effectively a map function
    array.asMutable().reduce<FirstName[]>((previous, current) => previous.concat({ firstNameOnly: current.firstName }), []);
    const reduce2: Immutable.Immutable<FirstName[]> = array.reduce<FirstName[]>((previous, current) => previous.concat({ firstNameOnly: current.firstName }), []);
    reduce2.asMutable();

    // reduceRight. Call the mutable array's 'reduceRight' with the same function to ensure compatability. Make sure the output array is immutable.
    array.asMutable().reduceRight((previous, current) => ({ ...previous, lastName: current.lastName }));
    const reduceRight1: Immutable.Immutable<User> = array.reduceRight((previous, current) => ({ ...previous, lastName: current.lastName }));
    reduceRight1.asMutable();
    // NOTE: this is effectively a map function
    array.asMutable().reduceRight<FirstName[]>((previous, current) => previous.concat({ firstNameOnly: current.firstName }), []);
    const reduceRight2: Immutable.Immutable<FirstName[]> = array.reduceRight<FirstName[]>((previous, current) => previous.concat({ firstNameOnly: current.firstName }), []);
    reduceRight2.asMutable();

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
    interface ArrayToObjectResult {
        theFirstName: string;
    }
    const arrayToObject1: Immutable.Immutable<ArrayToObjectResult> = array.asObject<ArrayToObjectResult>((value) => ['theFirstName', value.firstName]);
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
    // Can't mutate beyond 1 level deep
    const mutableUser21 = immutableUserEx.asMutable();
    mutableUser21.firstName = 'Krusty';
    // $ExpectError
    mutableUser21.address.line1 = 'Example';

    // Can't mutate beyond 1 level deep
    const mutableUser22 = immutableUserEx.asMutable({ deep: false });
    mutableUser22.firstName = 'Krusty';
    // $ExpectError
    mutableUser22.address.line1 = 'Example';

    // Can mutate at any depth
    const mutableUser23: ExtendedUser = immutableUserEx.asMutable({ deep: true });
    mutableUser23.firstName = 'Krusty';
    mutableUser23.address.line1 = 'Example';

    const opaqueMutableParam = { deep: true }; // treats as { deep: boolean }
    const mutableUser24: ExtendedUser | NonDeepMutableExtendedUser = immutableUserEx.asMutable(opaqueMutableParam);

    // merge: merged part is strongly checked as a deeply partial object
    const mergedUser: Immutable.Immutable<User> = immutableUserEx.merge({ address: { line1: 'Small house' }, firstName: 'Jack' });
    // accepts merge config
    const mergedUser2: Immutable.Immutable<User> = immutableUserEx.merge({ address: { line1: 'Small house' }, firstName: 'Jack' }, { mode: 'merge', deep: true });

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

//
// Instance syntax: immutable date
// ---------------------------------------------------------------

{
    // ImmutableDate cannot access mutable methods like setDate, etc, but CAN access getDate().
    // Once we make it mutable (i.e, a regular Date), we can use those methods
    const immutableDate: Immutable.ImmutableDate = Immutable.from(new Date());
    // immutableDate.setDate(1);
    immutableDate.getDate();
    immutableDate.asMutable().setDate(1);

    const immutableDate2: Immutable.ImmutableDate = Immutable(new Date());
    // immutableDate2.setDate(1)
    immutableDate2.getDate();
    immutableDate2.asMutable().setDate(1);
}
