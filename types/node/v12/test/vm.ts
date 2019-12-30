import { createContext, isContext, Script, runInNewContext, runInThisContext, compileFunction } from 'vm';
import { inspect } from 'util';

{
    const sandbox = {
        animal: 'cat',
        count: 2
    };

    const context = createContext(sandbox, {
        name: 'test',
        origin: 'file://test.js',
        codeGeneration: {
            strings: true,
            wasm: true,
        },
    });
    console.log(isContext(context));
    const script = new Script('count += 1; name = "kitty"');

    for (let i = 0; i < 10; ++i) {
        script.runInContext(context);
    }

    console.log(inspect(sandbox));

    runInNewContext('count += 1; name = "kitty"', sandbox);
    console.log(inspect(sandbox));
}

{
    const sandboxes = [{}, {}, {}];

    const script = new Script('globalVar = "set"');

    sandboxes.forEach((sandbox) => {
        script.runInNewContext(sandbox);
        script.runInThisContext();
    });

    console.log(inspect(sandboxes));

    const localVar = 'initial value';
    runInThisContext('localVar = "vm";');

    console.log(localVar);
}

{
    runInThisContext('console.log("hello world"', './my-file.js');
}

{
    const fn: Function = compileFunction('console.log("test")', [], {
        parsingContext: createContext(),
        contextExtensions: [{
            a: 1,
        }],
        produceCachedData: false,
        cachedData: Buffer.from('nope'),
    });
}
