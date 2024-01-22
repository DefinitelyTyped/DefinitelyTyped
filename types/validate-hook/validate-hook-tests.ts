import { InputsToValidateType, ValidateInputType } from ".";

/** This is a description of the foo function. */
export function useValidate() {
    function validateManySync<T extends string>(
        inputs: InputsToValidateType<T>,
    ) {
        let isValid = onCheckManyRequired(inputs);
        if (!isValid) return isValid;
        for (const i in inputs) {
            validateSingleSync(inputs[i], inputs);
            if (inputs[i].errors.length > 0) isValid = false;
        }
        return isValid;
    }

    async function validateMany<T extends string>(
        inputs: InputsToValidateType<T>,
    ) {
        let isValid = onCheckManyRequired(inputs);
        if (!isValid) return isValid;
        for (const i in inputs) {
            validateSingleSync(inputs[i], inputs);
        }
        for (const i in inputs) {
            if (inputs[i].errors.length > 0) isValid = false;
        }
        if (!isValid) return isValid;
        for (const i in inputs) {
            await validateSingle(inputs[i], inputs);
            if (inputs[i].errors.length > 0) isValid = false;
        }
        return isValid;
    }

    function validateSingleSync<T extends string>(
        input: ValidateInputType<T, T>,
        inputs?: InputsToValidateType<T>,
    ) {
        validateSync(input, inputs);
        crossfieldValidate(input, inputs);
        return input;
    }

    async function validateSingle<T extends string>(
        input: ValidateInputType<T, T>,
        inputs?: InputsToValidateType<T>,
    ) {
        validateSync(input, inputs);
        crossfieldValidate(input, inputs);
        if (input.errors.length > 0) return input; //IF INPUT HAS ERRORS IT DOESN'T JUMP TO THE NEXT STEP
        await validate(input, inputs);
        return input;
    }

    function validateSync<T extends string>(
        input: ValidateInputType<T, T>,
        inputs?: InputsToValidateType<T>,
    ) {
        const { attributes, validationsSync } = input;
        const newErrors: string[] = [];

        if (onCheckRequired(input)) return;
        if (!validationsSync) return;
        validationsSync(attributes, inputs && inputs).forEach(
            ({ conditional, message }) => {
                if (conditional) newErrors.push(message);
            },
        );
        input.errors = [...newErrors];
    }

    async function validate<T extends string>(
        input: ValidateInputType<T, T>,
        inputs?: InputsToValidateType<T>,
    ) {
        const { attributes, validations } = input;
        const newErrors: string[] = [];
        if (!validations) return;
        (await validations(attributes, inputs && inputs)).forEach(
            ({ conditional, message }) => {
                if (conditional) newErrors.push(message);
            },
        );
        input.errors = [...newErrors];
    }

    function crossfieldValidate<T extends string>(
        input: ValidateInputType<T, T>,
        inputs?: InputsToValidateType<T>,
    ) {
        if (!inputs) return;
        if (!input.crossfields || input.crossfields.length === 0) return;
        input.crossfields.forEach((crossInput) => {
            if (!inputs[crossInput].attributes.value) return;
            validateSync(inputs[crossInput], inputs);
        });
    }

    function onCheckRequired<T extends string>(input: ValidateInputType<T, T>) {
        const { attributes, required } = input;
        if (!attributes.value && required?.value) {
            if (!required.message) {
                input.errors.push(''); //PUTTING AN EMPTY STRING TO IDENTIFY THE INPUT AS REQUIRED
                return true;
            }
            input.errors.push(required.message);
            return true;
        }
        return false;
    }

    function onCheckManyRequired<T extends string>(
        inputs: InputsToValidateType<T>,
    ) {
        let isValid = true;
        for (const i in inputs) {
            onCheckRequired(inputs[i]);
            if (inputs[i].errors.length > 0) isValid = false;
        }
        return isValid;
    }

    return {
        validateSingleSync,
        validateSingle,
        validateManySync,
        validateMany,
    };
}
