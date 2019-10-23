import * as pug from 'pug';


////////////////////////////////////////////////////////////
/// Options https://pugjs.org/api/reference.html#options ///
////////////////////////////////////////////////////////////
{
    let opts: pug.Options = {};
    let str = 'string'
    let bool = false;
    let strArray = ['string'];

    opts.filename = str;

    opts.basedir = str;

    opts.doctype = str;

    opts.pretty = str;
    opts.pretty = bool;

    opts.filters = {};

    opts.self = bool;

    opts.debug = bool;
    opts.compileDebug = bool;

    opts.globals = strArray;

    opts.cache = bool;

    opts.inlineRuntimeFunctions = bool;

    opts.name = str;
}

////////////////////////////////////////////////////////////
/// Methods https://pugjs.org/api/reference.html#methods ///
////////////////////////////////////////////////////////////
{
    let source = `p #{ name } 's Pug source code!`;
    let path = "foo.pug";
    let compileTemplate: pug.compileTemplate;
    let template: string;
    let clientFunctionString: string
    let str: string;

    {
        /// pug.compile(source, ?options) https://pugjs.org/api/reference.html#pugcompilesource-options
        compileTemplate = pug.compile(source);
        template = compileTemplate();
    }

    {
        /// pug.compileFile(path, ?options) https://pugjs.org/api/reference.html#pugcompilefilepath-options
        compileTemplate = pug.compileFile(path);
        template = compileTemplate();
    }

    {
        /// pug.compileClient(source, ?options) https://pugjs.org/api/reference.html#pugcompileclientsource-options
        clientFunctionString = pug.compileClient(path);
        str = pug.compileClient(path);
    }

    {
        /// pug.compileClientWithDependenciesTracked(source, ?options) https://pugjs.org/api/reference.html#pugcompileclientwithdependenciestrackedsource-options
        let obj = pug.compileClientWithDependenciesTracked(source);
        clientFunctionString = obj.body;
        str = obj.body;
        let strArray: string[] = obj.dependencies;
    }

    {
        /// pug.compileFileClient(path, ?options) https://pugjs.org/api/reference.html#pugcompilefileclientpath-options
        clientFunctionString = pug.compileFileClient(path);
        str = pug.compileFileClient(path);
    }

    {
        /// pug.render(source, ?options, ?callback) https://pugjs.org/api/reference.html#pugrendersource-options-callback
        str = pug.render(source);

        // test type for callback paraments
        pug.render(source, {}, (err, html) => {
            let e: Error | null = err;
            str = html;
        });
    }

    {
        /// pug.renderFile(path, ?options, ?callback) https://pugjs.org/api/reference.html#pugrenderfilepath-options-callback
        str = pug.renderFile(path);

        // test type for callback paraments
        pug.renderFile(path, {}, (err, html) => {
            let e: Error | null = err;
            str = html;
        });
    }
}
