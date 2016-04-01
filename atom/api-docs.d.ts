// Type definitions for Atom API docs
// Project: https://github.com/atom/atom/blob/master/build/tasks/docs-task.coffee
// Definitions by: vvakame <https://github.com/vvakame/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*
 How to generate.
 $ git clone git@github.com:atom/atom.git
 $ cd atom
 $ npm install
 $ cd build
 $ npm install
 $ grunt build-docs
 $ cd ../
 $ ls -la la docs/output/api.json
 api.json example https://gist.github.com/vvakame/10f8d2f3884affc32476
 */

declare namespace AtomDocTypes {
    interface Metadata {
        classes: { [className: string]: ClassInfo; };
    }

    interface ClassInfo {
        name: string;
        superClass: string;
        visibility: string;

        filename: string;
        srcUrl: string;
        summary: string;
        description: string;
        examples: Example[];
        sections: Section[];

        classMethods: ClassMethod[];
        classProperties: ClassProperty[];
        instanceMethods: InstanceMethod[];
        instanceProperties: InstanceProperty[];
    }

    interface Example {
        description: string;
        lang: string;
        code: string;
        raw: string;
    }

    interface Section {
        name: string;
        description: string;
    }

    interface ClassMethod {
        name: string;
        sectionName: string;
        srcUrl: string;
        visibility: string;
        summary: string;
        description: string;
        arguments: Argument[];
        returnValues: ReturnValue[];
    }

    interface ClassProperty {
    }

    interface InstanceMethod {
        name: string;
        sectionName: string;
        srcUrl: string;
        visibility: string;
        summary: string;
        description: string;
        arguments: Argument[];
        returnValues: ReturnValue[];
        titledArguments: TitledArgument[];
    }

    interface InstanceProperty {
        name: string;
        sectionName: string;
        srcUrl: string;
        visibility: string;
        summary: string;
        description: string;
    }

    interface Argument {
        name: string;
        description: string;
        type: string;
        isOptional: boolean;
        children: Argument[];
    }

    interface TitledArgument {
        title: string;
        description: string;
        arguments: Argument[];
    }

    interface ReturnValue {
        type: string;
        description: string;
    }
}
