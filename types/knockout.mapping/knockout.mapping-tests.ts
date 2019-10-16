import * as ko from 'knockout';
import * as mapping from 'knockout.mapping';

////////////////////////////////
// variable tests and definitions
interface User {
    firstName: string
    age: number
    address: Address
}

interface Address {
    street: string
}

interface MappedUser {
    firstName: ko.Observable<string>
    age: ko.Observable<number>
    address: MappedAddress
}

interface MappedAddress {
    street: ko.Observable<string>
}

interface Car {
    name: string
    maintenance: ReadonlyArray<number>
    drivers: User[]
}

interface MappedCar {
    name: ko.Observable<string>
    maintenance: ko.ObservableArray<number>
    drivers: ko.ObservableArray<MappedUser>
}

const badUserMappingOptions: KnockoutMappingOptions<User> = {
    ignore: ['age'],
    include: ['name'],
    copy: ['height'],
    mappedProperties: ['age', 'name'],
    deferEvaluation: false,
    create: (options: KnockoutMappingCreateOptions) => { }, // $ExpectError
}

const userMappingOptions: KnockoutMappingOptions<User> = {
    ignore: ['age'],
    include: ['name'],
    copy: ['height'],
    mappedProperties: ['age', 'name'],
    deferEvaluation: false,
    firstName: { create: (options: KnockoutMappingCreateOptions) => { } },
}
const badMapping = {
    ignof3efere: ['age'],
    inclfefeude: ['name'],
}

////////////////////////////////
// fromJS function with JS object without Array properties
const userInput: User = { firstName: 'foo', age: 12, address: { street: 'street name' } }

const mappedUserViewModel: MappedUser = mapping.fromJS(userInput) // $ExpectType KnockoutObservableType<User>
mappedUserViewModel.age // $ExpectType Observable<number>

mapping.fromJS(userInput, {}) // $ExpectType KnockoutObservableType<User>
mapping.fromJS(userInput, {}, mappedUserViewModel) // $ExpectType KnockoutObservableType<User>
mapping.fromJS(userInput, mappedUserViewModel) // $ExpectType KnockoutObservableType<User>
mapping.fromJS(userInput, userMappingOptions, mappedUserViewModel) // $ExpectType KnockoutObservableType<User>
mapping.fromJS(userInput, {}, userInput) // $ExpectError
mapping.fromJS(userInput, userInput) // $ExpectError

const untypedObject: any = { age: 22 }
mapping.fromJS(untypedObject) // $ExpectType any

////////////////////////////////
// fromJS function with JS object with Array properties
const carInput: Car = { name: 'hb20x', maintenance: [1, 2], drivers: [userInput] }
const mappedCar: MappedCar = mapping.fromJS(carInput)
const drivers: ko.ObservableArray<MappedUser> = mappedCar.drivers
const maintenance: ko.ObservableArray<number> = mappedCar.maintenance

////////////////////////////////
// fromJS function with primitives
// tslint:disable-next-line: prefer-const
let numberInput: number
// tslint:disable-next-line: prefer-const
let stringInput: string
// tslint:disable-next-line: prefer-const
let booleanInput: boolean
// tslint:disable-next-line: prefer-const
let symbolInput: symbol

mapping.fromJS(numberInput) // $ExpectType Observable<number>
mapping.fromJS(stringInput) // $ExpectType Observable<string>
mapping.fromJS(symbolInput) // $ExpectType Observable<symbol>

// Typescript weirdly returns ko.Observable<false> | ko.Observable<true>
const booleanMapped: ko.Observable<boolean> = mapping.fromJS(booleanInput)

////////////////////////////////
// fromJS function with JS Array
const userArrayInput = [userInput]
// tslint:disable-next-line: prefer-const
let untypedArrayObject: any[]
// tslint:disable-next-line: prefer-const
let numberArrayInput: number[]

mapping.fromJS(userArrayInput) // $ExpectType ObservableArray<KnockoutObservableType<User>>
mapping.fromJS(userArrayInput, {}) // $ExpectType ObservableArray<KnockoutObservableType<User>>
mapping.fromJS(userArrayInput, {}, userArrayInput) // $ExpectError

// Could not solve this issue. Could not get this to return any when T is any. It returns a Union type of the possible values.
mapping.fromJS(untypedArrayObject) // $ExpectType ObservableArray<any> | ObservableArray<KnockoutObservableType<any>>

const mappedNumberArrayViewModel = mapping.fromJS(numberArrayInput)  // $ExpectType ObservableArray<number>
mapping.fromJS(numberArrayInput, {}, mappedNumberArrayViewModel) // $ExpectType ObservableArray<number>
mapping.fromJS(numberArrayInput, mappedNumberArrayViewModel) // $ExpectType ObservableArray<number>



////////////////////////////////
// fromJSON function
interface nameObject {
    name: string
}

const nameObjectInput: nameObject = { name: 'bar' }
const nameObjectInputJSON = '{ name: "foo" }'

mapping.fromJSON(nameObjectInputJSON) // $ExpectType any
mapping.fromJSON(nameObjectInputJSON, {}) // $ExpectType any
mapping.fromJSON(nameObjectInputJSON, nameObjectInput) // $ExpectType any
mapping.fromJSON(nameObjectInputJSON, {}, nameObjectInput) // $ExpectType any

const userInputJSON = "{ firstName: 'foo', age: 12 }"
mapping.fromJSON(userInputJSON, userMappingOptions, mappedUserViewModel) // $ExpectType any

////////////////////////////////
// toJS function

mapping.toJS<User>(mappedUserViewModel) // $ExpectType User
mapping.toJS<User>(mappedUserViewModel, {}) // $ExpectType User

// Here the method isn't typed literally, it has implicit type. Unfortunatly the typing fails to properly type object properties that are object themselves.
// Could not solve this issue.
const unmmapedUser: User = mapping.toJS(mappedUserViewModel) // $ExpectError

mapping.toJS<number>(mappedUserViewModel) // $ExpectError
mapping.toJS<User>(stringInput) // $ExpectError

mapping.toJS(ko.observable(2)) // $ExpectType number
mapping.toJS(mappedNumberArrayViewModel) // $ExpectType number[]
mapping.toJS(untypedObject) // $ExpectType any
mapping.toJS(ko.observableArray(untypedArrayObject)) // $ExpectType any[]


////////////////////////////////
// toJSON function
mapping.toJSON(nameObjectInput) // $ExpectType string
mapping.toJSON(nameObjectInput, {}) // $ExpectType string
mapping.toJSON<MappedUser>(mappedUserViewModel, userMappingOptions) // $ExpectType string

////////////////////////////////
// visitModel function
mapping.visitModel(nameObjectInput, (x: any) => x, {})
mapping.visitModel(nameObjectInput, (x: any) => x, { visitedObjects: null })
mapping.visitModel(nameObjectInput, (x: any) => x, { parentName: 'parent' })
mapping.visitModel(nameObjectInput, (x: any) => x, { ignore: ['age'] })
mapping.visitModel(nameObjectInput, (x: any) => x, { copy: ['height'] })
mapping.visitModel(nameObjectInput, (x: any) => x, { include: ['name'] })
mapping.visitModel(nameObjectInput, (x: any) => x, { visitedObjects: null, parentName: 'parent', ignore: ['age'], copy: ['height'], include: ['name'] })
