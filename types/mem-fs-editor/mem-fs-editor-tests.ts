// tslint:disable:no-mergeable-namespace no-namespace

import { Options as TemplateOptions, Data as TemplateData } from 'ejs';
import { JSONSchema7Type } from 'json-schema';
import * as MemFs from 'mem-fs';
import * as MemFsEditor from 'mem-fs-editor';
import { Transform } from 'stream';

declare const STORE: MemFs.Store;

// Tests for `MemFsEditor.create`
namespace create {
    let editor: MemFsEditor.Editor;
    editor = MemFsEditor.create(STORE);
}

declare const EDITOR: MemFsEditor.Editor;
declare const FILE_PATH: string;
declare const FILE_PATHS: string | string[];

// Tests for `MemFsEditor.Editor#read`
namespace Editor.read {
    declare const STRING_DEFAULTS: string;
    declare const RAW_DEFAULTS: Buffer | NodeJS.ReadableStream;

    {
        let contents: string;

        contents = EDITOR.read(FILE_PATH);
        contents = EDITOR.read(FILE_PATH, { raw: false });
        contents = EDITOR.read(FILE_PATH, { raw: false, defaults: STRING_DEFAULTS });
        contents = EDITOR.read(FILE_PATH, { defaults: RAW_DEFAULTS }); // $ExpectError
        contents = EDITOR.read(FILE_PATH, { raw: false, defaults: RAW_DEFAULTS }); // $ExpectError
    }

    {
        let contents: Buffer | NodeJS.ReadableStream;

        contents = EDITOR.read(FILE_PATH, { raw: true });
        contents = EDITOR.read(FILE_PATH, { raw: true, defaults: RAW_DEFAULTS });
        contents = EDITOR.read(FILE_PATH, { raw: true, defaults: STRING_DEFAULTS }); // $ExpectError
    }
}

// Tests for `MemFsEditor.Editor#readJSON`
namespace Editor.readJSON {
    declare const DEFAULTS: JSONSchema7Type;

    {
        let json: JSONSchema7Type | undefined;
        json = EDITOR.readJSON(FILE_PATH);
    }

    {
        let json: JSONSchema7Type;
        json = EDITOR.readJSON(FILE_PATH, DEFAULTS);
    }
}

// Tests for `MemFsEditor.Editor#write`
namespace Editor.write {
    declare const CONTENTS: string | Buffer;

    let contents: string;
    contents = EDITOR.write(FILE_PATH, CONTENTS);
}

// Tests for `MemFsEditor.Editor#writeJSON`
namespace Editor.writeJSON {
    declare const CONTENTS: JSONSchema7Type;
    declare const REPLACER: ((key: string, value: any) => any) | Array<string | number>;
    declare const SPACE: number | string;

    let contents: string;

    contents = EDITOR.writeJSON(FILE_PATH, CONTENTS);
    contents = EDITOR.writeJSON(FILE_PATH, CONTENTS, REPLACER);
    contents = EDITOR.writeJSON(FILE_PATH, CONTENTS, REPLACER, SPACE);
    contents = EDITOR.writeJSON(FILE_PATH, CONTENTS, undefined, SPACE);
}

// Tests for `MemFsEditor.Editor#append`
namespace Editor.append {
    declare const CONTENTS: string | Buffer;
    declare const OPTIONS: MemFsEditor.AppendOptions;

    let contents: string;

    contents = EDITOR.append(FILE_PATH, CONTENTS);
    contents = EDITOR.append(FILE_PATH, CONTENTS, OPTIONS);
}

// Tests for `MemFsEditor.Editor#extendJSON`
namespace Editor.extendJSON {
    declare const CONTENTS: JSONSchema7Type;
    declare const REPLACER: ((key: string, value: any) => any) | Array<string | number>;
    declare const SPACE: number | string;

    EDITOR.extendJSON(FILE_PATH, CONTENTS);
    EDITOR.extendJSON(FILE_PATH, CONTENTS, REPLACER);
    EDITOR.extendJSON(FILE_PATH, CONTENTS, REPLACER, SPACE);
    EDITOR.extendJSON(FILE_PATH, CONTENTS, undefined, SPACE);
}

// Tests for `MemFsEditor.Editor#delete`
namespace Editor._delete {
    declare const OPTIONS: MemFsEditor.WithGlobOptions;

    EDITOR.delete(FILE_PATHS);
    EDITOR.delete(FILE_PATHS, OPTIONS);
}

// Tests for `MemFsEditor.Editor#copy`
namespace Editor.copy {
    declare const COPY_OPTIONS: MemFsEditor.CopyOptions;
    declare const CONTEXT: TemplateData;
    declare const TEMPLATE_OPTIONS: TemplateOptions;

    EDITOR.copy(FILE_PATHS, FILE_PATH);
    EDITOR.copy(FILE_PATHS, FILE_PATH, COPY_OPTIONS);
    EDITOR.copy(FILE_PATHS, FILE_PATH, COPY_OPTIONS, CONTEXT);
    EDITOR.copy(FILE_PATHS, FILE_PATH, COPY_OPTIONS, CONTEXT, TEMPLATE_OPTIONS);
}

// Tests for `MemFsEditor.Editor#copyTpl`
namespace Editor.copyTpl {
    declare const CONTEXT: TemplateData;
    declare const TEMPLATE_OPTIONS: TemplateOptions;
    declare const COPY_OPTIONS: MemFsEditor.CopyOptions;

    EDITOR.copyTpl(FILE_PATHS, FILE_PATH);
    EDITOR.copyTpl(FILE_PATHS, FILE_PATH, CONTEXT);
    EDITOR.copyTpl(FILE_PATHS, FILE_PATH, CONTEXT, TEMPLATE_OPTIONS);
    EDITOR.copyTpl(FILE_PATHS, FILE_PATH, CONTEXT, TEMPLATE_OPTIONS, COPY_OPTIONS);
}

// Tests for `MemFsEditor.Editor#move`
namespace Editor.move {
    declare const OPTIONS: MemFsEditor.WithGlobOptions;

    EDITOR.move(FILE_PATHS, FILE_PATH);
    EDITOR.move(FILE_PATHS, FILE_PATH, OPTIONS);
}

// Tests for `MemFsEditor.Editor#exists`
namespace Editor.exists {
    let exists: boolean;
    exists = EDITOR.exists(FILE_PATH);
}

// Tests for `MemFsEditor.Editor#commit`
namespace Editor.commit {
    declare const CALLBACK: (err: any) => void;
    declare const FILTERS: Transform[];

    EDITOR.commit(CALLBACK);
    EDITOR.commit(FILTERS, CALLBACK);
}
