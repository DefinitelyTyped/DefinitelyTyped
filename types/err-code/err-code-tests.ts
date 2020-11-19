import errCode = require('err-code');

// test create without code
const err1 = errCode(new Error('err msg'), {
    prop1: 'prop1 value',
    prop2: {
        a: 'prop2.a value',
    }
});

const err1Message = err1.message;
const err1MProp1 = err1.prop1;
const err1MProp2a = err1.prop2.a;

// test create with code
const err2 = errCode(new Error('err msg'), 'Bad Request', {
    prop1: 'prop1 value',
    prop2: {
        a: 'prop2.a value',
    }
});

const err2Message = err2.message;
const err2MProp1 = err2.prop1;
const err2MProp2a = err2.prop2.a;
const err2Code = err2.code;

// test adding type constraint
const err3 = errCode<{
    prop1: string
    prop2: {
        a: string
    }
}>(new Error('err msg'), {
    prop1: 'prop1 value',
    prop2: {
        a: 'prop2.a value',
    }
});

const err3Message = err3.message;
const err3MProp1 = err3.prop1;
const err3MProp2a = err3.prop2.a;

// test null code
const err4 = errCode(new Error('err msg'), null, {
    prop1: 'prop1 value',
    prop2: {
        a: 'prop2.a value',
    }
});

const err4Message = err4.message;
const err4MProp1 = err4.prop1;
const err4MProp2a = err4.prop2.a;
