function ValdrTests() {
    var valdr: valdr.Valdr;
    var validation = valdr.validate('person', 'lastName', 'test');
    var isValid = validation.valid;
    var violations = validation.violations;
    violations.forEach(function(violation:valdr.ValdrViolation) {
        var valid = violation.valid;
        var value = violation.value;
        var field = violation.field;
        var type = violation.type;
        var validator = violation.validator;
        var message = violation.message;
    });
    var results = validation.validationResults;
    results.forEach(function(violation:valdr.ValdrViolation) {
        var valid = violation.valid;
        var value = violation.value;
        var field = violation.field;
        var type = violation.type;
        var validator = violation.validator;
        var message = violation.message;
    });
    valdr.addConstraints({
        'person': {
            'lastName': {
                'required': {
                    'message': 'Last name is required.'
                }
            }
        }
    });
    var constraints = valdr.getConstraints();
    var constraintType = constraints["person"];
    var constraintField = constraintType["lastName"];
    var constraintValidator = constraintField["test"];
    var validationMessage = constraintValidator.message;
    valdr.removeConstraints('person');
    valdr.setClasses({
        valid: 'demo-is-valid',
        invalid: 'demo-is-invalid'
    });
}

function ValdrProviderTests() {
    var valdrProvider: valdr.ValdrProvider;
    valdrProvider.addConstraints({
        'person': {
            'lastName': {
                'required': {
                    'message': 'Last name is required.'
                }
            }
        }
    });
    valdrProvider.removeConstraints('person');
    valdrProvider.setConstraintUrl('/api/constraints');
    valdrProvider.addValidator('customValidator');
    valdrProvider.addConstraintAlias('customValidator', 'customValidatorAlias');
}
