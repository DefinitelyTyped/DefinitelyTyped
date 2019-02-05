import * as sass from 'node-sass';

console.log(sass.info);

const syncImporter: sass.SyncImporter = function(url, prev) {
  if (url.startsWith('!')) {
    return sass.NULL;
  }
  if (url.endsWith('?')) {
    return sass.types.Error("cannot question mark");
  }
  console.log(typeof this.callback); // "undefined"
  return { file: [prev, url].join('/') };
};

const asyncImporter: sass.AsyncImporter = function(url, prev, done) {
  if (url.startsWith('!')) {
    // shouldn't really call twice, just checking for compiler validity
    done(null);
    done(sass.NULL);
  }
  if (url.endsWith('?')) {
    // shouldn't really call twice, just checking for compiler validity
    done(new sass.types.Error('Cannot accept this file'));
    done(new Error('Cannot accept this file'));
  } else {
    console.log(this.options.file); // "string"
    console.log(typeof this.callback); // "function"
    done({ file: [prev, url].join('/') });
  }
};

const anotherAsyncImporter: sass.AsyncImporter = function (url, prev, done) {
  someAsyncFunction(url, prev, function (result) {
    if (result == null) {
      // return null to opt out of handling this path
      // compiler will fall to next importer in array (or its own default)
      done(null);
    }
    // only one of them is required, see section Special Behaviors.
    done({ file: result.path });
    done({ contents: result.data });
  });
}

const handleAsyncResult: sass.SassRenderCallback = function(error, result) { // node-style callback from v3.0.0 onwards
  if (error) {
    console.log(error.status, error.column, error.message, error.line);
  }
  else {
    console.log(result.stats);
    console.log(result.css.toString());
    console.log(result.map.toString());
    // or better
    console.log(JSON.stringify(result.map)); // note, JSON.stringify accepts Buffer too
  }
};

const syncFunction: Record<string, sass.SyncSassFn> = {
  "pow($base, $exp)": function ($base, $exp) {
    console.log(this.options.file); // "string"
    console.log(typeof this.callback); // "undefined"
    if ($base instanceof sass.types.Number && $exp instanceof sass.types.Number) {
      if ($base.getUnit() !== "" || $exp.getUnit() !== "") {
        throw new Error("Cannot have units in an exponent");
      }
      return new sass.types.Number(Math.pow($base.getValue(), $exp.getValue()));
    } else {
      throw new Error("Number expected");
    }
  }
};

const syncVarArg: Record<string, sass.SyncSassVarArgFn3> = {
  "add-all($n1, $n2, $ns...)": function($n1, $n2, $ns) {
    if (!($n1 instanceof sass.types.Number)) {
      throw new Error("Expected a number");
    }
    if (!($n2 instanceof sass.types.Number)) {
      throw new Error("Expected a number");
    }
    let unit = $n1.getUnit();
    if ($n2.getUnit() !== unit) {
      throw new Error("units don't match");
    }
    let accum = $n1.getValue() + $n2.getValue();
    $ns.forEach(function ($n) {
      if (!($n instanceof sass.types.Number)) {
        throw new Error("Expected a number");
      }
      if ($n.getUnit() !== unit) {
        throw new Error("units don't match");
      }
      accum = accum + $n.getValue();
    });
    return sass.types.Number(accum, unit);
  }
};

const syncFunctions: Record<string, sass.SyncSassFunction> = {...syncFunction, ...syncVarArg};

const asyncFunction: Record<string, sass.AsyncSassFn2> = {
  "pow-async($base, $exp)": function ($base, $exp, done) {
    console.log(this.options.file); // "string"
    console.log(typeof this.callback); // "function"
    if ($base instanceof sass.types.Number && $exp instanceof sass.types.Number) {
      if ($base.getUnit() !== "" || $exp.getUnit() !== "") {
        done(new sass.types.Error("Cannot have units in an exponent"));
      }
      done(new sass.types.Number(Math.pow($base.getValue(), $exp.getValue())));
    } else {
      done(new sass.types.Error("Number expected"));
    }
  }
};

const asyncVarArg: Record<string, sass.AsyncSassVarArgFn3> = {
  "add-all-async($n1, $n2, $ns...)": function($n1, $n2, $ns, done) {
    if (!($n1 instanceof sass.types.Number)) {
      done(new sass.types.Error("Expected a number"));
      return;
    }
    if (!($n2 instanceof sass.types.Number)) {
      done(new sass.types.Error("Expected a number"));
      return;
    }
    let unit = $n1.getUnit();
    if ($n2.getUnit() !== unit) {
      done(new sass.types.Error("units don't match"));
      return;
    }
    let accum = $n1.getValue() + $n2.getValue();
    for (let i = 0; i < $ns.length; i++) {
      let $n = $ns[i];
      if (!($n instanceof sass.types.Number)) {
        done(new sass.types.Error("Expected a number"));
        return;
      }
      if ($n.getUnit() !== unit) {
        done(new sass.types.Error("units don't match"));
        return;
      }
      accum = accum + $n.getValue();

    }
    done(sass.types.Number(accum, unit));
  }
};

const asyncFunctions: Record<string, sass.AsyncSassFunction> = {...asyncFunction, ...asyncVarArg};

const functions: sass.FunctionDeclarations = {...syncFunctions, ...asyncFunctions};

