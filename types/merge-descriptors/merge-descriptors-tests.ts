import mixin = require('merge-descriptors');

function testAssertion(condition: boolean, errorMessage: string) {
    if (!condition) {
        throw new Error(errorMessage);
    }
}

interface MergedObject {
    InSrc?: string;
    name: string;
    InTarget: string;
}

const src = {
    InSrc: 'src',
    get name(): string {
        return 'from src name';
    }
};

const target: MergedObject = { name: 'my target name', InTarget: 'target' };

const target2 = mixin(target, src, true);

console.log(JSON.stringify(target));

testAssertion(target2 === target, "Returned object should refer to input [destination] object");
testAssertion(target.name === 'from src name', "[redfine]=true, source member will overwrite destination member");
testAssertion(target.InTarget === 'target', "overwrite do not affect members only in [destination]");
testAssertion(target['InSrc'] === 'src', "members from [source] must be copied to [destination]");

const nameProperty: PropertyDescriptor = Object.getOwnPropertyDescriptor(target, "name");
testAssertion(nameProperty.set === undefined, "member descriptor must be overwritten");
