export default class ATNDeserializationOptions {
    static readonly defaultOptions: ATNDeserializationOptions;

    readOnly: boolean;
    verifyATN: boolean | null;
    generateRuleBypassTransitions: boolean;

    constructor(copyFrom?: ATNDeserializationOptions);
}
