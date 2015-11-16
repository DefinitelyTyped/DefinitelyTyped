// Type definitions for jquery.serialize-object 2.5.0
// Project: https://github.com/macek/jquery-serialize-object
// Definitions by: Florian Wagner <https://github.com/flqw>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../jquery/jquery.d.ts"/>

declare module FormSerializer {

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
