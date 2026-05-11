/// <reference types="jquery"/>

declare namespace FormSerializer {
    interface FormSerializerPatterns {
        validate: RegExp;
        key: RegExp;
        push: RegExp;
        fixed: RegExp;
        named: RegExp;
    }

    export var patterns: FormSerializerPatterns;
}

declare module "jquery-serialize-object" {
    export = FormSerializer;
}

declare module "form-serializer" {
    export = FormSerializer;
}

interface JQuery {
    /**
     * Serializes the selected form into a JavaScript object.
     */
    serializeObject(): Object;

    /**
     * Serializes the selected form into JSON.
     */
    serializeJSON(): string;
}