sass.render({
  file: '/path/to/myFile.scss',
  data: 'body{background:blue; a{color:black;}}',
  functions,
  importer: [anotherAsyncImporter, asyncImporter, syncImporter],
  includePaths: ['lib/', 'mod/'],
  outputStyle: 'compressed'
}, handleAsyncResult);

// OR

sass.render({
  file: '/path/to/myFile.scss',
  data: 'body{background:blue; a{color:black;}}',
  importer: asyncImporter,
  includePaths: ['lib/', 'mod/'],
  outputStyle: 'compressed'
}, handleAsyncResult);

// OR

sass.render({
  file: '/path/to/myFile.scss',
  data: 'body{background:blue; a{color:black;}}',
  importer: syncImporter,
  includePaths: ['lib/', 'mod/'],
  outputStyle: 'compressed'
}, handleAsyncResult);

// OR

const result = sass.renderSync({
  file: '/path/to/file.scss',
  data: 'body{background:blue; a{color:black;}}',
  outputStyle: 'compressed',
  functions: syncFunctions,
  outFile: '/to/my/output.css',
  sourceMap: true, // or an absolute or relative (to outFile) path
  sourceMapRoot: '.',
  importer: syncImporter,
});

console.log(result.css);
console.log(result.map);
console.log(result.stats);

function someAsyncFunction(url: string, prev: string, callback: (result: { path: string; data: string }) => void): void { }

function sameType<V extends sass.types.Value>(v1: V, v2: V): boolean {
  return v1.constructor === v2.constructor;
}

// function-based Constructors and instance methods for types
let true1 = sass.types.Boolean(true);
true1.getValue(); // true
let true2 = sass.types.Boolean.TRUE;
let true3 = sass.TRUE;
sameType(true2, true3);
true2 === true3 // true
let false1 = sass.types.Boolean(false);
let false2 = sass.types.Boolean.FALSE;
let false3 = sass.FALSE;
false2 === false3 // true
false1.getValue(); // false
let null1 = sass.types.Null();
let null2 = sass.types.Null.NULL;
let null3 = sass.NULL;
sameType(null2, null3);
null1 === null2; // true
null1 === null3; // true
let ident = sass.types.String("x");
ident.getValue(); // 'x'
let stringQuoted = sass.types.String("'x'");
stringQuoted.getValue(); // '\'x\''
let number = sass.types.Number(5);
number.getUnit(); // ""
number.getValue(); // 5
let dimension = sass.types.Number(5, "px");
dimension.getUnit(); // "px"
let redOpaque = sass.types.Color(240, 15, 0);
redOpaque.getR(); // 240
redOpaque.getG(); // 15
redOpaque.getB(); // 0
redOpaque.getA(); // 1
let redTranslucent = sass.types.Color(240, 15, 0, 0.5);
redTranslucent.getA(); // 0.5
let redOpaque2 = sass.types.Color(0xF00F00FF);
redOpaque2.getR(); // 240
redOpaque2.getG(); // 15
redOpaque2.getB(); // 0
redOpaque2.getA(); // 1
let redTranslucent2 = sass.types.Color(0xF00F007F);
redTranslucent.getA(); // 0.5
let spaceList1 = sass.types.List(1);
spaceList1.getLength(); // 1
spaceList1.getSeparator(); // false
spaceList1.setValue(0, ident);
spaceList1.setValue(0, true1);
spaceList1.setValue(0, false1);
spaceList1.setValue(0, null1);
spaceList1.setValue(0, dimension);
spaceList1.setValue(0, redOpaque);
spaceList1.getValue(0) === redOpaque; // true
let spaceList2 = sass.types.List(1, false);
spaceList2.setValue(0, sass.types.String("s"));
let commaList1 = sass.types.List(2, true);
commaList1.getLength(); // 2
commaList1.getSeparator(); // true (it's a comma)
commaList1.setValue(0, spaceList1);
commaList1.setValue(2, spaceList2);
let map1 = sass.types.Map(2);
map1.getLength(); // 2
map1.setKey(0, ident);
map1.setValue(0, spaceList1);
ident === map1.getKey(0); // true
spaceList1 === map1.getValue(1); // true
sameType(ident, map1.getKey(0)); // true
let error = new sass.types.Error("message");

function valuesOf(enumerable: sass.types.Enumerable): sass.types.Value[] {
  let values = new Array<sass.types.Value>();
  for (let i = 0; i < enumerable.getLength(); i++) {
    values.push(enumerable.getValue(i));
  }
  return values;
}

let arr = valuesOf(map1);
console.dir(arr);
arr = valuesOf(commaList1);
console.dir(arr);

// new-based Constructors
// boolean and null raise a runtime error if constructed with new.
// let newTrue = new sass.types.Boolean(true);
// let newFalse = new sass.types.Boolean(false);
// let newNull = new sass.types.Null();
let newIdent = new sass.types.String("x");
let newNumber = new sass.types.Number(5);
let newDimension = new sass.types.Number(5, "px");
let newRedOpaque = new sass.types.Color(240, 15, 0);
let newRedTranslucent = new sass.types.Color(240, 15, 0, 0.5);
let newRedOpaque2 = new sass.types.Color(0xF00F00FF);
let newSpaceList1 = new sass.types.List(1);
let newSpaceList2 = new sass.types.List(1, false);
let newCommaList1 = new sass.types.List(2, true);
let newMap1 = new sass.types.Map(2);
let newError = new sass.types.Error("message");