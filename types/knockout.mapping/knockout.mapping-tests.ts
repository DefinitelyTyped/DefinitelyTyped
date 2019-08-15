//variable tests and definitions

let userInputJS: User = { firstName: 'foo', lastName: 'bar', age: 12 };
interface User {
    firstName: string;
    lastName: string;
    age: number;
}

interface MappedUser {
    firstName: KnockoutObservable<string>;
    lastName: KnockoutObservable<string>;
    age: KnockoutObservable<number>;
}

let badUserMappingOptions: KnockoutMappingOptions<User> = {
    ignore: ['age'],
    include: ['name'],
    copy: ['height'],
    mappedProperties: ['age', 'name'],
    deferEvaluation: false,
    create: function (options: KnockoutMappingCreateOptions) { }, // $ExpectError
};

let userMappingOptions: KnockoutMappingOptions<User> = {
    ignore: ['age'],
    include: ['name'],
    copy: ['height'],
    mappedProperties: ['age', 'name'],
    deferEvaluation: false,
    firstName: { create: function (options: KnockoutMappingCreateOptions) { } },
};
let badMapping = {
    ignof3efere: ['age'],
    inclfefeude: ['name'],
}

// fromJS function with JS object

let mappedUserViewModel: MappedUser = mapping.fromJS(userInputJS); // $ExpectType any
mapping.fromJS(userInputJS, {}); // $ExpectType any
mapping.fromJS(userInputJS, {}, mappedUserViewModel); // $ExpectType any
mapping.fromJS(userInputJS, mappedUserViewModel); // $ExpectType any
mapping.fromJS(userInputJS, userMappingOptions, mappedUserViewModel); // $ExpectType any

let untypedObject: any = { age: 22 };
let untypedArrayObject: Array<any> = [2, 3];
mapping.fromJS(untypedObject); // $ExpectType any
mapping.fromJS(untypedArrayObject); // $ExpectType KnockoutObservableArray<any>

// fromJS function with JS array and primitives
let inputNumber = 3;
let inputString = "foo"
let inputBoolean = true;
let inputNumberArray = [3, 4, 67];

mapping.fromJS(inputNumber); // $ExpectType KnockoutObservable<number>
mapping.fromJS(inputString);  // $ExpectType KnockoutObservable<string>
mapping.fromJS(inputBoolean);  // $ExpectType KnockoutObservable<boolean>
let numberArrayViewModel = mapping.fromJS(inputNumberArray);  // $ExpectType KnockoutObservableArray<any>

// fromJSON function
interface nameObject {
    name: string
}

let nameObjectInput: nameObject = { name: 'bar' };
let nameObjectInputJSON = '{ name: "foo" }';

mapping.fromJSON(nameObjectInputJSON); // $ExpectType any
mapping.fromJSON(nameObjectInputJSON, {}); // $ExpectType any
mapping.fromJSON(nameObjectInputJSON, nameObjectInput); // $ExpectType any
mapping.fromJSON(nameObjectInputJSON, {}, nameObjectInput); // $ExpectType any

let userInputJSON = "{ firstName: 'foo', lastName: 'bar', age: 12 }";
mapping.fromJSON(userInputJSON, userMappingOptions, mappedUserViewModel); // $ExpectType any

// toJS function
let nameObject: nameObject = mapping.toJS(nameObjectInput);
mapping.toJS(nameObjectInput, {});

mapping.toJS<User>(mappedUserViewModel); // $ExpectType User
mapping.toJS<User>(mappedUserViewModel, {}); // $ExpectType User

mapping.toJS<number>(mappedUserViewModel); // $ExpectError
mapping.toJS<User>(inputString); // $ExpectError
mapping.toJS(ko.observable(2)); // $ExpectType number
mapping.toJS(numberArrayViewModel); // $ExpectType any[]

mapping.toJS(untypedObject); // $ExpectType any
mapping.toJS(ko.observableArray(untypedArrayObject)); // $ExpectType any[]

// toJSON function
mapping.toJSON(nameObjectInput); // $ExpectType string
mapping.toJSON(nameObjectInput, {}); // $ExpectType string
mapping.toJSON<MappedUser>(mappedUserViewModel, userMappingOptions); // $ExpectType string

// visitModel function
mapping.visitModel(nameObjectInput, function (x: any) { return x; }, {});
mapping.visitModel(nameObjectInput, function (x: any) { return x; }, { visitedObjects: null });
mapping.visitModel(nameObjectInput, function (x: any) { return x; }, { parentName: 'parent' });
mapping.visitModel(nameObjectInput, function (x: any) { return x; }, { ignore: ['age'] });
mapping.visitModel(nameObjectInput, function (x: any) { return x; }, { copy: ['height'] });
mapping.visitModel(nameObjectInput, function (x: any) { return x; }, { include: ['name'] });
mapping.visitModel(nameObjectInput, function (x: any) { return x; }, { visitedObjects: null, parentName: 'parent', ignore: ['age'], copy: ['height'], include: ['name'] });