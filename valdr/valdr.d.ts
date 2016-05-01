// Type definitions for valdr.js v1.1.5
// Project: https://github.com/netceteragroup/valdr
// Definitions by: Kai Ilbertz <https://github.com/ilbertz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace valdr {

    interface IValdr {
        /**
         * Validates the value of the given type with the constraints for the given field name.
         * @param typeName the type name.
         * @param fieldName the field name.
         * @param value the value to validate.
         * @returns {*} the validation result.
         */
        validate(typeName: string, fieldName: string, value: string): any;

        /**
         * Adds a new list of constraints (JSON Object).
         * @param newConstraints the list of constraints (JSON Object).
         */
        addConstraints(newConstraints: any): void;

        /**
         * Removes one or many contraints.
         * @param constraintNames the name or array of constraint names.
         */
        removeConstraints(constraintNames: string | string[]): void;

        /**
         * Gets the list of constraints (JSON Object).
         * @returns the list of constraints.
         */
        getConstraints(): any;

        /**
         * Sets custom classes on the surrounding elements.
         * @param newClasses the new classes.
         */
        setClasses(newClasses: { valid: string, invalid: string }): void;
    }

    interface IValdrProvider {
        /**
         * Adds a new list of constraints (JSON Object).
         * @param newConstraints the list of constraints (JSON Object).
         */
        addConstraints(newConstraints: any): void;

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