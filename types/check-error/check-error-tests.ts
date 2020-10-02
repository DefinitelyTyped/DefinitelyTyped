import * as checkError from 'check-error';

const errorInstance = new Error('I am an instance');
const sameInstance = errorInstance;
const otherInstance = new Error('I an another instance');
const derivedInstance = new TypeError('I inherit from Error');
const thrownMessage = 'Imagine I have been thrown';

class CustomError extends Error {
    constructor(message?: string) {
        super(message);
    }
}

const customError = new CustomError();

// compatibleInstance()
// $ExpectType boolean
checkError.compatibleInstance(errorInstance, sameInstance);
checkError.compatibleInstance(errorInstance, otherInstance);

checkError.compatibleInstance(customError, errorInstance);
checkError.compatibleInstance(errorInstance, customError);

// compatibleConstructor()
// $ExpectType boolean
checkError.compatibleConstructor(errorInstance, sameInstance);
checkError.compatibleConstructor(errorInstance, otherInstance);
checkError.compatibleConstructor(derivedInstance, errorInstance);
checkError.compatibleConstructor(errorInstance, derivedInstance);

checkError.compatibleConstructor(errorInstance, Error);
checkError.compatibleConstructor(derivedInstance, TypeError);
checkError.compatibleConstructor(errorInstance, TypeError);

checkError.compatibleConstructor(customError, errorInstance);
checkError.compatibleConstructor(errorInstance, customError);

// compatibleMessage()
// $ExpectType boolean
checkError.compatibleMessage(errorInstance, /instance$/);
checkError.compatibleMessage(derivedInstance, /Error$/);
checkError.compatibleMessage(errorInstance, /unicorn$/);
checkError.compatibleMessage(derivedInstance, /dinosaur$/);
checkError.compatibleMessage(customError, /dinosaur$/);

checkError.compatibleMessage(errorInstance, 'instance');
checkError.compatibleMessage(derivedInstance, 'Error');
checkError.compatibleMessage(errorInstance, 'unicorn');
checkError.compatibleMessage(derivedInstance, 'dinosaur');
checkError.compatibleMessage(customError, 'def');

// constructorName()
// $ExpectType string
checkError.getConstructorName(errorInstance);
checkError.getConstructorName(derivedInstance);

checkError.getConstructorName(Error);
checkError.getConstructorName(TypeError);

checkError.getConstructorName(Error);
checkError.getConstructorName(TypeError);
checkError.getConstructorName(CustomError);
checkError.getConstructorName(customError);

// getMessage()
// $ExpectType string
checkError.getMessage(errorInstance);
checkError.getMessage(derivedInstance);

checkError.getMessage(thrownMessage);
