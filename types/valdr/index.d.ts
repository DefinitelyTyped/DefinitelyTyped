// Type definitions for valdr.js v1.1.5
// Project: https://github.com/netceteragroup/valdr
// Definitions by: Kai Ilbertz <https://github.com/ilbertz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace valdr {

    /**
     * Custom validators must implement this interface to provide custom validation logic.
     */
    interface ValdrValidator {

        /**
         *  Custom validator's name, that will be set in the violation's validator field.
         */
        name: string;

        /**
         * Method to be called to perform custom validation over given value.
         */
        validate(value: any, validationArguments?: {[argumentName:string]: any}): boolean;
    }

    interface ValdrConstraintValidator {
        [argumentName:string]: any;
        message: string;
    }

    interface ValdrConstraintFieldName {
        [validatorName:string]: ValdrConstraintValidator;
    }

    interface ValdrConstraintTypeName {
        [fieldName:string]: ValdrConstraintFieldName;
    }

    interface ValdrConstraints {
        [typeName:string]: ValdrConstraintTypeName;
    }

    interface ValdrViolation extends ValdrConstraintValidator {
        valid: boolean;
        value: string;
        field: string;
        type: string;
        validator: string;
    }

    interface ValdrValidationResult {
        valid: boolean;
        violations: ValdrViolation[];
        validationResults: ValdrViolation[];
    }

    interface Valdr {
        /**
         * Validates the value of the given type with the constraints for the given field name.
         * @param typeName the type name.
         * @param fieldName the field name.
         * @param value the value to validate.
         * @returns {ValdrValidationResult} the validation result.
         */
        validate(typeName: string, fieldName: string, value: string): ValdrValidationResult;

        /**
         * Adds a new list of constraints (JSON Object).
         * @param newConstraints the list of constraints (JSON Object).
         */
        addConstraints(newConstraints: ValdrConstraints): void;

        /**
         * Removes one or many contraints.
         * @param constraintNames the name or array of constraint names.
         */
        removeConstraints(constraintNames: string | string[]): void;

        /**
         * Gets the list of constraints (JSON Object).
         * @returns the list of constraints.
         */
        getConstraints(): ValdrConstraints;

        /**
         * Sets custom classes on the surrounding elements.
         * @param newClasses the new classes.
         */
        setClasses(newClasses: { valid: string, invalid: string }): void;
    }

    interface ValdrProvider {
        /**
         * Adds a new list of constraints (JSON Object).
         * @param newConstraints the list of constraints (JSON Object).
         */
        addConstraints(newConstraints: ValdrConstraints): void;

        /**
         * Removes one or many contraints.
         * @param constraintNames the name or array of constraint names.
         */
        removeConstraints(constraintNames: string | string[]): void;

        /**
         * Sets the constraint URL (eg "/api/constraints").
         * @param url the URL of the contraints.
         */
        setConstraintUrl(url: string): void;

        /**
         * Adds a custom validator.
         * @param validatorName the name of the custom validator.
         */
        addValidator(validatorName: string): void;

        /**
         * Adds a constraint validator alias.
         * @param valdrName the validator name.
         * @param alias the validator alias name.
         */
        addConstraintAlias(valdrName: string, alias: string): void;
    }
}
