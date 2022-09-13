import * as errors from 'common-errors';

errors.log(new Error()); // $ExpectType Error
errors.log(new Error(), ''); // $ExpectType Error
errors.logError(new Error(), () => {}); // $ExpectType void

errors.prependCurrentStack(new Error()); // $ExpectType Error

// $ExpectType ErrorConstructor
errors.helpers.generateClass(
    'TestingError',
    {
        extends: new Error(),
        globalize: false,
        args: [],
        generateMessage: () => ''
    }
);

new errors.Error('Testing'); // $ExpectType Error
new errors.AlreadyInUseError('Nobody', 'nothing'); // $ExpectType AlreadyInUseError
new errors.ArgumentNullError('nothing'); // $ExpectType ArgumentNullError
new errors.AuthenticationRequiredError('nothing'); // $ExpectType AuthenticationRequiredError
new errors.ConnectionError('nothing'); // $ExpectType ConnectionError
new errors.HttpStatusError(404); // $ExpectType HttpStatusError
new errors.InvalidOperationError('nothing'); // $ExpectType InvalidOperationError
new errors.SocketError('nothing'); // $ExpectType SocketError
new errors.NotFoundError('nothing'); // $ExpectType NotFoundError
new errors.NotImplementedError('nothing'); // $ExpectType NotImplementedError
new errors.NotPermittedError('nothing'); // $ExpectType NotPermittedError
new errors.NotSupportedError('nothing'); // $ExpectType NotSupportedError
new errors.RangeError('nothing'); // $ExpectType RangeError
new errors.ReferenceError('nothing'); // $ExpectType ReferenceError
new errors.StackOverflowError('nothing'); // $ExpectType StackOverflowError
new errors.SyntaxError('nothing'); // $ExpectType SyntaxError
new errors.TimeoutError('0ms'); // $ExpectType TimeoutError
new errors.TypeError('nothing'); // $ExpectType TypeError
new errors.URIError('nothing'); // $ExpectType URIError
new errors.ValidationError('nothing', 'no code', 'no field'); // $ExpectType ValidationError

new errors.data.DataError('nothing'); // $ExpectType DataError
new errors.data.MemcachedError('nothing'); // $ExpectType MemcachedError
new errors.data.MongoDBError('nothing'); // $ExpectType MongoDBError
new errors.data.RedisError('nothing'); // $ExpectType RedisError
new errors.data.RollbackError('nothing'); // $ExpectType RollbackError
new errors.data.SQLError('nothing'); // $ExpectType SQLError
new errors.data.TransactionError('nothing'); // $ExpectType TransactionError

new errors.io.IOError('nothing'); // $ExpectType IOError
new errors.io.DirectoryNotFoundError('nothing'); // $ExpectType DirectoryNotFoundError
new errors.io.DriveNotFoundError('nothing'); // $ExpectType DriveNotFoundError
new errors.io.EndOfStreamError('nothing'); // $ExpectType EndOfStreamError
new errors.io.FileLoadError('nothing'); // $ExpectType FileLoadError
new errors.io.FileNotFoundError('nothing'); // $ExpectType FileNotFoundError
