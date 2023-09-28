import type { Visitor } from "@babel/core";
import {
    addDefault,
    addNamed,
    addNamespace,
    addSideEffect,
    ImportInjector,
    isModule,
} from "@babel/helper-module-imports";

const MyVisitor: Visitor = {
    Program(path) {
        // $ExpectType boolean
        isModule(path);
    },
    Identifier(path) {
        // $ExpectType Identifier
        addDefault(path, "some-pkg");

        // $ExpectType Identifier
        addNamed(path, "import-name", "some-pkg");
        // $ExpectType MemberExpression
        addNamed(path, "import-name", "some-pkg", { ensureLiveReference: true });
        // $ExpectType SequenceExpression
        addNamed(path, "import-name", "some-pkg", { ensureNoContext: true });

        // $ExpectType Identifier
        addNamespace(path, "some-pkg");

        // $ExpectType void
        addSideEffect(path, "some-pkg");

        const importInjector = new ImportInjector(path);

        // $ExpectType Identifier
        importInjector.addDefault("some-pkg", {});
        importInjector.addNamed("import-name", "some-pkg", {});
        importInjector.addNamespace("some-pkg", {});

        // $ExpectType void
        importInjector.addSideEffect("some-pkg", {});
    },
};
