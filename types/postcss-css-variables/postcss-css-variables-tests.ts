import postcss from 'postcss';
import cssvariables = require('postcss-css-variables');

// Using with postcss with and without config
postcss([cssvariables]);
postcss([cssvariables()]);
postcss([cssvariables({})]);

// Test preserve option
cssvariables({ preserve: true });
cssvariables({ preserve: 'computed' });
cssvariables({ preserve: () => true });
cssvariables({ preserve: () => 'computed' });

// Test variables option
cssvariables({
    variables: {
        '--var-1': 'red',
        '--var-2': { value: 'green' },
        '--var-3': { value: 'blue', isImportant: true },
    },
});

// Test other options
cssvariables({
    preserveInjectedVariables: true,
    preserveAtRulesOrder: true,
});
