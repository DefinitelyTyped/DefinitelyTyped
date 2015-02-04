///<reference path="tv4.d.ts" />

var str:string;
var strArr:string[];
var bool:boolean;
var num:number;
var obj:any;
var tv4:TV4;
var err:TV4Error;
var errs:TV4Error[];
var single:TV4SingleResult;
var multi:TV4MultiResult;

single = tv4.validateResult(obj, obj);
bool = single.valid;
strArr = single.missing;
err = single.error;

num = err.code;
str = err.message;
str = err.dataPath;
str = err.schemaPath;

multi = tv4.validateMultiple(obj, obj);
bool = multi.valid;
strArr = multi.missing;
errs = multi.errors;

bool = tv4.addSchema(str, obj);
obj = tv4.getSchema(str);
obj = tv4.normSchema(str, str);
str = tv4.resolveUrl(str, str);

tv4 = tv4.freshApi();
tv4.dropSchemas();
tv4.reset();

strArr = tv4.getMissingUris(/abc/);
strArr = tv4.getSchemaUris(/abc/);
obj = tv4.getSchemaMap()[str];
num = tv4.errorCodes['bla'];

num = tv4.errorCodes['MY_NAME'];
