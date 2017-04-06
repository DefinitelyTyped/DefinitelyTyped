import swig = require('swig');

var swigObj: swig.Swig;
var value: any;
var str: string;
var num: number;
var bool: boolean;

function replaceMs(input:string): string {
    return input.replace(/m/g, 'f');
}

var opts: swig.SwigOptions = {
    autoescape: bool,
    cache: value,
    cmtControls: ["", ""],
    loader: swig.loaders.fs(),
    locals: { testVal: "my test" },
    tagControls: ["", ""],
    varControls: ["", ""]
};

swig.setDefaults(opts);
swig.setDefaultTZOffset(num);
swigObj = new swig.Swig(opts);
str = swig.compileFile(str)();
swig.compileFile(str, {}, function (err: Error, render: (locals: any) => string) {
    str = render({});
});
str = swig.compile(str)();
str = swig.compile(str, opts)();
swig.invalidateCache();
swig.setFilter("replaceMs", replaceMs);
swig.setTag('tacos', function (): boolean { return true; }, function (): string { return 'Tacos' }, true, true);
swig.setExtension("test", function (v: string) { return 'test: ' + v });
value = swig.precompile(str, opts);
str = swig.render(str, opts);
str = swig.renderFile(str, {});
swig.renderFile(str, {}, function (err: Error, output: string) {

});
console.log(swig.version);


str = swigObj.compileFile(str)();
swigObj.compileFile(str, opts, function (err: Error, render: (locals: any) => string) {
    str = render({});
});
str = swigObj.compile(str)();
str = swigObj.compile(str, opts)();
swigObj.invalidateCache();
swigObj.setFilter("replaceMs", replaceMs);
swigObj.setTag('tacos', function (): boolean { return true; }, function (): string { return 'Tacos' }, true, true);
swigObj.setExtension("test", function (v: string) { return 'test: ' + v });
value = swigObj.precompile(str, opts);
str = swigObj.render(str, opts);
str = swigObj.renderFile(str, {});
swigObj.renderFile(str, {}, function (err: Error, output: string) {

});