/* tslint:disable:no-mergeable-namespace no-namespace */
"use strict";

import conventionalCommitsParser from "conventional-commits-parser";

namespace Module {
    declare const options: conventionalCommitsParser.Options;

    conventionalCommitsParser(); // $ExpectType Transform
    conventionalCommitsParser(options); // $ExpectType Transform
}

namespace Module.sync {
    declare const commit: string;
    declare const options: conventionalCommitsParser.Options;

    conventionalCommitsParser.sync(commit); // $ExpectType Commit<string | number | symbol>
    conventionalCommitsParser.sync(commit, options); // $ExpectType Commit<string | number | symbol>
}

namespace Module.Commit {
    namespace Case01 {
        declare const commit: conventionalCommitsParser.Commit;

        // $ExpectType Commit<string | number | symbol>
        commit;
        commit.body; // $ExpectType Field
        commit.footer; // $ExpectType Field
        commit.header; // $ExpectType Field
        commit.mentions; // $ExpectType string[]
        commit.merge; // $ExpectType Field
        commit.notes; // $ExpectType Note[]
        commit.references; // $ExpectType Reference[]
        commit.revert; // $ExpectType Revert | null
        commit.scope; // $ExpectType string | null | undefined
        commit.subject; // $ExpectType string | null | undefined
        commit.type; // $ExpectType string | null | undefined
    }
}

namespace Module.Commit.Note {
    declare const note: conventionalCommitsParser.Commit.Note;

    // $ExpectType Note
    note;
    note.text; // $ExpectType string
    note.title; // $ExpectType string
}

namespace Module.Commit.Reference {
    declare const reference: conventionalCommitsParser.Commit.Reference;

    // $ExpectType Reference
    reference;
    reference.action; // $ExpectType Field
    reference.issue; // $ExpectType string
    reference.owner; // $ExpectType Field
    reference.prefix; // $ExpectType string
    reference.raw; // $ExpectType string
    reference.repository; // $ExpectType Field
}

namespace Module.Commit.Revert {
    declare const revert: conventionalCommitsParser.Commit.Revert;

    // $ExpectType Revert
    revert;
    revert.hash; // $ExpectType string | null | undefined
    revert.header; // $ExpectType string | null | undefined
}

namespace Module.Options {
    let options: conventionalCommitsParser.Options;
    options = {};
    options = {warn: console.warn.bind(console)};
    options = {warn: true};
}
