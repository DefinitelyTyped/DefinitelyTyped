/// <reference path="valdr.d.ts" />

function ValdrTests() {
    var valdr: valdr.IValdr;
    var validation = valdr.validate('person', 'lastName', 'test');
    valdr.addConstraints({
        'person': {
            'lastName': {
                'required': {
                    'message': 'Last name is required.'
                }
            }
        }
    });
    valdr.removeConstraints('person');
    var constraints = valdr.getConstraints();
    valdr.setClasses({
        valid: 'demo-is-valid',
        invalid: 'demo-is-invalid'
    });
}

function ValdrProviderTests() {
    var valdrProvider: valdr.IValdrProvider;
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