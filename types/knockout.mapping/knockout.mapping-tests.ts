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
    firstName: KnockoutObservable<string>
    age: KnockoutObservable<number>
    address: MappedAddress
}

interface MappedAddress {
    street: KnockoutObservable<string>
}

interface Car {
    name: string
    maintenance: number[]
    drivers: User[]
}

interface MappedCar {
    name: KnockoutObservable<string>
    maintenance: KnockoutObservableArray<number>
    drivers: KnockoutObservableArray<MappedUser>
}

let badUserMappingOptions: KnockoutMappingOptions<User> = {
    ignore: ["age"],
    include: ["name"],
    copy: ["height"],
    mappedProperties: ["age", "name"],
    deferEvaluation: false,
    create: (options: KnockoutMappingCreateOptions) => { }, // $ExpectError
}

let userMappingOptions: KnockoutMappingOptions<User> = {
    ignore: ["age"],
    include: ["name"],
    copy: ["height"],
    mappedProperties: ["age", "name"],
    deferEvaluation: false,
    firstName: { create: (options: KnockoutMappingCreateOptions) => { } },
}
let badMapping = {
    ignof3efere: ["age"],
    inclfefeude: ["name"],
}

////////////////////////////////
// fromJS function with JS object without Array properties
let userInput: User = { firstName: "foo", age: 12, address: { street: "street name" } }

let mappedUserViewModel: MappedUser = mapping.fromJS(userInput) // $ExpectType KnockoutObservableType<User>
mappedUserViewModel.age // $ExpectType KnockoutObservable<number>

mapping.fromJS(userInput, {}) // $ExpectType KnockoutObservableType<User>
mapping.fromJS(userInput, {}, mappedUserViewModel) // $ExpectType KnockoutObservableType<User>
mapping.fromJS(userInput, mappedUserViewModel) // $ExpectType KnockoutObservableType<User>
mapping.fromJS(userInput, userMappingOptions, mappedUserViewModel) // $ExpectType KnockoutObservableType<User>
mapping.fromJS(userInput, {}, userInput) // $ExpectError
mapping.fromJS(userInput, userInput) // $ExpectError

let untypedObject: any = { age: 22 }
mapping.fromJS(untypedObject) // $ExpectType any

////////////////////////////////
// fromJS function with JS object with Array properties

let carInput: Car = { name: "hb20x", maintenance: [1, 2], drivers: [userInput] }
let mappedCar: MappedCar = mapping.fromJS(carInput)
let drivers: KnockoutObservableArray<MappedUser> = mappedCar.drivers

////////////////////////////////
// fromJS function with primitives
let numberInput = 3
let stringInput = "foo"
let booleanInput: boolean

mapping.fromJS(numberInput) // $ExpectType KnockoutObservable<number>
mapping.fromJS(stringInput) // $ExpectType KnockoutObservable<string>

// Typescript weirdly returns KnockoutObservable<false> | KnockoutObservable<true>
let booleanMapped: KnockoutObservable<boolean> = mapping.fromJS(booleanInput)

////////////////////////////////
// fromJS function with JS Array
let userArrayInput = [userInput]
let untypedArrayObject: any[] = [2, 3]
let numberArrayInput = [3, 4, 67]

mapping.fromJS(userArrayInput) // $ExpectType KnockoutObservableArray<KnockoutObservableType<User>>
mapping.fromJS(userArrayInput, {}) // $ExpectType KnockoutObservableArray<KnockoutObservableType<User>>
mapping.fromJS(userArrayInput, {}, userArrayInput) // $ExpectError
mapping.fromJS(untypedArrayObject) // $ExpectType KnockoutObservableArray<any> | KnockoutObservableArray<KnockoutObservableType<any>>

let mappedNumberArrayViewModel = mapping.fromJS(numberArrayInput)  // $ExpectType KnockoutObservableArray<number>
mapping.fromJS(numberArrayInput, {}, mappedNumberArrayViewModel) // $ExpectType KnockoutObservableArray<number>
mapping.fromJS(numberArrayInput, {}, {}) // $ExpectError

////////////////////////////////
// fromJSON function
interface nameObject {
    name: string
}

let nameObjectInput: nameObject = { name: "bar" }
let nameObjectInputJSON = '{ name: "foo" }'

mapping.fromJSON(nameObjectInputJSON) // $ExpectType any
mapping.fromJSON(nameObjectInputJSON, {}) // $ExpectType any
mapping.fromJSON(nameObjectInputJSON, nameObjectInput) // $ExpectType any
mapping.fromJSON(nameObjectInputJSON, {}, nameObjectInput) // $ExpectType any

let userInputJSON = "{ firstName: 'foo', age: 12 }"
mapping.fromJSON(userInputJSON, userMappingOptions, mappedUserViewModel) // $ExpectType any

////////////////////////////////
// toJS function

mapping.toJS<User>(mappedUserViewModel) // $ExpectType User
mapping.toJS<User>(mappedUserViewModel, {}) // $ExpectType User
mapping.toJS<number>(mappedUserViewModel) // $ExpectError
mapping.toJS<User>(stringInput) // $ExpectError

mapping.toJS(ko.observable(2)) // $ExpectType number
mapping.toJS(mappedNumberArrayViewModel) // $ExpectType number[]
mapping.toJS(untypedObject) // $ExpectType any
mapping.toJS(ko.observableArray(untypedArrayObject)) // $ExpectType any[]

// implicit type doesn't work for objects with properties that are objects. $ExpectError not working also, so commented out the rule
// let unmmapedUser: User = mapping.toJS(mappedUserViewModel) 

////////////////////////////////
// toJSON function
mapping.toJSON(nameObjectInput) // $ExpectType string
mapping.toJSON(nameObjectInput, {}) // $ExpectType string
mapping.toJSON<MappedUser>(mappedUserViewModel, userMappingOptions) // $ExpectType string

////////////////////////////////
// visitModel function
mapping.visitModel(nameObjectInput, (x: any) => x, {})
mapping.visitModel(nameObjectInput, (x: any) => x, { visitedObjects: null })
mapping.visitModel(nameObjectInput, (x: any) => x, { parentName: "parent" })
mapping.visitModel(nameObjectInput, (x: any) => x, { ignore: ["age"] })
mapping.visitModel(nameObjectInput, (x: any) => x, { copy: ["height"] })
mapping.visitModel(nameObjectInput, (x: any) => x, { include: ["name"] })
mapping.visitModel(nameObjectInput, (x: any) => x, { visitedObjects: null, parentName: "parent", ignore: ["age"], copy: ["height"], include: ["name"] })