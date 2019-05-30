import * as expressionEvaluator from 'expression-evaluator';

expressionEvaluator.evaluate({type: 'experiment', fields: []}, {}); // $ExpectType boolean

expressionEvaluator.eq({type: 'experiment', key: 'someKey', value: 'someValue'}, {}); // $ExpectType boolean

expressionEvaluator.neq({type: 'experiment', key: 'someKey', value: 'someValue'}, {}); // $ExpectType boolean

expressionEvaluator.and({type: 'experiment', fields: []}, {}); // $ExpectType boolean

expressionEvaluator.or({type: 'experiment', fields: []}, {}); // $ExpectType boolean
