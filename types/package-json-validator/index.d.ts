export namespace PJV {
    const emailFormat: RegExp;
    const packageFormat: RegExp;
    const urlFormat: RegExp;
    const versionFormat: RegExp;

    type SpecType = "array" | "boolean" | "object" | "string";

    interface SpecBase {
        format?: RegExp | undefined;
        recommended?: boolean | undefined;
        required?: boolean | undefined;
        warning?: boolean | undefined;
    }

    interface FieldSpecWithType extends SpecBase {
        type?: SpecType | undefined;
    }

    interface FieldSpecWithTypes extends SpecBase {
        types: SpecType[];
    }

    type FieldSpec = FieldSpecWithType | FieldSpecWithTypes;

    type FieldSpecs = Record<string, FieldSpec>;

    function getSpecMap(): FieldSpecs | false;

    function isValidVersionRange(v: string): boolean;

    function parse(data: string): object | string;

    type JsonSpecName = "npm" | "commonjs_1.0" | "commonjs_1.1";

    interface ValidationOptions {
        errors?: boolean | undefined;
        recommendations?: boolean | undefined;
        warnings?: boolean | undefined;
    }

    interface ValidationFailureResult {
        out: string;
        valid: false;
    }

    interface ValidationSuccessResult {
        errors?: string[];
        recommendations?: string[];
        valid: boolean;
        warnings?: string[];
    }

    type ValidationResult = ValidationFailureResult | ValidationSuccessResult;

    function validate(
        data: unknown,
        specName?: JsonSpecName,
        options?: ValidationOptions,
    ): ValidationResult;

    function validateType(name: string, field: FieldSpec, value: unknown): string[];

    function validateDependencies(name: string, deps: Record<string, string>): string[];

    interface EmailAndUrl {
        email: string;
        url: string;
    }

    interface MailAndWeb {
        mail: string;
        web: string;
    }

    function validateUrlOrMailto(name: string, obj: string | EmailAndUrl | MailAndWeb): string[];

    interface Person {
        email: string;
        name: string;
        url: string;
    }

    function validatePeople(name: string, obj: string | Person): string[];

    interface TypeAndUrl {
        type: string;
        url: string;
    }

    function validateUrlTypes(name: string, obj: string | TypeAndUrl | TypeAndUrl[]): unknown;
}
