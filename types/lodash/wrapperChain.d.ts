import _ = require("./index");
declare function wrapperChain<T>(this: _.LoDashWrapper<T>): _.CollectionChain<any> & _.FunctionChain<any> & _.ObjectChain<any> & _.PrimitiveChain<any> & _.StringChain;
export = wrapperChain;
