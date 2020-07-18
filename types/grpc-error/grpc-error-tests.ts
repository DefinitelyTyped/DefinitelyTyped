import GRPCError = require('grpc-error');

const error1 = new GRPCError('test');
const error2 = new GRPCError({status_code: 'invalid'});
const error3 = new GRPCError('test', 12);
const error4 = new GRPCError('test', {status_code: 'invalid'});
const error5 = new GRPCError('test', 12, {status_code: 'invalid'});
